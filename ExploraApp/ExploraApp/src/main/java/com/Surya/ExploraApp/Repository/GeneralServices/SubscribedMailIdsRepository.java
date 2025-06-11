package com.Surya.ExploraApp.Repository.GeneralServices;

import com.Surya.ExploraApp.Model.GeneralServices.SubscribedMailIds;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface SubscribedMailIdsRepository extends JpaRepository<SubscribedMailIds,Integer> {
    @Query(value = "SELECT EXISTS (SELECT 1 FROM subscribed_mails WHERE mail_id = :mailId)", nativeQuery = true)
    boolean isSubscribed(@Param("mailId") String mailId);


}
