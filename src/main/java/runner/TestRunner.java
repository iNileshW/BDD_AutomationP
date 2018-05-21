package runner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

	@RunWith(Cucumber.class)
	@CucumberOptions 
	(
	features = 
	"C:\\Users\\Admin\\eclipse-workspace\\BDD_AutomationP\\src\\main\\java\\Features\\login.feature",			
	glue = {"step_definitions"}
	,format = {"pretty","html:test-output"}
			)
	public class TestRunner {
		
	}
