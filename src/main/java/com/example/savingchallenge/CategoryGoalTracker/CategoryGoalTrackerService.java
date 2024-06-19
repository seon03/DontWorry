package com.example.savingchallenge.CategoryGoalTracker;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CategoryGoalTrackerService {
    private final CategoryGoalTrackerRepository accountCategoryGoalTrackerRepository;

    @Autowired
    public CategoryGoalTrackerService(CategoryGoalTrackerRepository accountCategoryGoalTrackerRepository) {
        this.accountCategoryGoalTrackerRepository = accountCategoryGoalTrackerRepository;
    }

    public String checkCategoryGoal(CategoryGoalTrackerDto categoryGoalCategoryGoalTrackerDto) {
        long usageCount = accountCategoryGoalTrackerRepository.countByCategoryId(categoryGoalCategoryGoalTrackerDto.getCategory());
        return usageCount <= categoryGoalCategoryGoalTrackerDto.getTimes() ? "Success" : "Failure";
    }
}

