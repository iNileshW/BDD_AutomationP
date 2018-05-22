package step_definitions;

import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.DataTable;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class LoginSteps {

	WebDriver driver;

@Given("^User is on automation practice website$")
public void user_is_on_automation_practice_website()  {
	/*System.err.close();
    System.setErr(System.out);
	System.setProperty("webdriver.chrome.driver", "C:\\Drivers\\chromedriver.exe");
	driver = new ChromeDriver();
	driver.get("http://automationpractice.com");
	driver.manage().deleteAllCookies();
	driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);*/
	
}

@When("^The user enters the invalid login credentials$")
public void the_user_enters_the_invalid_login_credentials()  {
	String Title = driver.getTitle(); 
	System.out.println(Title);
	driver.findElement(By.linkText("Sign in")).click();
	Title = driver.getTitle();
	System.out.println(Title);
	driver.findElement(By.id("email")).clear();
	driver.findElement(By.id("email")).sendKeys("mymail@aol.com");
	driver.findElement(By.name("passwd")).clear();
	driver.findElement(By.name("passwd")).sendKeys("123456");
}

@When("^The user enters the valid login details$")
public void the_user_enters_the_valid_login_details()  {
	String Title = driver.getTitle(); 
	System.out.println(Title);
	driver.findElement(By.linkText("Sign in")).click();
	Title = driver.getTitle();
	System.out.println(Title);
	driver.findElement(By.id("email")).clear();
	driver.findElement(By.id("email")).sendKeys("mymail@aol.com");
	driver.findElement(By.name("passwd")).clear();
	driver.findElement(By.name("passwd")).sendKeys("hello123");
}

//Hard coded values removed
@When("^The user enters the valid \"(.*)\" and \"(.*)\"$")
//Other form of Regular Expressions :- \"([^\"]*)\"
public void the_user_enters_the_valid_username_and_password(String username, String Password)  {
	String Title = driver.getTitle(); 
	System.out.println(Title);
	driver.findElement(By.linkText("Sign in")).click();
	Title = driver.getTitle();
	System.out.println(Title);
	driver.findElement(By.id("email")).clear();
	driver.findElement(By.id("email")).sendKeys(username);
	driver.findElement(By.name("passwd")).clear();
	driver.findElement(By.name("passwd")).sendKeys(Password);
}

//Using DataTable
@When("^The user enters the valid username and password$")
public void The_user_enters_the_valid_username_and_password(DataTable credentials)  {
	//Initialize Datatable access
	List <List<String>> data =  credentials.raw();
	String Title = driver.getTitle(); 
	System.out.println(Title);
	driver.findElement(By.linkText("Sign in")).click();
	Title = driver.getTitle();
	System.out.println(Title);
	driver.findElement(By.id("email")).clear();
	driver.findElement(By.id("email")).sendKeys(data.get(0).get(0));//username
	driver.findElement(By.name("passwd")).clear();
	driver.findElement(By.name("passwd")).sendKeys(data.get(0).get(1));//password
}

//Using Mapping with DataTable- Very powerful
@When("^The user enters the valid username and password using mapping$")
public void The_user_enters_the_valid_username_and_password_using_mapping(DataTable credentials)  {
	//Initialize Datatable access
	for(Map <String, String> data :  credentials.asMaps(String.class, String.class)) {
		String Title = driver.getTitle(); 
		System.out.println(Title);
		driver.findElement(By.linkText("Sign in")).click();
		Title = driver.getTitle();
		System.out.println(Title);
		driver.findElement(By.id("email")).clear();
		driver.findElement(By.id("email")).sendKeys(data.get("username"));//username
		driver.findElement(By.name("passwd")).clear();
		driver.findElement(By.name("passwd")).sendKeys(data.get("password"));//password
	}
}

@When("^The user clicks on login button$")
public void the_user_clicks_on_login_button()  {
	driver.findElement(By.id("SubmitLogin")).click();
}

@Then("^The user is presented with validation message$")
public void the_user_is_presented_with_validation_message()  {
	String loginmsg=driver.findElement(By.xpath("//*[@id=\"center_column\"]/div[1]/ol/li")).getText();
	System.out.println(loginmsg);
	Assert.assertEquals(loginmsg,"Authentication failed.");
	driver.quit();
}

@Then("^The user is presented with landing page$")
public void the_user_is_presented_with_landing_page()  {
	String pageTitle=driver.getTitle();
	System.out.println(pageTitle);
	Assert.assertEquals(pageTitle,"My account - My Store");
	
}

//tagged hooks
//2 Types of Hooks: 1. Global 2. Local - Execute specific scenario for her 
//Global hooks
@Before
public void before() {
	System.err.close();
    System.setErr(System.out);
	System.setProperty("webdriver.chrome.driver", "C:\\Drivers\\chromedriver.exe");
	driver = new ChromeDriver();
	driver.get("http://automationpractice.com");
	driver.manage().deleteAllCookies();
	driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
	System.out.println("Launch Chrome");
}
@After 
public void after() {
	System.out.println("Close Chrome");
	driver.quit();
}

//Local hook
@Before("@First")
public void beforefirst () {
	System.out.println("Before First Scenario");
}

@Before(order = 0)
public void beforefirst0 () {
	System.out.println("Before First 0 Scenario");
}


@Before(order = 1)
public void beforefirst1 () {
	System.out.println("Before First 1 Scenario");
}

//Local Hook
@After("@First")
public void afterfirst () {
	System.out.println("After First Scenario");
}
}
