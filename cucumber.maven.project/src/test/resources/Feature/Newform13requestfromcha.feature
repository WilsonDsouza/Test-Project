#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template

Feature: To create a new form13 request for terminal NSICT

@Login
Scenario:
Given I select the location
| Mundra |
And I click the go button
Then I click the form13 dropdown
And I click the new request
When I select the shipping line
And I select the vessel name
Then the via no,terminal,service,pod gets autopopulated
And I insert the fpod
And I select the cargotype
And I select the origin
And I insert the shippinginstno
And I insert the bookingno
And I select the containerstatus 
And I select the CFS
And I insert the terminalloginid
And I select the issueto
And I insert the shippername
Then I click the improw button
Then I attach the attachments
And I click the submit button 




 

  