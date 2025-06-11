package com.Surya.ExploraApp.Repository.GeneralServices;

import com.Surya.ExploraApp.Model.GeneralServices.EnquiryDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EnquiryDetailsRepository extends JpaRepository<EnquiryDetails,Integer>{
}
