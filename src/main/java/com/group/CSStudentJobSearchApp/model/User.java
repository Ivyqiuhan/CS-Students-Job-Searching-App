package com.group.CSStudentJobSearchApp.model;

import java.util.Date;
import java.util.UUID;

public class User {
    private final UUID id;
    private final String email;
    private Date lastLogin;

    public User(UUID id, String email, Date lastLogin) {
        this.id = id;
        this.email = email;
        this.lastLogin = lastLogin;
    }

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

    public Date getLastLogin() {
        return lastLogin;
    }
}



