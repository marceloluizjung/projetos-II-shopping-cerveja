package br.com.delis.ShoppingCerveja;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

//@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class })
public class ShoppingCervejaApplication {

	public static void main(String[] args) {
		SpringApplication.run(ShoppingCervejaApplication.class, args);
	}

}
