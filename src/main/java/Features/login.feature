Feature: Automation Login feature
Scenario: Login test with invalid details

Given User is on automation practice website
When The user enters the invalid login credentials
And The user clicks on login button 
Then The user is presented with validation message
 
Scenario: Login test with valid details

Given User is on automation practice website
When The user enters the valid login details
And The user clicks on login button 
Then The user is presented with landing page
 