package org.springboot.sample.dao;

import javax.transaction.Transactional;

import org.springboot.sample.entity.Company;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface IScoreDao extends CrudRepository<Company, Integer> {

    @Transactional
    @Modifying
    @Query("update Company c set c.companyName = :companyName where c.companyId = :id ")
    int updateScoreById(@Param("companyName") String companyName, @Param("id") int id);

//    @Query("select c from COMPANY c where c.COMPANY_ID= :id ")
//    List CompanyDetailById(@Param("id") int id);
}