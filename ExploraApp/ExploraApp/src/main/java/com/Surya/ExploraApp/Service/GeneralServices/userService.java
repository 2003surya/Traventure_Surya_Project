package com.Surya.ExploraApp.Service.GeneralServices;

import com.Surya.ExploraApp.Model.GeneralServices.user;
import com.Surya.ExploraApp.Repository.GeneralServices.userRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class userService {

    @Autowired
    userRepository userRepo;

    public ResponseEntity<String> addUser(String mailId, String firstName, String secondName, String mobileNumber, String country) {
        try {
            if (userRepo.findByMailId(mailId) != null) {
                return ResponseEntity.status(HttpStatus.CONFLICT).body("User with this mail ID already exists");
            }

            user newUser = new user(mailId, firstName, secondName, mobileNumber, country);
            userRepo.save(newUser);
            return ResponseEntity.ok("User added successfully");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Something went wrong");
        }
    }
}
