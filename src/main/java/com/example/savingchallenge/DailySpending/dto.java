package com.example.savingchallenge.DailySpending;


import java.time.LocalDate;

public class dto {
    private LocalDate date;
    private double targetAmount;

    public dto() {
    }

    public dto(LocalDate date, double targetAmount) {
        this.date = date;
        this.targetAmount = targetAmount;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public double getTargetAmount() {
        return targetAmount;
    }

    public void setTargetAmount(double targetAmount) {
        this.targetAmount = targetAmount;
    }
}

