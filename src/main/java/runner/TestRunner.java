package runner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

	@RunWith(Cucumber.class)
	@CucumberOptions 
	(
	/*To tell where feature file stored. CSV not just .feature file can also be given. Only Folder name 
	 * can also be given directly with package name */		
	features = 
	"C:\\Users\\Admin\\eclipse-workspace\\BDD_AutomationP\\src\\main\\java\\Features\\login.feature",	
	/*For telling where step definition files are avlbl to runner*/
	glue = {"step_definitions"}
	/*For reporting in cucumber, console pretty format, html report, for json format report. Here json_output
	 * is folder & cucumber.json is report name, the report is in key-value pair. junit report also shown here
	 * Report is concise form. */
	,format = {"pretty","html:test-output", "json:json_output/cucumber.json","junit:junit_xml/cucumber.xml"}
	/*dry run will not run the test case but just check the mapping between step def & feature file.
	 *  If true only mapping checed test cases not run. The missing step can be identified in console. 
	 *  Keep it false as then only test cases will run.*/
	, dryRun = true
	/*for multiple scenario options put the tags of tests which need to run. 
	 * For OR use {"@SmokeTest, @RegressionTest"}
	 * For AND use ie both {"@SmokeTest","@RegressionTest"}
	 * To ignore use "~ e.g. {"~@SmokeTest","@RegressionTest"}
	 * ,*/
	,tags = {"@SmokeTest, @RegressionTest"}
	/*Display output in readable format in console window. To make output readable. Keep it true*/
	,monochrome = true		
	/*Strict - True means it will fail execution if there are any undefined/pending steps. Will show 
	 * pending exception if step missing. Checks if any step definition is not defined in step def file*/
	, strict = true		
			)
	public class TestRunner {
		
	}
