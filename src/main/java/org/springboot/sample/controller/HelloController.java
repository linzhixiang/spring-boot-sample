package org.springboot.sample.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.LoggerFactory;
import org.springboot.sample.SpringBootSampleApplication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/hello")
public class HelloController {
//	 @Autowired
//	    private StudentMapper stuMapper;
//
//	    @RequestMapping("/likeName")
//	    public List<Student> likeName(@RequestParam String name){
//	        return stuMapper.likeName(name);
//	    }
	
//	@Autowired
//	protected HelloService helloService;
//	
//    @RequestMapping("/info")
//    public List getInfo() {
//        String name="";
//        Integer age =23;
//        String sex="男";
//     List list =helloService.HelloList(name,age,sex);
//       return list;
//    }

    @RequestMapping("/list")
    public List<Map<String, String>> getList() {
        List<Map<String, String>> list = new ArrayList<>();
        Map<String, String> map = null;
        for (int i = 1; i <= 5; i++){
            map = new HashMap<>();
            map.put("name", "Shanhy-" + i);
            list.add(map);
        }
        return list;
    }
    
    
    @RequestMapping("/logger")
    public void getLogger(){
    	 // 在Java类中创建 logger 实例
        final org.slf4j.Logger logger = LoggerFactory.getLogger(SpringBootSampleApplication.class);
        // 在方法中使用日志输出，如
       
            logger.debug("日志输出测试 Debug");
            logger.trace("日志输出测试 Trace");
            logger.info("日志输出测试 Info");
            logger.warn("日志输出测试  warn");
       
    }
}