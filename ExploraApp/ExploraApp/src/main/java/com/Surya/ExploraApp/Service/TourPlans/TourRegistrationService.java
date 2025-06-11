package com.Surya.ExploraApp.Service.TourPlans;

import com.Surya.ExploraApp.Model.TourPlans.TourDetailsRegistration;
import com.Surya.ExploraApp.Repository.TourPlans.TourRegistrationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class TourRegistrationService {

    @Autowired
    TourRegistrationRepository tourRegistrationRepository;

    public ResponseEntity<String> savePLan(TourDetailsRegistration details){
        try{
            tourRegistrationRepository.save(details);
            return ResponseEntity.ok("successfully created a Tour");
        }catch (Exception e){
            return ResponseEntity.badRequest().body("Something went Wrong");
        }
    }
}
