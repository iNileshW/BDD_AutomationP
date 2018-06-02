$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/java/Features/login.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#@LoginFunctionality"
    }
  ],
  "line": 2,
  "name": "Automation Login feature",
  "description": "",
  "id": "automation-login-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 363233,
  "status": "passed"
});
formatter.before({
  "duration": 155941,
  "status": "passed"
});
formatter.before({
  "duration": 12660309208,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 4,
      "value": "#@SmokeTest these are called Tags"
    }
  ],
  "line": 6,
  "name": "Login test with invalid details",
  "description": "",
  "id": "automation-login-feature;login-test-with-invalid-details",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@SmokeTest"
    },
    {
      "line": 5,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "User is on automation practice website",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "The user enters the invalid login credentials",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "The user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "The user is presented with validation message",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_is_on_automation_practice_website()"
});
formatter.result({
  "duration": 346948277,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.the_user_enters_the_invalid_login_credentials()"
});
formatter.result({
  "duration": 3036867391,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.the_user_clicks_on_login_button()"
});
formatter.result({
  "duration": 1198956894,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.the_user_is_presented_with_validation_message()"
});
formatter.result({
  "duration": 1084822072,
  "status": "passed"
});
formatter.after({
  "duration": 166513,
  "status": "passed"
});
formatter.before({
  "duration": 317546,
  "status": "passed"
});
formatter.before({
  "duration": 208048,
  "status": "passed"
});
formatter.before({
  "duration": 7163775403,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Login test with valid details",
  "description": "",
  "id": "automation-login-feature;login-test-with-valid-details",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "User is on automation practice website",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "The user enters the valid login details",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "The user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "The user is presented with landing page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_is_on_automation_practice_website()"
});
formatter.result({
  "duration": 89487,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.the_user_enters_the_valid_login_details()"
});
formatter.result({
  "duration": 2821327137,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.the_user_clicks_on_login_button()"
});
formatter.result({
  "duration": 1664737857,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.the_user_is_presented_with_landing_page()"
});
formatter.result({
  "duration": 21230250,
  "status": "passed"
});
formatter.after({
  "duration": 918546328,
  "status": "passed"
});
formatter.before({
  "duration": 412696,
  "status": "passed"
});
formatter.before({
  "duration": 191434,
  "status": "passed"
});
formatter.before({
  "duration": 9439384271,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 21,
      "value": "#Without Using Examples keyword username \u0026 password"
    }
  ],
  "line": 23,
  "name": "Login test with valid details without using examples",
  "description": "",
  "id": "automation-login-feature;login-test-with-valid-details-without-using-examples",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 22,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "User is on automation practice website",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "The user enters the valid \"mymail@aol.com\" and \"hello123\"",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "The user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "The user is presented with landing page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_is_on_automation_practice_website()"
});
formatter.result({
  "duration": 66076,
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
  "duration": 2661298849,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.the_user_clicks_on_login_button()"
});
formatter.result({
  "duration": 1542825242,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.the_user_is_presented_with_landing_page()"
});
formatter.result({
  "duration": 27715960,
  "status": "passed"
});
formatter.after({
  "duration": 896441601,
  "status": "passed"
});
formatter.before({
  "duration": 237876,
  "status": "passed"
});
formatter.before({
  "duration": 125734,
  "status": "passed"
});
formatter.before({
  "duration": 7125591763,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 45,
      "value": "# Using DataTable - Not preferred - Used only for 1 row as extra efforts for more rows"
    }
  ],
  "line": 47,
  "name": "Login test with valid details using examples",
  "description": "",
  "id": "automation-login-feature;login-test-with-valid-details-using-examples",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 46,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 49,
  "name": "User is on automation practice website",
  "keyword": "Given "
});
formatter.step({
  "line": 50,
  "name": "The user enters the valid username and password",
  "rows": [
    {
      "cells": [
        "mymail@aol.com",
        "hello123"
      ],
      "line": 51
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 52,
  "name": "The user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "The user is presented with landing page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_is_on_automation_practice_website()"
});
formatter.result({
  "duration": 90242,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.The_user_enters_the_valid_username_and_password(DataTable)"
});
formatter.result({
  "duration": 2918159308,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.the_user_clicks_on_login_button()"
});
formatter.result({
  "duration": 1474071132,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.the_user_is_presented_with_landing_page()"
});
formatter.result({
  "duration": 35140713,
  "status": "passed"
});
formatter.after({
  "duration": 944781415,
  "status": "passed"
});
});