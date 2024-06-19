package com.example.savingchallenge.DailySpending;



import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "ACCOUNT")
public class domain {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "category_id")
    private String categoryId;

    @Column(name = "amount")
    private double amount;

    @Column(name = "date")
    private LocalDate date;

    public double getAmount() {
        return 0;
    }

    // Getters and setters
    // ...
}

