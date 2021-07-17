package com.group.CSStudentJobSearchApp.model;

import jdk.jfr.Enabled;

import javax.persistence.*;
import java.util.Arrays;
import java.util.UUID;

@Entity
@Table
public class Job {
    @Id
    @SequenceGenerator(
            name = "job_sequence",
            sequenceName = "job_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "job_sequence"
    )
    private long jobKey;
    private String source;
    private String sourceID;
    private String postDescription;
    private String jobTitle;
    private String company;
    private String url;
    private boolean isExpired;
    @Transient
    private Location location;
    @Transient
    private Skill[] skills;

    public Job() {
    }

    // comment fields
    public Job(Long jobKey, String source, String sourceID, String jobTitle, String company, String url) {
        this.jobKey = jobKey;
        this.source = source;
        this.sourceID = sourceID;
        this.jobTitle = jobTitle;
        this.company = company;
//        this.location = location;
        this.url = url;
    }

    // From Indeed
    public Job(Long jobKey, String source, String sourceID, String postDescription, String jobTitle, String company, String url, boolean isExpired) {
        this.source = source;
        this.sourceID = sourceID;
        this.jobKey = jobKey;
        this.postDescription = postDescription;
        this.jobTitle = jobTitle;
        this.company = company;
//        this.location = location;
//        this.skills = skills;
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

    public long getJobKey() {
        return jobKey;
    }

    public void setJobKey(long jobKey) {
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

//    public Location getLocation() {
//        return location;
//    }
//
//    public void setLocation(Location location) {
//        this.location = location;
//    }
//
//    public Skill[] getSkills() {
//        return skills;
//    }
//
//    public void setSkills(Skill[] skills) {
//        this.skills = skills;
//    }

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

    @Override
    public String toString() {
        return "Job{" +
                "jobKey=" + jobKey +
                ", source='" + source + '\'' +
                ", sourceID='" + sourceID + '\'' +
                ", postDescription='" + postDescription + '\'' +
                ", jobTitle='" + jobTitle + '\'' +
                ", company='" + company + '\'' +
                ", url='" + url + '\'' +
                ", isExpired=" + isExpired +
                '}';
    }
}
