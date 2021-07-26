package com.group.CSStudentJobSearchApp.dao;

import com.group.CSStudentJobSearchApp.model.Job;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface JobRepository
        extends JpaRepository<Job, String> {
}
