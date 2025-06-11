package com.Surya.ExploraApp.Service.GeneralServices;

import com.Surya.ExploraApp.Controller.GeneralServices.SubscriptionController;
import com.Surya.ExploraApp.Model.GeneralServices.EnquiryDetails;
import com.Surya.ExploraApp.Repository.GeneralServices.EnquiryDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class EnquiryService {

    @Autowired
    EnquiryDetailsRepository enquiryDetailsRepository;

    @Autowired
    SubscriptionController subscriptionController;

    public ResponseEntity<String> submitEnquiry(EnquiryDetails enquiryDetails) {
        try{

            if(enquiryDetails.getJourneyDate() == null){
                enquiryDetails.setJourneyDate(null);
            }

            enquiryDetailsRepository.save(enquiryDetails);
            subscriptionController.getSubscription(enquiryDetails.getEmailId());
            return ResponseEntity.ok("Enquiry Added SuccessFully");
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Something Went Wrong");
        }
    }
}
