package com.group.CSStudentJobSearchApp.service;

import java.util.List;

import com.group.CSStudentJobSearchApp.dao.UserAccountRepository;
import com.group.CSStudentJobSearchApp.model.UserAccount;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserAccountService {
    private final UserAccountRepository userRepository;

    @Autowired
    public UserAccountService(UserAccountRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<UserAccount> getUsers() {
        System.out.println("user retrieved");
        return userRepository.findAll();
    }

    public void addNewUser(UserAccount user) {
        System.out.println("user added");
        System.out.println("user");
    }


}
