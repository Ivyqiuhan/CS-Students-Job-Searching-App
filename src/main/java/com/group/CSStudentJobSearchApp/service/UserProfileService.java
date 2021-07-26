package com.group.CSStudentJobSearchApp.service;

import java.util.List;

import com.group.CSStudentJobSearchApp.dao.UserProfileRepository;
import com.group.CSStudentJobSearchApp.model.UserProfile;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserProfileService {
    private final UserProfileRepository userProfileRepository;

    @Autowired
    public UserProfileService(UserProfileRepository userRepository) {
        this.userProfileRepository = userRepository;
    }   

    public List<UserProfile> getUsers() {
        System.out.println("user retrieved");
        return userProfileRepository.findAll();
    }

    public void addNewUser(UserProfile user) {
        System.out.println("user added");
        System.out.println("user");
    }


}
