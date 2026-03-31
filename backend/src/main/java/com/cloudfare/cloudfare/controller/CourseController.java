package com.cloudfare.cloudfare.controller;

import com.cloudfare.cloudfare.model.Course;
import com.cloudfare.cloudfare.repository.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/courses")
public class CourseController {

    @Autowired
    private CourseRepository courseRepository;

    @GetMapping
    public List<Course> getAllCourses() {
        return courseRepository.findAll();
    }

    @GetMapping("/{id}")
    public Course getCourseById(@PathVariable("id") Long id) {
        return courseRepository.findById(id).orElse(null);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping
    public Course createCourse(@RequestBody Course course) {
        return courseRepository.save(course);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping("/{id}")
    public Course updateCourse(@PathVariable("id") Long id, @RequestBody Course course) {
        return courseRepository.findById(id)
                .map(existingCourse -> {
                    course.setId(existingCourse.getId());
                    return courseRepository.save(course);
                }).orElse(null);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/{id}")
    public void deleteCourse(@PathVariable("id") Long id) {
        courseRepository.deleteById(id);
    }
}
