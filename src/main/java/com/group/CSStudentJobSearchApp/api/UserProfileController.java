package com.group.CSStudentJobSearchApp.api;

import java.util.List;

import com.group.CSStudentJobSearchApp.model.UserProfile;
import com.group.CSStudentJobSearchApp.service.UserProfileService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "/users")
public class UserProfileController {

    private final UserProfileService userProfileService;

    @Autowired
    public UserProfileController(UserProfileService userProfileService) {
        this.userProfileService = userProfileService;
    }

    @GetMapping
    public List<UserProfile> getUsers() {
        return userProfileService.getUsers();
    }

    @PostMapping
    public void addNewUser(@RequestBody UserProfile user) {
        userProfileService.addNewUser(user);
    }
}
