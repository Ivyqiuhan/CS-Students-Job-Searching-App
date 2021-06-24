package com.group.CSStudentJobSearchApp.model;

import java.util.Date;

public class UserProfile {
    private String password;
    private String name;
    private String phoneNumber;
    private String location;

    public UserProfile(String password, String name, String phoneNumber, String location) {
        this.password = password;
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.location = location;
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
}
