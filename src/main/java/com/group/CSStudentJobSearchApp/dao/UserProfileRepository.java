package com.group.CSStudentJobSearchApp.dao;

import com.group.CSStudentJobSearchApp.model.UserProfile;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserProfileRepository extends JpaRepository <UserProfile, String> {
    
}
