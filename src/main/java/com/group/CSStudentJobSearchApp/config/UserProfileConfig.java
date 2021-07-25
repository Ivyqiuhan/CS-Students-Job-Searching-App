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
            UserProfile userOne = new UserProfile(
                (long) 1,
                "user_one@example.com",
                "User One",
                "111-111-1111",
                "canada",
                null
            );

            UserProfile userTwo = new UserProfile(
                (long) 2,
                "user_two@example.com",
                "User Two",
                "111-111-1111",
                "canada",
                null
            );

            UserProfile userThree = new UserProfile(
                (long) 3,
                "user_three@example.com",
                "User Three",
                "111-111-1111",
                "canada",
                null
            );

            userAccountRepository.saveAll(List.of(userOne, userTwo, userThree));
        };
    }
}
