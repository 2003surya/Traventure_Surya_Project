package com.Surya.ExploraApp.Model.GeneralServices;


import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name =  "EnquiryDetails" )
public class EnquiryDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "Name")
    private String name;

    @Column(name = "Email_Id")
    private String emailId;

    @Column(name = "WhatsApp_Number")
    private String whatsAppNumber;

    @Column(name = "Dream_Journey")
    private String DreamJourney;

    @Temporal(TemporalType.DATE)
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    @Column(name = "Journey_Date")
    private Date journeyDate;

    @Column(name = "Number_of_Persons")
    private int noOfPersons;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmailId() {
        return emailId;
    }

    public void setEmailId(String emailId) {
        this.emailId = emailId;
    }

    public String getWhatsAppNumber() {
        return whatsAppNumber;
    }

    public void setWhatsAppNumber(String whatsAppNumber) {
        this.whatsAppNumber = whatsAppNumber;
    }

    public String getDreamJourney() {
        return DreamJourney;
    }

    public void setDreamJourney(String dreamJourney) {
        DreamJourney = dreamJourney;
    }

    public Date getJourneyDate() {
        return journeyDate;
    }

    public void setJourneyDate(Date journeyDate) {
        this.journeyDate = journeyDate;
    }

    public int getNoOfPersons() {
        return noOfPersons;
    }

    public void setNoOfPersons(int noOfPersons) {
        this.noOfPersons = noOfPersons;
    }
}
