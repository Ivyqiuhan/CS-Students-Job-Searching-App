package com.group.CSStudentJobSearchApp.api;

import com.group.CSStudentJobSearchApp.model.Job;
import com.group.CSStudentJobSearchApp.model.Location;
import com.group.CSStudentJobSearchApp.model.Skill;
import com.group.CSStudentJobSearchApp.service.JobService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping(path = "/jobs")
public class JobController {

    private final JobService jobService;

    @Autowired
    public JobController(JobService jobService) {
        this.jobService = jobService;
    }

    @GetMapping
    public List<Job> getJobs() {
        return jobService.getJobs();
    }

    @PostMapping
    public void addNewJob(@RequestBody Job job) {
        jobService.addNewJob(job);
    }
}
