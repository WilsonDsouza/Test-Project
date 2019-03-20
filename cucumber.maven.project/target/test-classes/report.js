$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Feature\\Newform13requestfromcha.feature");
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
  "keyword": "Scenario",
  "tags": [
    {
      "line": 22,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "I select the location",
  "rows": [
    {
      "cells": [
        "Mundra"
      ],
      "line": 25
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "I click the go button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I click the form13 dropdown",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "I click the new request",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I select the shipping line",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "I select the vessel name",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "the via no,terminal,service,pod gets autopopulated",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "I insert the fpod",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I select the cargotype",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I select the origin",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I insert the shippinginstno",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I insert the bookingno",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I select the containerstatus",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I select the CFS",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I insert the terminalloginid",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I select the issueto",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I insert the shippername",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I click the improw button",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "I attach the attachments",
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "I click the submit button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.I_select_the_location(DataTable)"
});
formatter.result({
  "duration": 163216822,
  "error_message": "cucumber.runtime.CucumberException: Not a List type: class cucumber.table.DataTable\r\n\tat cucumber.runtime.table.TableConverter.convert(TableConverter.java:56)\r\n\tat cucumber.api.DataTable.convert(DataTable.java:77)\r\n\tat cucumber.runtime.StepDefinitionMatch.tableArgument(StepDefinitionMatch.java:101)\r\n\tat cucumber.runtime.StepDefinitionMatch.transformedArgs(StepDefinitionMatch.java:81)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:38)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:268)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:45)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:40)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:36)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:83)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:77)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:82)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:675)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\r\n",
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