package com.Surya.ExploraApp.Service.DevotionalPlans;

import com.Surya.ExploraApp.Model.DevotionalPlans.TemplePlans;
import com.Surya.ExploraApp.Repository.DevotionalPlans.TempleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class DevotionalPlanRetrivalService {

    @Autowired
    TempleRepository templeRepository;

    public ResponseEntity<List<TemplePlans>> getAllTemplePlans(){
        try{
            return ResponseEntity.ok(templeRepository.findAll());
        }catch (Exception e){
            e.printStackTrace();
            return ResponseEntity.internalServerError().body(new ArrayList<>());
        }
    }

}
