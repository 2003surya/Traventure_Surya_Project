package com.Surya.ExploraApp.Repository.DevotionalPlans;

import com.Surya.ExploraApp.Model.DevotionalPlans.TemplePlans;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import java.util.*;

@Repository
public interface TempleRepository extends JpaRepository<TemplePlans,Integer> {
    @Query("SELECT t FROM TemplePlans t WHERE t.religion = 'Hinduism'")
    List<TemplePlans> getHinduTemple();

    @Query("SELECT t FROM TemplePlans t WHERE t.religion = :religion")
    List<TemplePlans> getTempleByReligion(@Param("religion") String religion);
}
