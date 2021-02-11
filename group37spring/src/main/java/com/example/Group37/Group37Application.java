package com.example.Group37;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class Group37Application {

	public static void main(String[] args) {
		SpringApplication.run(Group37Application.class, args);
	}

}
