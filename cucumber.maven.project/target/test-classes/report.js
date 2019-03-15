$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Feature\\Login.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 19,
  "name": "To login in ODeX Website",
  "description": "I want to use this template for my feature file",
  "id": "to-login-in-odex-website",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 32,
  "name": "",
  "description": "",
  "id": "to-login-in-odex-website;;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 24,
  "name": "I open the ODeX url in the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "I enter the \"sukesh.jain@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "I add the \"admin\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "I click the signin button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I select the \"CHA Company\" from the dropdown",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I click the confirm button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.I_open_the_ODeX_url_in_the_browser()"
});
formatter.result({
  "duration": 9629090406,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sukesh.jain@gmail.com",
      "offset": 13
    }
  ],
  "location": "StepDefinition.I_enter_the_username(String)"
});
formatter.result({
  "duration": 192114176,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 11
    }
  ],
  "location": "StepDefinition.I_enter_the_password(String)"
});
formatter.result({
  "duration": 106343554,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.I_click_the_signin_button()"
});
formatter.result({
  "duration": 3952103788,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CHA Company",
      "offset": 14
    }
  ],
  "location": "StepDefinition.I_select_the_companyname_from_the_dropdown(String)"
});
formatter.result({
  "duration": 226598329,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.I_click_the_confirm_button()"
});
formatter.result({
  "duration": 13623436348,
  "status": "passed"
});
formatter.uri("Feature\\Newform13requestfromcha.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 20,
  "name": "To create a new form13 request for terminal NSICT",
  "description": "",
  "id": "to-create-a-new-form13-request-for-terminal-nsict",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 23,
  "name": "",
  "description": "",
  "id": "to-create-a-new-form13-request-for-terminal-nsict;",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 24,
  "name": "I select the location",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "I click the go button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I click the form13 dropdown",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "I click the new request",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I select the shipping line",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I select the vessel name",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "the via no,terminal,service,pod gets autopopulated",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "I insert the fpod",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I select the cargotype",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I select the origin",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I insert the shippinginstno",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I insert the bookingno",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I select the containerstatus",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I select the CFS",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I insert the terminalloginid",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I select the issueto",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I insert the shippername",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I click the addrow button",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "I enter containerno",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I select the size",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I select the ISOCode",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I insert the agentsealno",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I insert the customsealno",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "I insert the vgm(mt)",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I insert the sbno",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "I insert the noofpackage",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I insert the dono",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I insert the temp",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I insert the voltage",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "I insert the remarks",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "I insert the vehicleno",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "I insert the driverlicenceno",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "I insert the drivername",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "I insert the haulier",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "I attach the attachments",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "I click the submit button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.I_select_the_location()"
});
formatter.result({
  "duration": 215830117,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: Element \u003cspan\u003e...\u003c/span\u003e is not clickable at point (469, 416). Other element would receive the click: \u003carea shape\u003d\"rect\" coords\u003d\"0,600,295,295\" alt\u003d\"Venus\" href\u003d\"http://odex.co/advisories.php\" target\u003d\"_blank\"\u003e\n  (Session info: chrome\u003d73.0.3683.75)\n  (Driver info: chromedriver\u003d73.0.3683.68 (47787ec04b6e38e22703e856e101e840b65afe72),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 53 milliseconds\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027EA-DESK-0025\u0027, ip: \u0027192.168.1.125\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, timeouts\u003d{implicit\u003d0.0, pageLoad\u003d300000.0, script\u003d30000.0}, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:52107}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003dignore, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d73.0.3683.68 (47787ec04b6e38e22703e856e101e840b65afe72), userDataDir\u003dC:\\Users\\WILSON~1.DSO\\AppData\\Local\\Temp\\scoped_dir13120_22605}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, strictFileInteractability\u003dfalse, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d73.0.3683.75, browserConnectionEnabled\u003dfalse, proxy\u003dProxy(), nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: b1aa0cd14f3532e6732937c87c7f76c3\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:671)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:272)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:82)\r\n\tat StepDefinition.StepDefinition.I_select_the_location(StepDefinition.java:95)\r\n\tat ✽.Given I select the location(Feature\\Newform13requestfromcha.feature:24)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinition.I_click_the_go_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "13",
      "offset": 16
    }
  ],
  "location": "StepDefinition.I_click_the_form_dropdown(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.I_click_the_new_request()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.I_select_the_shipping_line()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.I_select_the_vessel_name()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.the_via_no_terminal_service_pod_gets_autopopulated()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.I_insert_the_fpod()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.I_select_the_cargotype()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.I_select_the_origin()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.I_insert_the_shippinginstno()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.I_insert_the_bookingno()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.I_select_the_containerstatus()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.I_select_the_CFS()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.I_insert_the_terminalloginid()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.I_select_the_issueto()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.I_insert_the_shippername()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.I_click_the_addrow_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.I_enter_containerno()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.I_select_the_size()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.I_select_the_ISOCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.I_insert_the_agentsealno()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.I_insert_the_customsealno()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.I_insert_the_vgm_mt()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.I_insert_the_sbno()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.I_insert_the_noofpackage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.I_insert_the_dono()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.I_insert_the_temp()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.I_insert_the_voltage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.I_insert_the_remarks()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.I_insert_the_vehicleno()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.I_insert_the_driverlicenceno()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.I_insert_the_drivername()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.I_insert_the_haulier()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.I_attach_the_attachments()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.I_click_the_submit_button()"
});
formatter.result({
  "status": "skipped"
});
});