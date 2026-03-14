package com.cloudfare.cloudfare.controller;

import com.cloudfare.cloudfare.model.Internship;
import com.cloudfare.cloudfare.repository.InternshipRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/internships")
public class InternshipController {

    @Autowired
    private InternshipRepository internshipRepository;

    @GetMapping
    public List<Internship> getAllInternships() {
        return internshipRepository.findAll();
    }

    @GetMapping("/{id}")
    public Internship getInternshipById(@PathVariable("id") Long id) {
        return internshipRepository.findById(id).orElse(null);
    }

    @PostMapping
    public Internship createInternship(@RequestBody Internship internship) {
        return internshipRepository.save(internship);
    }
}
