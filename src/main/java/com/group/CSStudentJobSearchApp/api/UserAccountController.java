package com.group.CSStudentJobSearchApp.api;

import java.util.List;

import com.group.CSStudentJobSearchApp.model.UserAccount;
import com.group.CSStudentJobSearchApp.service.UserAccountService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "/users")
public class UserAccountController {

    private final UserAccountService userService;

    @Autowired
    public UserAccountController(UserAccountService userService) {
        this.userService = userService;
    }

    @GetMapping
    public List<UserAccount> getUsers() {
        return userService.getUsers();
    }

    @PostMapping
    public void addNewUser(@RequestBody UserAccount user) {
        userService.addNewUser(user);
    }
}
