package com.group.CSStudentJobSearchApp.model;

import javax.persistence.*;

@Entity
@Table
public class UserProfile {
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
    private Long id;

    @Column(unique=true)
    private String email;

    private String name;
    private String phoneNumber;
    private String location;

    @OneToOne(mappedBy = "userProfile")
    private UserCredential userCredential;

    public UserProfile() {

    }

    public UserProfile(Long userProfileKey, String email, String name, String phoneNumber, String location) {
        this.id = userProfileKey;
        this.email = email;
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.location = location;
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
}



