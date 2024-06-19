package com.example.savingchallenge.DailySpending;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class service {
    private final repository spendingRepository;

    @Autowired
    public service(repository spendingRepository) {
        this.spendingRepository = spendingRepository;
    }

    public String checkDailySpending(dto dailySpendingDTO) {
        List<domain> accounts = spendingRepository.findByDate(dailySpendingDTO.getDate());
        double totalSpent = accounts.stream().mapToDouble(domain::getAmount).sum();
        return totalSpent <= dailySpendingDTO.getTargetAmount() ? "Success" : "Failure";
    }
}
