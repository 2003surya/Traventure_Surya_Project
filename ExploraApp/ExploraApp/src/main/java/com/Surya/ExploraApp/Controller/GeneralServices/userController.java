package com.Surya.ExploraApp.Controller.GeneralServices;

import com.Surya.ExploraApp.Service.GeneralServices.userService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/user")
@CrossOrigin(origins = "http://localhost:5173/")
public class userController {
    @Autowired
    private userService userServices;

    @PostMapping("/addUser")
    public ResponseEntity<String> addUser(@RequestParam String mailId,
                                         @RequestParam String firstName,
                                         @RequestParam(required = false) String secondName,
                                         @RequestParam String mobileNumber,
                                         @RequestParam String country){
        return  userServices.addUser(mailId,firstName,secondName,mobileNumber,country);
    }
}
