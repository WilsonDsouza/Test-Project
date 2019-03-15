package TestRunner;

import org.junit.runner.RunWith;

import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@Cucumber.Options
(features="src\\test\\resources\\",
glue={"StepDefinition"},
format = {"pretty", "html:src\\test\\resources\\"},
monochrome=true)

public class Runner {

}
