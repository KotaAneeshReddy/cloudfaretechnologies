package com.cloudfare.cloudfare.controller;

import com.cloudfare.cloudfare.model.Job;
import com.cloudfare.cloudfare.repository.JobRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/jobs")
public class JobController {

    @Autowired
    private JobRepository jobRepository;

    @GetMapping
    public List<Job> getAllJobs() {
        return jobRepository.findAll();
    }

    @GetMapping("/{id}")
    public Job getJobById(@PathVariable("id") Long id) {
        return jobRepository.findById(id).orElse(null);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping
    public Job createJob(@RequestBody Job job) {
        return jobRepository.save(job);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping("/{id}")
    public Job updateJob(@PathVariable("id") Long id, @RequestBody Job job) {
        return jobRepository.findById(id)
                .map(existingJob -> {
                    job.setId(existingJob.getId());
                    return jobRepository.save(job);
                }).orElse(null);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/{id}")
    public void deleteJob(@PathVariable("id") Long id) {
        jobRepository.deleteById(id);
    }
}
