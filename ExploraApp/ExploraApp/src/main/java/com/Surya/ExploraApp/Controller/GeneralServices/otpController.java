package com.Surya.ExploraApp.Controller.GeneralServices;

import com.Surya.ExploraApp.Repository.GeneralServices.userRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.*;
import java.util.HashMap;
import java.util.Map;
import java.util.Random;

@RestController
@RequestMapping("/api/otp")
@CrossOrigin(origins = "http://localhost:5173/")
public class otpController{

    @Autowired
    private JavaMailSender mailSender;

    private Map<String, String> otpStorage = new HashMap<>();


    @Autowired
    userRepository userRepo;

    @PostMapping("/send")
    public String sendOtp(@RequestParam String email) {

        if(userRepo.findByMailId(email)!=null) return "user already exist";


        // Generate random 6-digit OTP
        String otp = String.valueOf(new Random().nextInt(900000) + 100000);

        // Store OTP in memory
        otpStorage.put(email, otp);

        // Send email
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(email);
        message.setSubject("Your OTP Code for Signup");
        message.setText("Your OTP for the Signup is: " + otp);
        mailSender.send(message);

        return "OTP has been sent successfully to your email!";
    }

    @PostMapping("/verify")
    public String verifyOtp(@RequestParam String email, @RequestParam String otp) {
        String storedOtp = otpStorage.get(email);
        if (storedOtp != null && storedOtp.equals(otp)) {
            otpStorage.remove(email); // Optional: Clear OTP after verification
            return "OTP Verified";
        } else {
            return "Invalid OTP";
        }
    }


}
