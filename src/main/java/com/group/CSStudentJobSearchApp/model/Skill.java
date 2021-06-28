package com.group.CSStudentJobSearchApp.model;

import java.util.UUID;

public class Skill {
    private final UUID skillID;
    private final String name;
    private final String description;

    public Skill(UUID skillID, String name, String description) {
        this.skillID = skillID;
        this.name = name;
        this.description = description;
    }

    public UUID getSkillID() {
        return skillID;
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }
}
