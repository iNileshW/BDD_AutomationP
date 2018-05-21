$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Admin/eclipse-workspace/BDD_AutomationP/src/main/java/Features/login.feature");
formatter.feature({
  "line": 1,
  "name": "Automation Login feature",
  "description": "",
  "id": "automation-login-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "Login test with invalid details",
  "description": "",
  "id": "automation-login-feature;login-test-with-invalid-details",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User is on automation practice website",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "The user enters the invalid login credentials",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "The user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "The user is presented with validation message",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_is_on_automation_practice_website()"
});
formatter.result({
  "duration": 33403429300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.the_user_enters_the_invalid_login_credentials()"
});
formatter.result({
  "duration": 2919737800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.the_user_clicks_on_login_button()"
});
formatter.result({
  "duration": 1008350500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.the_user_is_presented_with_validation_message()"
});
formatter.result({
  "duration": 948307900,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Login test with valid details",
  "description": "",
  "id": "automation-login-feature;login-test-with-valid-details",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "User is on automation practice website",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "The user enters the valid login details",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "The user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "The user is presented with landing page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_is_on_automation_practice_website()"
});
formatter.result({
  "duration": 9622144200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.the_user_enters_the_valid_login_details()"
});
formatter.result({
  "duration": 2078830800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.the_user_clicks_on_login_button()"
});
formatter.result({
  "duration": 1811107300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.the_user_is_presented_with_landing_page()"
});
formatter.result({
  "duration": 618414400,
  "status": "passed"
});
});