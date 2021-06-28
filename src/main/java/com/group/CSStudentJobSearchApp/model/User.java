package com.group.CSStudentJobSearchApp.model;

import java.util.Date;
import java.util.UUID;

public class User {
    private final UUID id;
    private final String email;
    private String password;
    private String name;
    private String phoneNumber;
    private String location;
    private Date lastLogin;

    public User(UUID id, String email, String password, String name, String phoneNumber, String location, Date lastLogin) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.location = location;
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

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public Date getLastLogin() {
        return lastLogin;
    }

    public void setLastLogin(Date lastLogin) {
        this.lastLogin = lastLogin;
    }
}



