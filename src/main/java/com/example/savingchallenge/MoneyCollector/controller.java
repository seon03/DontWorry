package com.example.savingchallenge.MoneyCollector;

// src/main/java/com/example/savingchallenge/moneycollector/controllers/ChallengeController.java


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/challenge")
public class controller {
    private service challengeService;

    @Autowired
    public void MoneyCollectorController(service challengeService) {
        this.challengeService = challengeService;
    }

    public controller(service challengeService) {
        this.challengeService = challengeService;
    }

    @PostMapping
    public ResponseEntity<domain> createChallenge(@RequestBody dto challengeDTO) {
        domain challenge = challengeService.createChallenge(challengeDTO);
        return new ResponseEntity<>(challenge, HttpStatus.CREATED);
    }
}

