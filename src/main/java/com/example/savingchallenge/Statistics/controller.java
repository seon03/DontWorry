package com.example.savingchallenge.Statistics;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class controller {

    @Autowired
    private service statisticsService;

    @GetMapping("/api/statistics")
    public Map<String, Object> getYearlyStatistics() {
        return statisticsService.getYearlyStatistics();
    }
}

