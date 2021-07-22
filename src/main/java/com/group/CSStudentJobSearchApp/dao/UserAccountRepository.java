package com.group.CSStudentJobSearchApp.dao;

import com.group.CSStudentJobSearchApp.model.UserAccount;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserAccountRepository extends JpaRepository <UserAccount, String> {
    
}
