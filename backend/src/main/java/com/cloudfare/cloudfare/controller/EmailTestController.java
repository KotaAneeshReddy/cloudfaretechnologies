package com.cloudfare.cloudfare.controller;

import com.cloudfare.cloudfare.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/test-email")
public class EmailTestController {

    @Autowired
    private EmailService emailService;

    @GetMapping
    public String testEmail() {
        try {
            emailService.sendEmail(
                "info@cloudfaretechnologies.com",
                "Connection Test: Cloudfare Backend",
                "This is a test email to verify GoDaddy Titan SMTP configuration is working correctly after DB sync."
            );
            return "Test email triggered successfully! Check the backend logs and your inbox.";
        } catch (Exception e) {
            return "Failed to send test email: " + e.getMessage();
        }
    }
}
