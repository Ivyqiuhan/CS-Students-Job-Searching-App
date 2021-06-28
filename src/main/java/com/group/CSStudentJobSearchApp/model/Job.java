package com.group.CSStudentJobSearchApp.model;

import java.util.UUID;

public class Job {
    private final String source;
    private final String sourceID;
    private final UUID jobKey;
    private final String postDescription;
    private final String jobTitle;
    private final String company;
    private final Location location;
    private final Skill[] skills;
    private final String url;
    private final boolean isExpired;

    public Job(String source, String sourceID, UUID jobKey, String postDescription, String jobTitle, String company, Location location, Skill[] skills, String url, boolean isExpired) {
        this.source = source;
        this.sourceID = sourceID;
        this.jobKey = jobKey;
        this.postDescription = postDescription;
        this.jobTitle = jobTitle;
        this.company = company;
        this.location = location;
        this.skills = skills;
        this.url = url;
        this.isExpired = isExpired;
    }

    public String getSource() {
        return source;
    }

    public String getSourceID() {
        return sourceID;
    }

    public Location getLocation() {
        return location;
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

    public String getCompany() {
        return company;
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
