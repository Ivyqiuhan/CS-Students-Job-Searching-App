package com.group.CSStudentJobSearchApp.model;

public class Location {
    private final String city;
    private final String state;
    private final String country;

    public Location(String city, String state, String country) {
        this.city = city;
        this.state = state;
        this.country = country;
    }

    public String getCity() {
        return city;
    }

    public String getState() {
        return state;
    }

    public String getCountry() {
        return country;
    }
}
