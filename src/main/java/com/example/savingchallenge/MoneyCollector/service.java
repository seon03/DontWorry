package com.example.savingchallenge.MoneyCollector;

// src/main/java/com/example/moneycollector/services/ChallengeService.java


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class service {
    private final repository challengeRepository;

    @Autowired
    public service(repository challengeRepository) {
        this.challengeRepository = challengeRepository;
    }

    public domain createChallenge(dto challengeDTO) {
        domain challenge = new domain(challengeDTO.getPeriod(), challengeDTO.getTotalMoney());
        return challengeRepository.save(challenge);
    }
}

