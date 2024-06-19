package com.example.savingchallenge.CategoryGoalTracker;


import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/category-goal")
public class CategoryGoalTrackerController {
    private final CategoryGoalTrackerService categoryGoalTrackerService;

    @Autowired
    public CategoryGoalTrackerController(CategoryGoalTrackerService categoryGoalTrackerService) {
        this.categoryGoalTrackerService = categoryGoalTrackerService;
    }

    @PostMapping
    public ResponseEntity<String> checkCategoryGoal(@RequestBody CategoryGoalTrackerDto categoryGoalCategoryGoalTrackerDto) {
        String result = categoryGoalTrackerService.checkCategoryGoal(categoryGoalCategoryGoalTrackerDto);
        return ResponseEntity.ok(result);
    }
}

