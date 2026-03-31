package com.cloudfare.cloudfare.controller;

import com.cloudfare.cloudfare.model.AppSetting;
import com.cloudfare.cloudfare.repository.AppSettingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/settings")
public class SettingController {

    @Autowired
    private AppSettingRepository appSettingRepository;

    @GetMapping
    @PreAuthorize("hasRole('ADMIN')")
    public List<AppSetting> getAllSettings() {
        return appSettingRepository.findAll();
    }

    @PutMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<AppSetting> updateSetting(@PathVariable Long id, @RequestBody AppSetting settingDetails) {
        AppSetting setting = appSettingRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Setting not found with id: " + id));

        setting.setSettingValue(settingDetails.getSettingValue());
        if (settingDetails.getDescription() != null) {
            setting.setDescription(settingDetails.getDescription());
        }

        return ResponseEntity.ok(appSettingRepository.save(setting));
    }

    @PostMapping
    @PreAuthorize("hasRole('ADMIN')")
    public AppSetting createSetting(@RequestBody AppSetting setting) {
        return appSettingRepository.save(setting);
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> deleteSetting(@PathVariable Long id) {
        AppSetting setting = appSettingRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Setting not found with id: " + id));
        appSettingRepository.delete(setting);
        return ResponseEntity.ok("Setting deleted successfully");
    }
}
