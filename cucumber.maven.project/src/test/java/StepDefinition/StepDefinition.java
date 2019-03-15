package StepDefinition;

import java.awt.RenderingHints.Key;
import java.awt.Robot;
import java.awt.event.KeyEvent;
import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;




public class StepDefinition {
	
	
	public static WebDriver driver;
    

	@Given("^I open the ODeX url in the browser$")
	public void I_open_the_ODeX_url_in_the_browser() throws Throwable {
		
		WebDriverManager.chromedriver().setup();
		System.setProperty("webdriver.chrome.driver", "C:\\chromedriver.exe");
		
       
        driver = new ChromeDriver();     
	   driver.get("https://test.odex.co");
	   driver.manage().window().maximize();
	}

	@When("^I enter the \"(.*)\"")
	public void I_enter_the_username(String username) throws Throwable {
	    // Express the Regexp above with the code you wish you had
		driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS); 
		driver.findElement(By.id("loginId")).click();
		driver.findElement(By.id("loginId")).sendKeys(username);
	}

	@Then("^I add the \"([^\"]*)\"")
	public void I_enter_the_password(String password) throws Throwable {
		driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS); 
		driver.findElement(By.id("password")).click();
		driver.findElement(By.id("password")).sendKeys(password);
		
	  
	}

	@Then("^I click the signin button$")
	public void I_click_the_signin_button() throws Throwable {
	    // Express the Regexp above with the code you wish you had
		driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS); 
		driver.findElement(By.id("signIn")).click();
	}

	@Then("^I select the \"([^\"]*)\" from the dropdown$")
	public void I_select_the_companyname_from_the_dropdown(String companyname) throws Throwable {
	    // Express the Regexp above with the code you wish you had
		driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS); 
		driver.findElement(By.cssSelector("a.chosen-single")).click();
		driver.findElement(By.xpath("//div[@class='chosen-search']/input")).sendKeys(companyname);
	}

	@Then("^I click the confirm button$")
	public void I_click_the_confirm_button() throws Throwable {
		Robot robot = new Robot();
	    robot.keyPress(KeyEvent.VK_TAB);
		robot.keyRelease(KeyEvent.VK_TAB);
	    driver.findElement(By.id("confirmSignIn")).click();
	    
	}

	@Given("^I select the location$")
	public void I_select_the_location() throws Throwable {
		 driver.manage().timeouts().implicitlyWait(8, TimeUnit.SECONDS); 
		 
		 driver.findElement(By.xpath("//div[@class='modal-body']//i[.=' ']")).click();
		 //driver.manage().timeouts().implicitlyWait(8, TimeUnit.SECONDS);
		 System.out.println("Test");
		 WebDriverWait wait = new WebDriverWait(driver,10);
		 WebElement element =  driver.findElement(By.xpath("//div[@id='locIdF13_chosen']/a/span"));
		 wait.until(ExpectedConditions.elementToBeClickable(element));
		 element.click();
	
		 driver.findElement(By.xpath("//div[@id='locIdF13_chosen']//a[@class='chosen-single']//div//b")).click();
		 driver.findElement(By.xpath("//div[@id='locIdF13_chosen']//input[@type='text']")).sendKeys("Nhava Sheva");
		 Robot robot = new Robot();
		 robot.keyPress(KeyEvent.VK_TAB);
		 robot.keyRelease(KeyEvent.VK_TAB);
		
		 
	}
	//*[@class='button top5']
	@Given("^I click the go button$")
	public void I_click_the_go_button() throws Throwable {
		driver.findElement(By.cssSelector(".sign > .top5")).click();
		
	}

	@Then("^I click the form(\\d+) dropdown$")
	public void I_click_the_form_dropdown(int arg1) throws Throwable {
		driver.manage().timeouts().implicitlyWait(8, TimeUnit.SECONDS);
    		driver.findElement(By.linkText("Form 13")).click();
		
	}

	@Then("^I click the new request$")
	public void I_click_the_new_request() throws Throwable {
		driver.manage().timeouts().implicitlyWait(8, TimeUnit.SECONDS);
		driver.findElement(By.linkText("New Request")).click();
	}

	@When("^I select the shipping line$")
	public void I_select_the_shipping_line() throws Throwable {
		driver.manage().timeouts().implicitlyWait(8, TimeUnit.SECONDS);
		driver.findElement(By.cssSelector("#bnfId_chosen span")).click();
		driver.findElement(By.cssSelector("#bnfId_chosen input")).sendKeys("MSC");
		Robot robot = new Robot();
		 robot.keyPress(KeyEvent.VK_TAB);
		 robot.keyRelease(KeyEvent.VK_TAB);
		 String liner = driver.findElement(By.cssSelector("#bnfId_chosen span")).getText();
		 Assert.assertTrue("MSC", liner.contains(liner));
		 
		 
	}

	@When("^I select the vessel name$")
	public void I_select_the_vessel_name() throws Throwable {
		driver.manage().timeouts().implicitlyWait(8, TimeUnit.SECONDS);
		driver.findElement(By.cssSelector("#vesselNm_chosen span")).click();
		driver.findElement(By.cssSelector("#vesselNm_chosen input")).sendKeys("12232");
		
	    
	}

	@Then("^the via no,terminal,service,pod gets autopopulated$")
	public void the_via_no_terminal_service_pod_gets_autopopulated() throws Throwable {
	   
	    
	}

	@Then("^I insert the fpod$")
	public void I_insert_the_fpod() throws Throwable {
	    driver.findElement(By.id("fpodDesc")).click();
	    driver.findElement(By.id("fpodDesc")).sendKeys("abcd");
	}

	@Then("^I select the cargotype$")
	public void I_select_the_cargotype() throws Throwable {
	   driver.findElement(By.cssSelector("#cargoTp_chosen span")).click();
	   driver.findElement(By.cssSelector("#cargoTp_chosen input")).sendKeys("HAZ");
	   Robot robot = new Robot();
	   robot.keyPress(KeyEvent.VK_TAB);
		 robot.keyRelease(KeyEvent.VK_TAB);
	}

	@Then("^I select the origin$")
	public void I_select_the_origin() throws Throwable {
	    driver.findElement(By.cssSelector("#origin_chosen span")).click();
	    driver.findElement(By.cssSelector("#origin_chosen input")).sendKeys("Buffer");
	}

	@Then("^I insert the shippinginstno$")
	public void I_insert_the_shippinginstno() throws Throwable {
	   driver.findElement(By.id("shpInstructNo")).click();
	   driver.findElement(By.id("shpInstructNo")).sendKeys("Shipinst3638423847");
	}

	@Then("^I insert the bookingno$")
	public void I_insert_the_bookingno() throws Throwable {
		driver.findElement(By.id("bookNo")).click();
		   driver.findElement(By.id("bookNo")).sendKeys("bookno3638423847");
	}

	@Then("^I select the containerstatus$")
	public void I_select_the_containerstatus() throws Throwable {
	    driver.findElement(By.id("cntnrStatus_chosen")).click();
	    driver.findElement(By.id("cntnrStatus_chosen input")).sendKeys("Full");
	}

	@Then("^I select the CFS$")
	public void I_select_the_CFS() throws Throwable {
	    driver.findElement(By.cssSelector("#cfsCode_chosen span")).click();
	    driver.findElement(By.cssSelector("#cfsCode_chosen span input")).sendKeys("GSEC Limited");
	}

	@Then("^I insert the terminalloginid$")
	public void I_insert_the_terminalloginid() throws Throwable {
	 
	}

	@Then("^I select the issueto$")
	public void I_select_the_issueto() throws Throwable {
	    driver.findElement(By.cssSelector("#issueTo_chosen span")).click();
	    driver.findElement(By.cssSelector("#issueTo_chosen span input")).sendKeys("CHA");
	}

	@Then("^I insert the shippername$")
	public void I_insert_the_shippername() throws Throwable {
	    driver.findElement(By.id("shipperNm")).click();
	    driver.findElement(By.id("shipperNm")).sendKeys("test");
	}

	@Then("^I click the improw button$")
	public void I_click_the_addrow_button() throws Throwable {
	  driver.findElement(By.id("impRow")).click();
	  
	}

	
	

	@Then("^I attach the attachments$")
	public void I_attach_the_attachments() throws Throwable {
	    // Express the Regexp above with the code you wish you had
	    throw new PendingException();
	}

	@Then("^I click the submit button$")
	public void I_click_the_submit_button() throws Throwable {
	    // Express the Regexp above with the code you wish you had
	    throw new PendingException();
	}

	
	
	

}
