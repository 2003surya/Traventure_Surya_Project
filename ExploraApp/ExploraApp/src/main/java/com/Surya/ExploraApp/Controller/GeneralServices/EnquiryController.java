package com.Surya.ExploraApp.Controller.GeneralServices;

import com.Surya.ExploraApp.Model.GeneralServices.EnquiryDetails;
import com.Surya.ExploraApp.Service.GeneralServices.EnquiryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/Enquiry")
@CrossOrigin(origins = "http://localhost:5173")
public class EnquiryController {

    @Autowired
    EnquiryService enquiryService;

    @PostMapping("/submitEnquiry")
    public ResponseEntity<String> submitEnquiry(@RequestBody EnquiryDetails enquiryDetails){
        return enquiryService.submitEnquiry(enquiryDetails);
    }
}
