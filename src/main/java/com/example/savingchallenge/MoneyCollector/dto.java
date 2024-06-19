package com.example.savingchallenge.MoneyCollector;

// src/main/java/com/example/moneycollector/dtos/ChallengeDTO.java


public class dto {
    private int period;
    private double totalMoney;

    public dto() {
    }

    public dto(int period, double totalMoney) {
        this.period = period;
        this.totalMoney = totalMoney;
    }

    public int getPeriod() {
        return period;
    }

    public void setPeriod(int period) {
        this.period = period;
    }

    public double getTotalMoney() {
        return totalMoney;
    }

    public void setTotalMoney(double totalMoney) {
        this.totalMoney = totalMoney;
    }
}

