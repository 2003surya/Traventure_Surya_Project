package com.Surya.ExploraApp.Controller.GeneralServices;

import com.Surya.ExploraApp.Service.GeneralServices.SubscriptionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class SubscriptionController {


    @Autowired
    SubscriptionService subscriptionService;

    @PostMapping("/Addsubscription")
    public ResponseEntity<String> getSubscription(@RequestParam String emailId){
        return subscriptionService.getSubscription(emailId);
    }


}
