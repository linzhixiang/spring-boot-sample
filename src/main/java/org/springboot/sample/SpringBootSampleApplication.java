package org.springboot.sample;

import org.springboot.sample.servlet.MyServlet;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.ServletComponentScan;
import org.springframework.boot.web.servlet.ServletRegistrationBean;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
@ServletComponentScan
public class SpringBootSampleApplication {

	/**
     * 使用代码注册Servlet（不需要@ServletComponentScan注解）
     * @return
     * @author lin	
     * @create 2017年4月1日
     */
    @Bean
    public ServletRegistrationBean servletRegistrationBean() {
        return new ServletRegistrationBean(new MyServlet(), "/xs/*");// ServletName默认值为首字母小写，即myServlet
    }
    
	public static void main(String[] args) {
		SpringApplication.run(SpringBootSampleApplication.class, args);
	}
	
	 /**
     * 修改DispatcherServlet默认配置
     *
     * @param dispatcherServlet
     * @return
     * @author lin	
     * @create 2017年4月1日
     */
//    @Bean
//    public ServletRegistrationBean dispatcherRegistration(DispatcherServlet dispatcherServlet) {
//        ServletRegistrationBean registration = new ServletRegistrationBean(dispatcherServlet);
//        registration.getUrlMappings().clear();
//        registration.addUrlMappings("*.do");
//        registration.addUrlMappings("*.json");
//        return registration;
//    }
}
