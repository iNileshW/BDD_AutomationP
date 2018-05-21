package step_definitions;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class LoginSteps {

	WebDriver driver;

@Given("^User is on automation practice website$")
public void user_is_on_automation_practice_website()  {
	System.err.close();
    System.setErr(System.out);
	System.setProperty("webdriver.chrome.driver", "C:\\Drivers\\chromedriver.exe");
	driver = new ChromeDriver();
	driver.get("http://automationpractice.com");
	driver.manage().deleteAllCookies();
	driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
	
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
	driver.quit();
}

}
