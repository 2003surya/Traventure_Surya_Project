package com.Surya.ExploraApp.Model.GeneralServices;


import jakarta.persistence.*;

@Entity
@Table(name = "user_details")
public class user {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "Mail_Id")
    private String mailId;

    @Column(name = "First_Name")
    private  String firstName;

    @Column(name = "Second_Name")
    private  String secondName;

    @Column(name = "Mobile_Number")
    private  String mobileNumber;

    @Column(name = "Country")
    private  String country;

    public user(String mailId, String firstName, String secondName, String mobileNumber, String country) {
        this.mailId = mailId;
        this.firstName = firstName;
        this.secondName = secondName;
        this.mobileNumber = mobileNumber;
        this.country = country;
    }

    public user() {
    }
}
