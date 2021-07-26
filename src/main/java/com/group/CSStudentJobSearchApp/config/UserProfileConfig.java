package com.group.CSStudentJobSearchApp.config;

import java.util.List;

import com.group.CSStudentJobSearchApp.dao.UserProfileRepository;
import com.group.CSStudentJobSearchApp.model.UserProfile;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class UserProfileConfig {
    
    @Bean
    CommandLineRunner commandLineRunnerForUserAccounts(UserProfileRepository userAccountRepository) {
        return args -> {
            UserProfile johnGreen = new UserProfile(
                (long) 1,
                "johngreen@example.com",
                "John Green",
                "1112223333",
                "Vancouver"
            );

            UserProfile harryPotter = new UserProfile(
                (long) 2,
                "harry_potter@example.com",
                "Harry Potter",
                "1231231234",
                "Toronto"
            );

            UserProfile samSmith = new UserProfile(
                (long) 3,
                "sam@example.com",
                "Sam Smith",
                "1234567890",
                "Vancouver"
            );

            UserProfile emmaWatson = new UserProfile(
                (long) 4,
                "emmawatson1@example.com",
                "Emma Watson",
                "9998887777",
                "Ottawa"
            );

            UserProfile peterParker = new UserProfile(
                (long) 5,
                "peter@example.com",
                "Peter Parker",
                "9876543210",
                "Toronto"
            );

            userAccountRepository.saveAll(List.of(johnGreen, harryPotter, samSmith, emmaWatson, peterParker));
        };
    }
}
