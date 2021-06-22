package com.group.CSStudentJobSearchApp.model;

import java.util.UUID;

public class Job {
    private final UUID jobKey;
    private final String postDescription;
    private final String jobTitle;
    private final String compnay;
    private final String city;
    private final String state;
    private final String country;
    private final Skill[] skills;
    private final String url;
    private final boolean isExpired;

    public Job(UUID jobKey, String postDescription, String jobTitle, String compnay, String city, String state,
               String country, Skill[] skills, String url, boolean isExpired) {
        this.jobKey = jobKey;
        this.postDescription = postDescription;
        this.jobTitle = jobTitle;
        this.compnay = compnay;
        this.city = city;
        this.state = state;
        this.country = country;
        this.skills = skills;
        this.url = url;
        this.isExpired = isExpired;
    }

    public UUID getJobKey() {
        return jobKey;
    }

    public String getPostDescription() {
        return postDescription;
    }

    public String getJobTitle() {
        return jobTitle;
    }

    public String getCompnay() {
        return compnay;
    }

    public String getCity() {
        return city;
    }

    public String getState() {
        return state;
    }

    public String getCountry() {
        return country;
    }

    public Skill[] getSkills() {
        return skills;
    }

    public String getUrl() {
        return url;
    }

    public boolean isExpired() {
        return isExpired;
    }
}
