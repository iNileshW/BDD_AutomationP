#@LoginFunctionality
Feature: Automation Login feature

#@SmokeTest these are called Tags
@SmokeTest @RegressionTest 
Scenario: Login test with invalid details

Given User is on automation practice website
When The user enters the invalid login credentials
And The user clicks on login button 
Then The user is presented with validation message

@SmokeTest	 
Scenario: Login test with valid details

Given User is on automation practice website
When The user enters the valid login details
And The user clicks on login button 
Then The user is presented with landing page
 
 #Without Using Examples keyword username & password
 @RegressionTest
 Scenario: Login test with valid details without using examples

Given User is on automation practice website
When The user enters the valid "mymail@aol.com" and "hello123"
And The user clicks on login button 
Then The user is presented with landing page

#Using Examples keyword username & password - Used preferrably for parameterization
 @End2End
 Scenario Outline: Login test with valid details using examples

Given User is on automation practice website
When The user enters the valid "<username>" and "<password>"
And The user clicks on login button 
Then The user is presented with landing page

Examples:
	|	username		|	password	|
	|	mymail@aol.com	|	hello12		|
	|	mymail@aol.co	|	hello123	|
	|	mymail@aol.com	|	hello123	|
	
# Using DataTable - Not preferred - Used only for 1 row as extra efforts for more rows
@SmokeTest
Scenario: Login test with valid details using examples

Given User is on automation practice website
When The user enters the valid username and password
	|	mymail@aol.com	|	hello123	|
And The user clicks on login button 
Then The user is presented with landing page

#DataTable with Maps Object parameterization
@Regression
Scenario: Login test with valid details using mapping

Given User is on automation practice website
When The user enters the valid username and password using mapping
	|	mymail@aol.com	|	hello12		|
	|	mymail@aol.co	|	hello123	|
	|	mymail@aol.com	|	hello123	|
And The user clicks on login button 
Then The user is presented with landing page
 
#Cucumber Hooks
Scenario: Login test with invalid details

Given User is on automation practice website
When The user enters the invalid login credentials
And The user clicks on login button 
Then The user is presented with validation message

