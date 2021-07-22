package com.group.CSStudentJobSearchApp.config;

import java.util.List;

import com.group.CSStudentJobSearchApp.dao.UserAccountRepository;
import com.group.CSStudentJobSearchApp.model.UserAccount;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class UserAccountConfig {
    
    @Bean
    CommandLineRunner commandLineRunnerForUserAccounts(UserAccountRepository userAccountRepository) {
        return args -> {
            UserAccount userOne = new UserAccount(
                (long) 1,
                "user_one@example.com",
                "User One",
                "111-111-1111",
                "canada",
                null
            );

            UserAccount userTwo = new UserAccount(
                (long) 2,
                "user_two@example.com",
                "User Two",
                "111-111-1111",
                "canada",
                null
            );

            UserAccount userThree = new UserAccount(
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
