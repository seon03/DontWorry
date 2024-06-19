package com.example.savingchallenge.DailySpending;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/daily-spending")
public class controller {
    private final service dailySpendingService;

    @Autowired
    public controller(service dailySpendingService) {
        this.dailySpendingService = dailySpendingService;
    }

    @PostMapping
    public ResponseEntity<String> checkDailySpending(@RequestBody dto dailySpendingDTO) {
        String result = dailySpendingService.checkDailySpending(dailySpendingDTO);
        return ResponseEntity.ok(result);
    }
}

