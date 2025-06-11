package com.Surya.ExploraApp.Service.GeneralServices;

import com.Surya.ExploraApp.Model.GeneralServices.SubscribedMailIds;
import com.Surya.ExploraApp.Repository.GeneralServices.SubscribedMailIdsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.stereotype.Service;
import org.springframework.mail.javamail.JavaMailSender;


@Service
public class SubscriptionService {
    @Autowired
    JavaMailSender mailSender;
    @Autowired
    SubscribedMailIdsRepository subscribedMailIdsRepository;

    public ResponseEntity<String> getSubscription(String emailId) {
        try {
            if(subscribedMailIdsRepository.isSubscribed(emailId)) return ResponseEntity.ok("Already a user");
            SubscribedMailIds subscribedMailId = new SubscribedMailIds(emailId);
            subscribedMailIdsRepository.save(subscribedMailId);
            sendConfirmationMessageOnSubscription(emailId);
            return ResponseEntity.ok("subscription added successfully");
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("something went wrong");
        }
    }

    public void sendConfirmationMessageOnSubscription(String email){
        try{
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(email);
        message.setSubject("😎Welcome to Traventure - your Dream Journey Begins Here💝");
        message.setText("Dear "+email+" 😍\n" +
                        "We Feel Glad to have you as a member of Traventure 💕\n"+
                        "Please Feel Free to Make your Next Move\n");

            mailSender.send(message);
        }catch (Exception e){
            System.out.println(e.getMessage());
        }
    }
}
