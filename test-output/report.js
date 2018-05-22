$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Admin/eclipse-workspace/BDD_AutomationP/src/main/java/Features/login.feature");
formatter.feature({
  "line": 2,
  "name": "Automation Login feature",
  "description": "",
  "id": "automation-login-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@LoginFunctionality"
    }
  ]
});
formatter.before({
  "duration": 30735138100,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Login test with invalid details",
  "description": "",
  "id": "automation-login-feature;login-test-with-invalid-details",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@SmokeTest"
    },
    {
      "line": 4,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User is on automation practice website",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "The user enters the invalid login credentials",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "The user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "The user is presented with validation message",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_is_on_automation_practice_website()"
});
formatter.result({
  "duration": 1077217400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.the_user_enters_the_invalid_login_credentials()"
});
formatter.result({
  "duration": 4423517800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.the_user_clicks_on_login_button()"
});
formatter.result({
  "duration": 1539804100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.the_user_is_presented_with_validation_message()"
});
formatter.result({
  "duration": 1151186500,
  "status": "passed"
});
formatter.after({
  "duration": 149100,
  "status": "passed"
});
formatter.before({
  "duration": 12929337800,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Login test with valid details",
  "description": "",
  "id": "automation-login-feature;login-test-with-valid-details",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "User is on automation practice website",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "The user enters the valid login details",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "The user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "The user is presented with landing page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_is_on_automation_practice_website()"
});
formatter.result({
  "duration": 38000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.the_user_enters_the_valid_login_details()"
});
formatter.result({
  "duration": 3674664900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.the_user_clicks_on_login_button()"
});
formatter.result({
  "duration": 2661746200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.the_user_is_presented_with_landing_page()"
});
formatter.result({
  "duration": 25292900,
  "status": "passed"
});
formatter.after({
  "duration": 898353500,
  "status": "passed"
});
formatter.before({
  "duration": 11401507000,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 20,
      "value": "#Without Using Examples keyword username \u0026 password"
    }
  ],
  "line": 22,
  "name": "Login test with valid details without using examples",
  "description": "",
  "id": "automation-login-feature;login-test-with-valid-details-without-using-examples",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 21,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "User is on automation practice website",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "The user enters the valid \"mymail@aol.com\" and \"hello123\"",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "The user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "The user is presented with landing page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_is_on_automation_practice_website()"
});
formatter.result({
  "duration": 37300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mymail@aol.com",
      "offset": 27
    },
    {
      "val": "hello123",
      "offset": 48
    }
  ],
  "location": "LoginSteps.the_user_enters_the_valid_username_and_password(String,String)"
});
formatter.result({
  "duration": 3760058900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.the_user_clicks_on_login_button()"
});
formatter.result({
  "duration": 2218695700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.the_user_is_presented_with_landing_page()"
});
formatter.result({
  "duration": 15254500,
  "status": "passed"
});
formatter.after({
  "duration": 675747200,
  "status": "passed"
});
formatter.before({
  "duration": 11573836100,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 44,
      "value": "# Using DataTable - Not preferred - Used only for 1 row as extra efforts for more rows"
    }
  ],
  "line": 46,
  "name": "Login test with valid details using examples",
  "description": "",
  "id": "automation-login-feature;login-test-with-valid-details-using-examples",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 45,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 48,
  "name": "User is on automation practice website",
  "keyword": "Given "
});
formatter.step({
  "line": 49,
  "name": "The user enters the valid username and password",
  "rows": [
    {
      "cells": [
        "mymail@aol.com",
        "hello123"
      ],
      "line": 50
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "The user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "The user is presented with landing page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_is_on_automation_practice_website()"
});
formatter.result({
  "duration": 37400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.The_user_enters_the_valid_username_and_password(DataTable)"
});
formatter.result({
  "duration": 4054454300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.the_user_clicks_on_login_button()"
});
formatter.result({
  "duration": 1993001400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.the_user_is_presented_with_landing_page()"
});
formatter.result({
  "duration": 190266200,
  "status": "passed"
});
formatter.after({
  "duration": 779069100,
  "status": "passed"
});
});