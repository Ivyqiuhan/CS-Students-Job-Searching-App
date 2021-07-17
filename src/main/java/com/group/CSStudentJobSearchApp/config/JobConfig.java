package com.group.CSStudentJobSearchApp.config;

import com.group.CSStudentJobSearchApp.dao.JobRepository;
import com.group.CSStudentJobSearchApp.model.Job;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;
import java.util.UUID;

@Configuration
public class JobConfig {

    @Bean
    CommandLineRunner commandLineRunner(JobRepository jobRepository) {
        return args -> {
            Job javaJob = new Job(
                    (long) 1,
                    "indeed",
                    "1",
                    "looking for an object-oriented Java Developer... Java Servlets,\n" +
                            "              HTML, JavaScript, AJAX, Struts, Struts2, JSF) desirable. Familiarity with\n" +
                            "              Tomcat and the Java...",
                    "Java Developer",
                    "XYZ Corp",
                    "https://www.indeed.com/viewjob?jk=12345&indpubnum=8343699265155203",
                    false);

            Job PythonJob = new Job(
                    (long) 2,
                    "indeed",
                    "1",
                    "looking for a backend Developer in Python Servlets",
                    "Python Developer",
                    "Van Local Corp",
                    "https://www.indeed.com/viewjob?jk=12345&indpubnum=8343699265155203",
                    false);

            Job CJob = new Job(
                    (long) 3,
                    "linkedIn",
                    "2",
                    "looking for a embedded Developer in C",
                    "C Developer",
                    "Ciena",
                    "https://www.indeed.com/viewjob?jk=12345&indpubnum=8343699265155203",
                    false);

            Job Cjob2 = new Job(
                    (long) 4,
                    "linkedIn",
                    "2",
                    "looking for a embedded Developer in C",
                    "C Developer",
                    "Cisco",
                    "https://www.indeed.com/viewjob?jk=12345&indpubnum=8343699265155203",
                    false);

            Job reactJob = new Job(
                    (long) 5,
                    "indeed",
                    "1",
                    "looking for a frontend Developer in React and Redux",
                    "Frontend Developer",
                    "Clio",
                    "https://www.indeed.com/viewjob?jk=12345&indpubnum=8343699265155203",
                    false);

            Job reduxJob = new Job(
                    (long) 6,
                    "indeed",
                    "1",
                    "looking for a frontend Developer in React and Redux",
                    "Frontend Developer",
                    "Van Local Corp",
                    "https://www.indeed.com/viewjob?jk=12345&indpubnum=8343699265155203",
                    false);

            Job fullStackJob = new Job(
                    (long) 7,
                    "indeed",
                    "1",
                    "looking for a full stack Developer",
                    "Full stack Developer",
                    "Van Local Startup",
                    "https://www.indeed.com/viewjob?jk=12345&indpubnum=8343699265155203",
                    false);

            Job fullStackJob2 = new Job(
                    (long) 8,
                    "indeed",
                    "1",
                    "looking for a full stack Developer",
                    "Full stack Developer",
                    "Van Local Startup",
                    "https://www.indeed.com/viewjob?jk=12345&indpubnum=8343699265155203",
                    false);

            Job QAJob = new Job(
                    (long) 9,
                    "Other",
                    "3",
                    "looking for a QA Developer",
                    "QA Developer",
                    "Amazon",
                    "https://www.indeed.com/viewjob?jk=12345&indpubnum=8343699265155203",
                    false);

            Job dataScienceJob = new Job(
                    (long) 10,
                    "Other2",
                    "4",
                    "looking for a Developer to build model using Python",
                    "Data Science",
                    "Facebook",
                    "https://www.indeed.com/viewjob?jk=12345&indpubnum=8343699265155203",
                    false);
            jobRepository.saveAll(List.of(javaJob, PythonJob, CJob, Cjob2, reactJob, reduxJob, fullStackJob,
                    fullStackJob2, QAJob, dataScienceJob));
        };
    }
}
