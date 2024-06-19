package com.example.savingchallenge.MoneyCollector;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface repository extends JpaRepository<domain, Long> {
}
