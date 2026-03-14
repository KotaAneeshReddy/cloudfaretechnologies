package com.cloudfare.cloudfare.controller;

import com.cloudfare.cloudfare.model.Enrollment;
import com.cloudfare.cloudfare.repository.EnrollmentRepository;
import com.cloudfare.cloudfare.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@RestController
@RequestMapping("/api/enrollments")
public class EnrollmentController {

    private static final Logger logger = LoggerFactory.getLogger(EnrollmentController.class);

    @Autowired
    private EnrollmentRepository enrollmentRepository;

    @Autowired
    private EmailService emailService;

    @PostMapping
    public ResponseEntity<?> enrollInProgram(@RequestBody Enrollment enrollment) {
        try {
            logger.info("New enrollment request for program: {}", enrollment.getCourseName());
            
            // Save to database
            Enrollment savedEnrollment = enrollmentRepository.save(enrollment);
            
            // Send Email Notification
            String subject = "New Program Enrollment: " + enrollment.getCourseName();
            String body = String.format(
                "New Enrollment Details:\n\n" +
                "Name: %s\n" +
                "Email: %s\n" +
                "Phone: %s\n" +
                "Program: %s\n" +
                "Enrollment ID: %d",
                enrollment.getName(),
                enrollment.getEmail(),
                enrollment.getPhone(),
                enrollment.getCourseName(),
                savedEnrollment.getId()
            );
            
            emailService.sendEmail("info@cloudfaretechnologies.com", subject, body);
            
            return ResponseEntity.ok(savedEnrollment);
        } catch (Exception e) {
            logger.error("Error processing enrollment", e);
            return ResponseEntity.internalServerError().body("Failed to process enrollment");
        }
    }
}
