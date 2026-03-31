package com.cloudfare.cloudfare.controller;

import com.cloudfare.cloudfare.model.Internship;
import com.cloudfare.cloudfare.repository.InternshipRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
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

    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping
    public Internship createInternship(@RequestBody Internship internship) {
        return internshipRepository.save(internship);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping("/{id}")
    public Internship updateInternship(@PathVariable("id") Long id, @RequestBody Internship internship) {
        return internshipRepository.findById(id)
                .map(existingInternship -> {
                    internship.setId(existingInternship.getId());
                    return internshipRepository.save(internship);
                }).orElse(null);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/{id}")
    public void deleteInternship(@PathVariable("id") Long id) {
        internshipRepository.deleteById(id);
    }
}
