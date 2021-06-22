package com.group.CSStudentJobSearchApp.model;

import java.util.UUID;

public class User {
    private final UUID id;
    private final String email;
    private UserProfile userProfile;

    public User(UUID id, String email) {
        this.id = id;
        this.email = email;
    }

    public UUID getId() {
        return id;
    }

    public String getEmail() {
        return email;
    }

    public UserProfile getUserProfile() {
        return userProfile;
    }

    public void setUserProfile(UserProfile userProfile) {
        this.userProfile = userProfile;
    }
}



