package com.cloudfare.cloudfare.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import java.nio.file.Path;
import java.nio.file.Paths;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        Path uploadDir = Paths.get("uploads/resumes");
        String uploadPath = uploadDir.toFile().getAbsolutePath();

        registry.addResourceHandler("/resumes/**")
                .addResourceLocations("file:" + uploadPath + "/");
    }

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/api/**")
                .allowedOrigins(
                        "http://localhost:5173",
                        "http://138.252.200.212",
                        "http://138.252.200.212:8080",
                        "http://cloudfaretechnologies.com",
                        "http://www.cloudfaretechnologies.com",
                        "http://cloudfaretechnologies.com:8080",
                        "http://www.cloudfaretechnologies.com:8080",
                        "https://cloudfaretechnologies.com",
                        "https://www.cloudfaretechnologies.com",
                        "https://cloudfaretechnologies.com:8080",
                        "https://www.cloudfaretechnologies.com:8080")
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                .allowedHeaders("*")
                .allowCredentials(true);
    }
}
