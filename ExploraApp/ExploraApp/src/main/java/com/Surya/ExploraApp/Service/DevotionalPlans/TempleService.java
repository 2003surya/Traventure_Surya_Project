package com.Surya.ExploraApp.Service.DevotionalPlans;

import com.Surya.ExploraApp.Model.DevotionalPlans.TemplePlans;
import com.Surya.ExploraApp.Repository.DevotionalPlans.TempleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class TempleService {

    @Autowired
    TempleRepository templeRepository;

    public ResponseEntity<String> storeTemplePlan(TemplePlans templePlans){
        try{
            templeRepository.save(templePlans);
            return ResponseEntity.ok("Temple plan inserted successfully");
        }catch (Exception e){
            e.printStackTrace();
            return ResponseEntity.badRequest().body("something went wrong");
        }
    }
}
