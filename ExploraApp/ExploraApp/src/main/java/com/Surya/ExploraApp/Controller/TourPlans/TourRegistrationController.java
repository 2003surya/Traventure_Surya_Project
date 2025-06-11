package com.Surya.ExploraApp.Controller.TourPlans;


import com.Surya.ExploraApp.Model.TourPlans.TourDetailsRegistration;
import com.Surya.ExploraApp.Service.TourPlans.TourRegistrationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/TourService")
@CrossOrigin(origins = "http://localhost:5173")
public class TourRegistrationController {

    @Autowired
    TourRegistrationService tourRegistrationService;

    @PostMapping("/savePLan")
    public ResponseEntity<String> savePLan(@RequestBody TourDetailsRegistration details){
        return  tourRegistrationService.savePLan(details);
    }
}
