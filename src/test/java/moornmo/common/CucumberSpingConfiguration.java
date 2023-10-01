package moornmo.common;

import io.cucumber.spring.CucumberContextConfiguration;
import moornmo.SalesApplication;
import org.springframework.boot.test.context.SpringBootTest;

@CucumberContextConfiguration
@SpringBootTest(classes = { SalesApplication.class })
public class CucumberSpingConfiguration {}
