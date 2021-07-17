package com.group.CSStudentJobSearchApp.model;

import java.util.UUID;

public class Job {
    private String source;
    private String sourceID;
    private UUID jobKey;
    private String postDescription;
    private String jobTitle;
    private String company;
    private Location location;
    private Skill[] skills;
    private String url;
    private boolean isExpired;

    public Job() {
    }

    // comment fields
    public Job(String source, String sourceID, String jobTitle, String company, Location location, String url) {
        this.source = source;
        this.sourceID = sourceID;
        this.jobTitle = jobTitle;
        this.company = company;
        this.location = location;
        this.url = url;
    }

    // From Indeed
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

    public void setSource(String source) {
        this.source = source;
    }

    public String getSourceID() {
        return sourceID;
    }

    public void setSourceID(String sourceID) {
        this.sourceID = sourceID;
    }

    public UUID getJobKey() {
        return jobKey;
    }

    public void setJobKey(UUID jobKey) {
        this.jobKey = jobKey;
    }

    public String getPostDescription() {
        return postDescription;
    }

    public void setPostDescription(String postDescription) {
        this.postDescription = postDescription;
    }

    public String getJobTitle() {
        return jobTitle;
    }

    public void setJobTitle(String jobTitle) {
        this.jobTitle = jobTitle;
    }

    public String getCompany() {
        return company;
    }

    public void setCompany(String company) {
        this.company = company;
    }

    public Location getLocation() {
        return location;
    }

    public void setLocation(Location location) {
        this.location = location;
    }

    public Skill[] getSkills() {
        return skills;
    }

    public void setSkills(Skill[] skills) {
        this.skills = skills;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public boolean isExpired() {
        return isExpired;
    }

    public void setExpired(boolean expired) {
        isExpired = expired;
    }
}
