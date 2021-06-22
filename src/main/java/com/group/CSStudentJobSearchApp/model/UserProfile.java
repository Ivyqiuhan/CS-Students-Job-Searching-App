package com.group.CSStudentJobSearchApp.model;

import java.util.Date;

public class UserProfile {
    private String password;
    private String name;
    private int phoneNumber;
    private String location;
    private Date lastLogin;

    public UserProfile(String password, String name, int phoneNumber, String location, Date lastLogin) {
        this.password = password;
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.location = location;
        this.lastLogin = lastLogin;
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

    public int getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(int phoneNumber) {
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
