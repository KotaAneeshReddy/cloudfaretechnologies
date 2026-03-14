package com.cloudfare.cloudfare.controller;

import com.cloudfare.cloudfare.model.ContactRequest;
import com.cloudfare.cloudfare.service.EmailService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/contact")
@Slf4j
public class ContactController {

    @Autowired
    private EmailService emailService;

    @PostMapping
    public ResponseEntity<String> submitContactForm(@RequestBody ContactRequest request) {
        log.info("Received contact form submission from: {}", request.getEmail());
        
        try {
            String emailBody = String.format(
                "New Contact Form Submission:\n\n" +
                "Name: %s\n" +
                "Email: %s\n" +
                "Subject: %s\n" +
                "Message:\n%s",
                request.getName(), request.getEmail(), request.getSubject(), request.getMessage()
            );

            emailService.sendEmail(
                "info@cloudfaretechnologies.com",
                "New Contact Form Submission: " + request.getSubject(),
                emailBody
            );

            log.info("Successfully sent contact email for: {}", request.getEmail());
            return ResponseEntity.ok("Message sent successfully!");
        } catch (Exception e) {
            log.error("Failed to send contact email: ", e);
            return ResponseEntity.status(500).body("Failed to send message. Please try again later.");
        }
    }
}
