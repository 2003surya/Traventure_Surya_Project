package com.Surya.ExploraApp.Controller.TourPlans;


import com.Surya.ExploraApp.Model.TourPlans.TourDetailsRegistration;
import com.Surya.ExploraApp.Service.TourPlans.PlanRetrivalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/get")
@CrossOrigin(origins = "http://localhost:5173")
public class PlanRetrivalController {


    @Autowired
    PlanRetrivalService planRetrivalService;

    @GetMapping("/popularPacks")
    public ResponseEntity<List<TourDetailsRegistration>> getAllPopularPacks() {
        return planRetrivalService.getAllPopularPacks();
    }

    @GetMapping("/getPopularInTn")
    public ResponseEntity<List<TourDetailsRegistration>> getPopularInTn(){
        return planRetrivalService.getPopularInTn();
    }

    @GetMapping("/getPopularInIndia")
    public ResponseEntity<List<TourDetailsRegistration>> getPopularInIndia(){
        return planRetrivalService.getPopularInIndia();
    }

    @GetMapping("/getPopularInForeign")
    public ResponseEntity<List<TourDetailsRegistration>> getPopularInForeign(){
        return planRetrivalService.getPopularInForeign();
    }

    @GetMapping("/getPopularPremiumPackage")
    public ResponseEntity<List<TourDetailsRegistration>> getPopularPremiumPackage(){
        return planRetrivalService.getPopularPremiumPackage();
    }

    @GetMapping("/getParticularData")
    public ResponseEntity<Optional<TourDetailsRegistration>> getParticularData(@RequestParam Integer id){
        return planRetrivalService.getParticularData(id);
    }
}
