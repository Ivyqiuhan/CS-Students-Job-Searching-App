package com.group.CSStudentJobSearchApp.model;

import java.util.Date;
import javax.persistence.*;

@Entity
@Table
public class UserAccount {
    @Id
    @SequenceGenerator(
        name = "user_sequence",
        sequenceName = "user_sequence",
        allocationSize =1
    )
    @GeneratedValue(
        strategy = GenerationType.SEQUENCE,
        generator = "user_sequence"
    )

    private long userKey;
    private String email;
    private String name;
    private String phoneNumber;
    private String location;
    private Date lastLogin;

    public UserAccount() {

    }

    public UserAccount(Long userKey, String email, String name, String phoneNumber, String location, Date lastLogin) {
        this.userKey = userKey;
        this.email = email;
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.location = location;
        this.lastLogin = lastLogin;
    }

    public String getEmail() {
        return email;
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



