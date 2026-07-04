package com.cognizant.spring_learn.service;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Service;

import com.cognizant.spring_learn.model.Country;

@Service
public class CountryService {

    public Country getCountry() {

        ApplicationContext context =
                new ClassPathXmlApplicationContext("country.xml");

        Country country = (Country) context.getBean("india");

        return country;
    }

    public Country getCountry(String code) {

        ApplicationContext context =
                new ClassPathXmlApplicationContext("country.xml");

        if (code.equalsIgnoreCase("IN")) {
            return (Country) context.getBean("india");
        }
        else if (code.equalsIgnoreCase("US")) {
            return (Country) context.getBean("usa");
        }

        return null;
    }
}