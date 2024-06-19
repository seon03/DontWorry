package com.example.savingchallenge.DailySpending;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface repository extends JpaRepository<domain, Long> {
    List<domain> findByDate(LocalDate date);
}

