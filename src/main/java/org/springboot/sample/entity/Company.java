package org.springboot.sample.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * @author lin
 *
 */

@Entity
@Table(name ="company")
public class Company {
    @Id
    @GeneratedValue
    @Column(name = "COMPANY_ID")
	private Integer companyId;//公司id
    
    @Column(nullable = false, name="COMPANY_NAME")
	private String companyName;//公司名称
    
    @Column(nullable = false, name="COMPANY_ADDRESS")
	private String companyAddress;//公司地址
	
	public String getCompanyName() {
		return companyName;
	}
	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}
	public String getCompanyAddress() {
		return companyAddress;
	}
	public void setCompanyAddress(String companyAddress) {
		this.companyAddress = companyAddress;
	}
	public Integer getCompanyId() {
		return companyId;
	}
	public void setCompanyId(Integer companyId) {
		this.companyId = companyId;
	}

}