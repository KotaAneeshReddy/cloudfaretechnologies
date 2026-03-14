package com.cloudfare.cloudfare.controller;

import com.cloudfare.cloudfare.model.Application;
import com.cloudfare.cloudfare.repository.ApplicationRepository;
import com.cloudfare.cloudfare.service.FileStorageService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("/api/applications")
@Slf4j
public class ApplicationController {

    @Autowired
    private ApplicationRepository applicationRepository;

    @Autowired
    private FileStorageService fileStorageService;

    @GetMapping
    public List<Application> getAllApplications() {
        return applicationRepository.findAll();
    }

    @PostMapping(consumes = "multipart/form-data")
    public Application submitApplication(
            @RequestPart("application") Application application,
            @RequestPart("resume") MultipartFile resume) {
        
        log.info("Received application for: {} from {}", 
            application.getJob() != null ? "Job " + application.getJob().getId() : "Internship " + application.getInternship().getId(),
            application.getEmail());

        String fileName = fileStorageService.storeFile(resume);
        application.setResumeUrl(fileName);
        
        log.info("Successfully stored resume: {}", fileName);
        return applicationRepository.save(application);
    }
}
