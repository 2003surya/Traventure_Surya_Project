package com.Surya.ExploraApp.Controller.DevotionalPlans;

import com.Surya.ExploraApp.Model.DevotionalPlans.TemplePlans;
import com.Surya.ExploraApp.Repository.DevotionalPlans.TempleRepository;
import com.Surya.ExploraApp.Service.DevotionalPlans.DevotionalPlanRetrivalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173/")
@RequestMapping("/get")
public class DevotionalPlanRetrivalController {

    @Autowired
    DevotionalPlanRetrivalService devotionalPlanRetrivalService;

    @Autowired
    TempleRepository templeRepository;

    @GetMapping("/getAllDevotionalPlans")
    public ResponseEntity<List<TemplePlans>> getAllDevotionalPlans(){
        return devotionalPlanRetrivalService.getAllTemplePlans();
    }

    @GetMapping("/getHinduismPlans")
    public ResponseEntity<List<TemplePlans>> getAllHinduismPlans(){
        try{
            return ResponseEntity.ok(templeRepository.getHinduTemple());
        }catch (Exception e){
            e.printStackTrace();
            return ResponseEntity.internalServerError().body(new ArrayList<>());
        }
    }

    @GetMapping("/getSpecificPlan")
    public ResponseEntity<List<TemplePlans>> getTemplePlansByReligion(@RequestParam String religion){
        try{
            return ResponseEntity.ok(templeRepository.getTempleByReligion(religion));
        }catch (Exception e){
            e.printStackTrace();
            return ResponseEntity.internalServerError().body(new ArrayList<>());
        }
    }
}
