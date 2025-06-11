package com.Surya.ExploraApp.Controller.DashBoard;

import com.Surya.ExploraApp.Model.DevotionalPlans.TemplePlans;
import com.Surya.ExploraApp.Model.TourPlans.TourDetailsRegistration;
import com.Surya.ExploraApp.Repository.DevotionalPlans.TempleRepository;
import com.Surya.ExploraApp.Repository.TourPlans.TourRegistrationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:5173/")
@RequestMapping("/dashboard")
public class DashBoardController {

    @Autowired
    TourRegistrationRepository tourRegistrationRepository;

    @GetMapping("/getAllTourReport")
    public ResponseEntity<?> getAllTourPlan(){
        try{
            return ResponseEntity.ok(tourRegistrationRepository.findAll());
        }catch (Exception e){
            e.printStackTrace();
            return ResponseEntity.badRequest().body("some thing went wrong");
        }
    }

    @GetMapping("/getTourById")
    public ResponseEntity<?> getById(@RequestParam Integer id){
        try{
            return ResponseEntity.ok(tourRegistrationRepository.findById(id));
        }catch (Exception e){
            e.printStackTrace();
            return ResponseEntity.badRequest().body("some thing went wrong");
        }
    }

    @PutMapping("/updateTour")
    public ResponseEntity<?> updateTour(@RequestBody TourDetailsRegistration tourDetailsRegistration) {
        try {
            // Check if the tour exists
            Optional<TourDetailsRegistration> existingTour = tourRegistrationRepository.findById(tourDetailsRegistration.getId());

            if (existingTour.isEmpty()) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND)
                        .body("Tour with ID " + tourDetailsRegistration.getId() + " not found");
            }

            // Save the updated tour
            TourDetailsRegistration updatedTour = tourRegistrationRepository.save(tourDetailsRegistration);
            return ResponseEntity.ok(updatedTour);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("An error occurred while updating the tour: " + e.getMessage());
        }
    }

    @DeleteMapping("/delete")
    public void delete(@RequestParam Integer id){
        try {
            tourRegistrationRepository.deleteById(id);
        }catch (Exception e){
            e.printStackTrace();

        }
    }


    @Autowired
    TempleRepository templeRepository;

    @GetMapping("/getAllDevotionalTrips")
    public ResponseEntity<?> getAllDevotionalPlans(){
        try{
            return ResponseEntity.ok(templeRepository.findAll());
        }catch (Exception e){
            e.printStackTrace();
            return ResponseEntity.badRequest().body("Something went wrong");
        }
    }

    @GetMapping("/getDevotionalTripById")
    public ResponseEntity<?> getDevotionalTripById(@RequestParam Integer id){
        try{
            return ResponseEntity.ok(templeRepository.findById(id));
        }catch (Exception e){
            e.printStackTrace();
            return ResponseEntity.badRequest().body("something went wrong");
        }
    }

    @PutMapping("/updateDevotionalTrip")
    public ResponseEntity<?> updateDevotionalTrip(@RequestBody TemplePlans templePlans) {
        try {
            // Check if the tour exists
            Optional<TemplePlans> existingTour = templeRepository.findById(templePlans.getId());

            if (existingTour.isEmpty()) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND)
                        .body("Tour with ID " + templePlans.getId() + " not found");
            }

            // Save the updated tour
            TemplePlans updatedTrip = templeRepository.save(templePlans);
            return ResponseEntity.ok(updatedTrip);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("An error occurred while updating the tour: " + e.getMessage());
        }
    }

    @DeleteMapping("/deleteDevotionalTrip")
    public void deleteDevotionalTrip(@RequestParam int id){
        try{
            templeRepository.deleteById(id);
        }catch (Exception e){
            e.printStackTrace();
        }
    }



}
