package org.springboot.sample.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springboot.sample.dao.IScoreDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController
@RequestMapping("/score")
public class ScoreController{
    private static final Logger logger = LoggerFactory.getLogger(ScoreController.class);

    @Autowired
    private IScoreDao scoreService;
	@RequestMapping("/scoreList")
    public List getScoreList(){
        logger.info("从数据库读取Score集合");
        logger.info("更新的行数：" + scoreService.updateScoreById("联航路1518",101350));
       
        return null;
    	
    }
}