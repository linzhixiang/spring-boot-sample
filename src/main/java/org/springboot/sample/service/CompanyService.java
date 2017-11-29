package org.springboot.sample.service;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import org.springboot.sample.entity.Company;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Service;

/**
 * @author lin
 *
 */
@Service
public class CompanyService {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    public List<Company> getList(){
        String sql = "SELECT * FROM COMPANY WHERE COMPANY_ID =2010";
        return (List<Company>) jdbcTemplate.query(sql, new RowMapper<Company>(){

            @Override
            public Company mapRow(ResultSet rs, int rowNum) throws SQLException {
            	Company com = new Company();
            	com.setCompanyId(rs.getInt("COMPANY_ID"));
            	com.setCompanyName(rs.getString("COMPANY_NAME"));
            	com.setCompanyAddress(rs.getString("COMPANY_ADDRESS"));
                return com;
            }

        });
    }
}