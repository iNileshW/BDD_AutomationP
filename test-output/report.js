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
  "duration": 558819,
  "status": "passed"
});
formatter.before({
  "duration": 270348,
  "status": "passed"
});
formatter.before({
  "duration": 9593931216,
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
  "duration": 410118342,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.the_user_enters_the_invalid_login_credentials()"
});
formatter.result({
  "duration": 3173394280,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.the_user_clicks_on_login_button()"
});
formatter.result({
  "duration": 1131600589,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.the_user_is_presented_with_validation_message()"
});
formatter.result({
  "duration": 994681771,
  "status": "passed"
});
formatter.after({
  "duration": 175576,
  "status": "passed"
});
formatter.before({
  "duration": 315658,
  "status": "passed"
});
formatter.before({
  "duration": 203516,
  "status": "passed"
});
formatter.before({
  "duration": 7118254609,
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
  "duration": 87976,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.the_user_enters_the_valid_login_details()"
});
formatter.result({
  "duration": 2549705524,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.the_user_clicks_on_login_button()"
});
formatter.result({
  "duration": 1583753895,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.the_user_is_presented_with_landing_page()"
});
formatter.result({
  "duration": 31570685,
  "status": "passed"
});
formatter.after({
  "duration": 1080838970,
  "status": "passed"
});
formatter.before({
  "duration": 299799,
  "status": "passed"
});
formatter.before({
  "duration": 164248,
  "status": "passed"
});
formatter.before({
  "duration": 7210788774,
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
  "duration": 67587,
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
  "duration": 2844976171,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.the_user_clicks_on_login_button()"
});
formatter.result({
  "duration": 1393319761,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.the_user_is_presented_with_landing_page()"
});
formatter.result({
  "duration": 15090404,
  "status": "passed"
});
formatter.after({
  "duration": 877839315,
  "status": "passed"
});
formatter.before({
  "duration": 327363,
  "status": "passed"
});
formatter.before({
  "duration": 170289,
  "status": "passed"
});
formatter.before({
  "duration": 7272090568,
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
  "duration": 96660,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.The_user_enters_the_valid_username_and_password(DataTable)"
});
formatter.result({
  "duration": 2976228630,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.the_user_clicks_on_login_button()"
});
formatter.result({
  "duration": 1407788289,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.the_user_is_presented_with_landing_page()"
});
formatter.result({
  "duration": 25791051,
  "status": "passed"
});
formatter.after({
  "duration": 902575782,
  "status": "passed"
});
});