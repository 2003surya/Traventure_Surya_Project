package com.Surya.ExploraApp.Model.TourPlans;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;

@Entity
@Table(name = "TourDetailsRegistration")
public class TourDetailsRegistration {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "place_name")
    private String placeName;

    @Column(name = "num_of_days")
    private int numOfDays;

    @Column(name = "num_of_nights")
    private int numOfNights;


    @Column(name = "about_location",columnDefinition = "TEXT")
    private String aboutLocation;

    @Column(name = "img_url1")
    private String imgUrl1;

    @Column(name = "img_url2")
    private String imgUrl2;

    @Column(name = "img_url3")
    private String imgUrl3;

    @Column(name = "img_url4")
    private String imgUrl4;

    @Column(name = "img_url5")
    private String imgUrl5;

    @Column(name = "img_url6")
    private String imgUrl6;

    @Column(name = "is_premium")
    @JsonProperty("isPremium")
    private boolean isPremium;

    @Column(name = "is_in_india")
    @JsonProperty("isInIndia")
    private boolean isInIndia;

    @Column(name = "is_popular")
    @JsonProperty("isPopular")
    private boolean isPopular;

    @Column(name = "is_in_tn")
    @JsonProperty("isInTn")
    private boolean isInTn;


    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getPlaceName() {
        return placeName;
    }

    public void setPlaceName(String placeName) {
        this.placeName = placeName;
    }

    public int getNumOfDays() {
        return numOfDays;
    }

    public void setNumOfDays(int numOfDays) {
        this.numOfDays = numOfDays;
    }

    public int getNumOfNights() {
        return numOfNights;
    }

    public void setNumOfNights(int numOfNights) {
        this.numOfNights = numOfNights;
    }

    public String getAboutLocation() {
        return aboutLocation;
    }

    public void setAboutLocation(String aboutLocation) {
        this.aboutLocation = aboutLocation;
    }

    public String getImgUrl1() {
        return imgUrl1;
    }

    public void setImgUrl1(String imgUrl1) {
        this.imgUrl1 = imgUrl1;
    }

    public String getImgUrl2() {
        return imgUrl2;
    }

    public void setImgUrl2(String imgUrl2) {
        this.imgUrl2 = imgUrl2;
    }

    public String getImgUrl3() {
        return imgUrl3;
    }

    public void setImgUrl3(String imgUrl3) {
        this.imgUrl3 = imgUrl3;
    }

    public String getImgUrl4() {
        return imgUrl4;
    }

    public void setImgUrl4(String imgUrl4) {
        this.imgUrl4 = imgUrl4;
    }

    public String getImgUrl5() {
        return imgUrl5;
    }

    public void setImgUrl5(String imgUrl5) {
        this.imgUrl5 = imgUrl5;
    }

    public String getImgUrl6() {
        return imgUrl6;
    }

    public void setImgUrl6(String imgUrl6) {
        this.imgUrl6 = imgUrl6;
    }

    public boolean isPremium() {
        return isPremium;
    }

    public void setPremium(boolean premium) {
        isPremium = premium;
    }

    public boolean isInIndia() {
        return isInIndia;
    }

    public void setInIndia(boolean inIndia) {
        isInIndia = inIndia;
    }

    public boolean isPopular() {
        return isPopular;
    }

    public void setPopular(boolean popular) {
        isPopular = popular;
    }

    public boolean isInTn() {
        return isInTn;
    }

    public void setInTn(boolean inTn) {
        isInTn = inTn;
    }

    public TourDetailsRegistration(Integer id, String placeName, int numOfDays, int numOfNights, String aboutLocation, String imgUrl1, String imgUrl2, String imgUrl3, String imgUrl4, String imgUrl5, String imgUrl6, boolean isPremium, boolean isInIndia, boolean isPopular, boolean isInTn) {
        this.id = id;
        this.placeName = placeName;
        this.numOfDays = numOfDays;
        this.numOfNights = numOfNights;
        this.aboutLocation = aboutLocation;
        this.imgUrl1 = imgUrl1;
        this.imgUrl2 = imgUrl2;
        this.imgUrl3 = imgUrl3;
        this.imgUrl4 = imgUrl4;
        this.imgUrl5 = imgUrl5;
        this.imgUrl6 = imgUrl6;
        this.isPremium = isPremium;
        this.isInIndia = isInIndia;
        this.isPopular = isPopular;
        this.isInTn = isInTn;
    }

    public TourDetailsRegistration() {
    }
}
