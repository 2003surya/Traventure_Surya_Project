package com.Surya.ExploraApp.Repository.GeneralServices;

import com.Surya.ExploraApp.Model.GeneralServices.user;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface userRepository extends JpaRepository<user,Integer> {
    user findByMailId(String mailId);
}
