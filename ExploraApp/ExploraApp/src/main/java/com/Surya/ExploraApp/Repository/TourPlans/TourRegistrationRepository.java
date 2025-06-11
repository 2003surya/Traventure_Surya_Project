package com.Surya.ExploraApp.Repository.TourPlans;


import com.Surya.ExploraApp.Model.TourPlans.TourDetailsRegistration;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TourRegistrationRepository extends JpaRepository<TourDetailsRegistration,Integer> {
    
    @Query("SELECT t FROM TourDetailsRegistration t WHERE t.isPopular = true")
    List<TourDetailsRegistration> getPopularPacks();

    @Query("SELECT t FROM TourDetailsRegistration t WHERE t.isInTn = true AND t.isPopular = true")
    List<TourDetailsRegistration> popularInTamilNadu();

    @Query("SELECT t FROM TourDetailsRegistration t WHERE t.isPopular = true AND t.isInIndia = true")
    List<TourDetailsRegistration> popularInIndia();

    @Query("SELECT t FROM TourDetailsRegistration t WHERE t.isPopular = true AND t.isInIndia = false")
    List<TourDetailsRegistration> popularInForeign();

    @Query("SELECT t FROM TourDetailsRegistration t WHERE t.isPopular = true AND t.isPremium = true")
    List<TourDetailsRegistration> popularPremium();
}
