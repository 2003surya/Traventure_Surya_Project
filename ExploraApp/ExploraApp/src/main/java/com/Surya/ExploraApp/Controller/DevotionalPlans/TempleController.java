package com.Surya.ExploraApp.Controller.DevotionalPlans;


import com.Surya.ExploraApp.Model.DevotionalPlans.TemplePlans;
import com.Surya.ExploraApp.Service.DevotionalPlans.TempleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:5173/")
@RequestMapping("/temple")
public class TempleController {

    @Autowired
    TempleService templeService;

    @PostMapping("/addTemplePlan")
    public ResponseEntity<String> storeTemplePlan(@RequestBody TemplePlans templePlans){
        return templeService.storeTemplePlan(templePlans);
    }
}
