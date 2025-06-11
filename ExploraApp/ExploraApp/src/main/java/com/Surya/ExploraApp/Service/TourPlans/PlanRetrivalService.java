package com.Surya.ExploraApp.Service.TourPlans;


import com.Surya.ExploraApp.Model.TourPlans.TourDetailsRegistration;
import com.Surya.ExploraApp.Repository.TourPlans.TourRegistrationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class PlanRetrivalService {


    @Autowired
    TourRegistrationRepository tourRegistrationRepository;


    public ResponseEntity<List<TourDetailsRegistration>> getAllPopularPacks(){
        try{
            return ResponseEntity.ok(tourRegistrationRepository.getPopularPacks());
        }catch (Exception e){
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(new ArrayList<>());
        }
    }


    public ResponseEntity<List<TourDetailsRegistration>> getPopularInTn(){
        try{
            return ResponseEntity.ok(tourRegistrationRepository.popularInTamilNadu());
        }catch (Exception e){
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(new ArrayList<>());
        }
    }

    public ResponseEntity<List<TourDetailsRegistration>> getPopularInIndia(){
        try{
            return ResponseEntity.ok(tourRegistrationRepository.popularInIndia());
        }catch (Exception e){
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(new ArrayList<>());
        }
    }

    public ResponseEntity<List<TourDetailsRegistration>> getPopularInForeign(){
        try{
            return ResponseEntity.ok(tourRegistrationRepository.popularInForeign());
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(new ArrayList<>());
        }
    }

    public ResponseEntity<List<TourDetailsRegistration>> getPopularPremiumPackage() {
        try{
            return ResponseEntity.ok(tourRegistrationRepository.popularPremium());
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(new ArrayList<>());
        }
    }

    public ResponseEntity<Optional<TourDetailsRegistration>> getParticularData(Integer id) {
        try{
            return ResponseEntity.ok(tourRegistrationRepository.findById(id));
        }catch (Exception e){
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(Optional.empty());
        }
    }
}
