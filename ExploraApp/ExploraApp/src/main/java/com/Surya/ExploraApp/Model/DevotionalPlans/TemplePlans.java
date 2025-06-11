package com.Surya.ExploraApp.Model.DevotionalPlans;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;

@Entity
@Table(name = "Temple_details")
public class TemplePlans {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "temple_name")
    private String templeName;

    @Column(name = "location")
    private String location;

    @Column(name = "religion")
    private String religion;

    @Column(name = "about_temple" , columnDefinition = "TEXT")
    private String aboutTemple;

    @Column(name = "img_url1", columnDefinition = "TEXT")
    private String imgUrl1;

    @Column(name = "img_url2" , columnDefinition = "TEXT")
    private String imgUrl2;

    @Column(name = "img_url3", columnDefinition = "TEXT")
    private String imgUrl3;

    @Column(name = "img_url4", columnDefinition = "TEXT")
    private String imgUrl4;

    @Column(name = "is_in_india")
    @JsonProperty("isInIndia")
    private boolean isInIndia;

    @Column(name = "is_in_tamilnadu")
    @JsonProperty("isInTamilnadu")
    private boolean isInTamilnadu;

    @Column(name = "no_of_days")
    private int days;

    @Column(name = "no_of_nights")
    private int nights;


    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTempleName() {
        return templeName;
    }

    public void setTempleName(String templeName) {
        this.templeName = templeName;
    }

    public String getReligion() {
        return religion;
    }

    public void setReligion(String religion) {
        this.religion = religion;
    }

    public String getAboutTemple() {
        return aboutTemple;
    }

    public void setAboutTemple(String aboutTemple) {
        this.aboutTemple = aboutTemple;
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

    public boolean isInIndia() {
        return isInIndia;
    }

    public void setInIndia(boolean inIndia) {
        isInIndia = inIndia;
    }

    public boolean isInTamilnadu() {
        return isInTamilnadu;
    }

    public void setInTamilnadu(boolean inTamilnadu) {
        isInTamilnadu = inTamilnadu;
    }

    public int getDays() {
        return days;
    }

    public void setDays(int days) {
        this.days = days;
    }

    public int getNights() {
        return nights;
    }

    public void setNights(int nights) {
        this.nights = nights;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public TemplePlans(Integer id, String templeName, String location, String religion, String aboutTemple, String imgUrl1, String imgUrl2, String imgUrl3, String imgUrl4, boolean isInIndia, boolean isInTamilnadu, int days, int nights) {
        this.id = id;
        this.templeName = templeName;
        this.location = location;
        this.religion = religion;
        this.aboutTemple = aboutTemple;
        this.imgUrl1 = imgUrl1;
        this.imgUrl2 = imgUrl2;
        this.imgUrl3 = imgUrl3;
        this.imgUrl4 = imgUrl4;
        this.isInIndia = isInIndia;
        this.isInTamilnadu = isInTamilnadu;
        this.days = days;
        this.nights = nights;
    }

    public TemplePlans() {
    }

    @Override
    public String toString() {
        return "TemplePlans{" +
                "id=" + id +
                ", templeName='" + templeName + '\'' +
                ", location='" + location + '\'' +
                ", religion='" + religion + '\'' +
                ", aboutTemple='" + aboutTemple + '\'' +
                ", imgUrl1='" + imgUrl1 + '\'' +
                ", imgUrl2='" + imgUrl2 + '\'' +
                ", imgUrl3='" + imgUrl3 + '\'' +
                ", imgUrl4='" + imgUrl4 + '\'' +
                ", isInIndia=" + isInIndia +
                ", isInTamilnadu=" + isInTamilnadu +
                ", days=" + days +
                ", nights=" + nights +
                '}';
    }
}
