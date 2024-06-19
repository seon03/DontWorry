package com.example.savingchallenge.CategoryGoalTracker;


public class CategoryGoalTrackerDto {
    private String category;
    private int times;

    public CategoryGoalTrackerDto() {
    }

    public CategoryGoalTrackerDto(String category, int times) {
        this.category = category;
        this.times = times;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public int getTimes() {
        return times;
    }

    public void setTimes(int times) {
        this.times = times;
    }
}

