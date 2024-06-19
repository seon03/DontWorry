package com.example.savingchallenge.MoneyCollector;

// src/main/java/com/example/moneycollector/domains/Challenge.java


import jakarta.persistence.*;

@Entity
@Table(name = "CHALLENGE")
public class domain {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private int period;
    private double totalMoney;
    private double monthlySavings;

    public domain() {
    }

    public domain(int period, double totalMoney) {
        this.period = period;
        this.totalMoney = totalMoney;
        this.monthlySavings = calculateMonthlySavings();
    }

    public double calculateMonthlySavings() {
        return totalMoney / period;
    }

    // Getters and setters
    // ...
}

