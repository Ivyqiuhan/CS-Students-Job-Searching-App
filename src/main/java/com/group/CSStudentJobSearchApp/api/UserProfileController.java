package com.group.CSStudentJobSearchApp.api;

import java.util.List;

import com.group.CSStudentJobSearchApp.model.UserProfile;
import com.group.CSStudentJobSearchApp.service.UserProfileService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "/users")
public class UserProfileController {

    private final UserProfileService userService;

    @Autowired
    public UserProfileController(UserProfileService userService) {
        this.userService = userService;
    }

    @GetMapping
    public List<UserProfile> getUsers() {
        return userService.getUsers();
    }

    @PostMapping
    public void addNewUser(@RequestBody UserProfile user) {
        userService.addNewUser(user);
    }
}
