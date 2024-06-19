package com.example.savingchallenge.Statistics;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface repository extends JpaRepository<model, Long> {

    @Query("SELECT YEAR(a.date) as year, SUM(a.actualExpense) as actualExpense, SUM(a.divAccount) as divAccount, SUM(a.expAccount) as expAccount " +
            "FROM Account a GROUP BY YEAR(a.date) ORDER BY YEAR(a.date)")
    List<Object[]> findYearlyStatistics();
}
