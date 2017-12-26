package org.springboot.sample.runner;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springboot.sample.SpringBootSampleApplication;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

/**
 * 服务启动执行
 *
 * @author   单红宇(365384722)
 * @myblog  http://blog.csdn.net/catoop/
 * @create    2016年1月9日
 */
@Component
@Order(value=2)
public class MyStartupRunner1 implements CommandLineRunner {

    @Override
   
    public void run(String... args) throws Exception {
        System.out.println(">>>>>>>>>>>>>>>服务启动执行，执行加载数据等操作1111111111111<<<<<<<<<<<<<");
     // 在Java类中创建 logger 实例
        final Logger logger = LoggerFactory.getLogger(SpringBootSampleApplication.class);
        // 在方法中使用日志输出，如
        
        logger.debug("日志输出测试 Debug");
        logger.trace("日志输出测试 Trace");
        logger.info("日志输出测试 Info");
    }
}