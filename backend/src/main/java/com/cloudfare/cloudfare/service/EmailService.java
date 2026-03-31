package com.cloudfare.cloudfare.service;

import com.cloudfare.cloudfare.model.AppSetting;
import com.cloudfare.cloudfare.repository.AppSettingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.stereotype.Service;

import java.util.Properties;

@Service
public class EmailService {

    @Autowired
    private AppSettingRepository appSettingRepository;

    @Value("${spring.mail.host:smtpout.secureserver.net}")
    private String defaultHost;

    @Value("${spring.mail.port:465}")
    private int defaultPort;

    @Value("${spring.mail.username:info@cloudfaretechnologies.com}")
    private String defaultUsername;

    @Value("${spring.mail.password:Cloudfare@123}")
    private String defaultPassword;

    private JavaMailSender getMailSender() {
        JavaMailSenderImpl mailSender = new JavaMailSenderImpl();
        
        String host = appSettingRepository.findBySettingKey("MAIL_HOST")
                .map(AppSetting::getSettingValue).orElse(defaultHost);
        int port = appSettingRepository.findBySettingKey("MAIL_PORT")
                .map(s -> Integer.parseInt(s.getSettingValue())).orElse(defaultPort);
        String username = appSettingRepository.findBySettingKey("MAIL_USERNAME")
                .map(AppSetting::getSettingValue).orElse(defaultUsername);
        String password = appSettingRepository.findBySettingKey("MAIL_PASSWORD")
                .map(AppSetting::getSettingValue).orElse(defaultPassword);

        mailSender.setHost(host);
        mailSender.setPort(port);
        mailSender.setUsername(username);
        mailSender.setPassword(password);

        Properties props = mailSender.getJavaMailProperties();
        props.put("mail.transport.protocol", "smtp");
        props.put("mail.smtp.auth", "true");
        props.put("mail.smtp.ssl.enable", "true");
        props.put("mail.debug", "true");

        return mailSender;
    }

    public void sendEmail(String to, String subject, String body) {
        JavaMailSender sender = getMailSender();
        SimpleMailMessage message = new SimpleMailMessage();
        
        String from = appSettingRepository.findBySettingKey("MAIL_FROM")
                .map(AppSetting::getSettingValue).orElse("info@cloudfaretechnologies.com");

        message.setFrom(from);
        message.setTo(to);
        message.setSubject(subject);
        message.setText(body);
        sender.send(message);
    }
}
