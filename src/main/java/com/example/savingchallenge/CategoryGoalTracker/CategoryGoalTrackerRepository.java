package com.example.savingchallenge.CategoryGoalTracker;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoryGoalTrackerRepository extends JpaRepository<CategoryGoalTrackerDomain, Long> {
    long countByCategoryId(String categoryId);
}

