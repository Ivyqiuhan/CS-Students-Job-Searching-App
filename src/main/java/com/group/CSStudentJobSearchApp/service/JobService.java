package com.group.CSStudentJobSearchApp.service;

import com.group.CSStudentJobSearchApp.dao.JobRepository;
import com.group.CSStudentJobSearchApp.model.Job;
import com.group.CSStudentJobSearchApp.model.Location;
import com.group.CSStudentJobSearchApp.model.Skill;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class JobService {
    private final JobRepository jobRepository;

    @Autowired
    public JobService(JobRepository jobRepository) {
        this.jobRepository = jobRepository;
    }

    public List<Job> getJobs() {
        return jobRepository.findAll();
    }

    public void addNewJob(Job job) {
        System.out.println("post is working");
        System.out.println(job);
    }
}
