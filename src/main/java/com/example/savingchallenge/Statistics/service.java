package com.example.savingchallenge.Statistics;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class service {

    @Autowired
    private repository accountRepository;

    public Map<String, Object> getYearlyStatistics() {
        List<Object[]> results = accountRepository.findYearlyStatistics();
        Map<String, Object> stats = new HashMap<>();

        for (Object[] result : results) {
            int year = (int) result[0];
            double actualExpense = (double) result[1];
            double divAccount = (double) result[2];
            double expAccount = (double) result[3];

            stats.put(year + "_actual", actualExpense);
            stats.put(year + "_div", divAccount);
            stats.put(year + "_exp", expAccount);
        }

        return stats;
    }
}
