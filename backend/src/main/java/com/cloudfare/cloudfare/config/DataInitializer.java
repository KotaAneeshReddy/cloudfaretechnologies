package com.cloudfare.cloudfare.config;

import com.cloudfare.cloudfare.model.AppSetting;
import com.cloudfare.cloudfare.repository.AppSettingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.Arrays;
import java.util.List;

@Component
public class DataInitializer implements CommandLineRunner {

    @Autowired
    private AppSettingRepository appSettingRepository;

    @Value("${spring.mail.host}")
    private String mailHost;

    @Value("${spring.mail.port}")
    private String mailPort;

    @Value("${spring.mail.username}")
    private String mailUsername;

    @Value("${spring.mail.password}")
    private String mailPassword;

    @Override
    public void run(String... args) throws Exception {
        if (appSettingRepository.count() == 0) {
            List<AppSetting> initialSettings = Arrays.asList(
                new AppSetting("MAIL_HOST", mailHost, "SMTP Host server"),
                new AppSetting("MAIL_PORT", mailPort, "SMTP Port (e.g. 465 or 587)"),
                new AppSetting("MAIL_USERNAME", mailUsername, "SMTP Username"),
                new AppSetting("MAIL_PASSWORD", mailPassword, "SMTP Password"),
                new AppSetting("MAIL_FROM", mailUsername, "Email address appearing in 'From' field")
            );
            appSettingRepository.saveAll(initialSettings);
            System.out.println("Initial application settings seeded from properties file.");
        }
    }
}
