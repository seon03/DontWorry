package com.example.savingchallenge.Statistics;


import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
@Table(name = "ACCOUNT")
public class model {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private LocalDate date;

    private Double actualExpense;
    private Double divAccount;
    private Double expAccount;

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public Double getActualExpense() {
        return actualExpense;
    }

    public void setActualExpense(Double actualExpense) {
        this.actualExpense = actualExpense;
    }

    public Double getDivAccount() {
        return divAccount;
    }

    public void setDivAccount(Double divAccount) {
        this.divAccount = divAccount;
    }

    public Double getExpAccount() {
        return expAccount;
    }

    public void setExpAccount(Double expAccount) {
        this.expAccount = expAccount;
    }
}

