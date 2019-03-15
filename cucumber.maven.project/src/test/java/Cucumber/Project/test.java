package Cucumber.Project;

import static org.junit.Assert.*;

import java.awt.AWTException;
import java.awt.Robot;
import java.awt.event.KeyEvent;
import java.util.Iterator;
import java.util.Set;
import java.util.concurrent.TimeUnit;

//import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.Test;

import io.github.bonigarcia.wdm.WebDriverManager;

public class test {
     
	
	public static WebDriver driver;
	
	
	//driver = new ChromeDriver();
	
   @Test(priority=1)
	public void OpenURLA() {
	   WebDriverManager.chromedriver().setup();
		
	   driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
     
		  driver = new ChromeDriver();
		  driver.get("https://www.amazon.in/"); // Open the url in chrome browser page
	  }
	
   @Test(priority=2)
	  public void ValidateSigninbuttonB() {
		  
		 
		  driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS); // Implicit wait
		  
		  
		  
		  WebElement actionBtn=driver.findElement(By.xpath("//span[contains(@class,'nav-line-1') and contains(text(), 'Hello, Sign in')]")); // Extracting the value from the webelement identifier
		  actionBtn.click(); // Clicking the sign in link
		  
		  // Validating the signin link
		  
		  if (driver.findElement(By.id("ap_email")).isDisplayed()) {  
			  System.out.println("Sign in link is working");
		  }
		  else {
			  System.out.println("Sign in link is not working");
		  }
		  
	  
	 }
	  
	  // Code to count number of banners on the home page
	
      @Test(priority=3)    
	  public void NumberofbannerscountC() {
		  driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);  // Implicit wait
		  driver.navigate().back();  // Browser back to go to the home page
		  driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS); // Implicit wait
		  int menuList =  driver.findElements(By.xpath("//li[@class='a-carousel-card']")).size(); // Extracting the banner count from the element identifier
		  System.out.println("Number of banners" +menuList); // Displaying the banner count in the eclipse console
		 
	  }
	  
	  // Code to validate successful login
	  
	  @Test(priority=4)
	  public void ValidLoginD() {
		  driver.manage().timeouts().implicitlyWait(2, TimeUnit.SECONDS);
		  ValidateSigninbuttonB(); // Calling the validatesigninbutton function to click the signin link
		  
		  driver.manage().timeouts().implicitlyWait(2, TimeUnit.SECONDS); // Implicit wait
		  driver.findElement(By.id("ap_email")).click(); // Clicking the username
		  driver.manage().timeouts().implicitlyWait(2, TimeUnit.SECONDS); // Implicit wait
		  driver.findElement(By.id("ap_email")).sendKeys("wilsoncajetan@gmail.com"); // Inserting the username
		  driver.manage().timeouts().implicitlyWait(2, TimeUnit.SECONDS); // Implicit wait
		  driver.findElement(By.id("continue")).click(); // Clicking the continue button
		  driver.manage().timeouts().implicitlyWait(2, TimeUnit.SECONDS); // Implicit wait
		  driver.findElement(By.id("ap_password")).sendKeys("Test@@12345"); // Inserting the password
		  driver.manage().timeouts().implicitlyWait(2, TimeUnit.SECONDS); // Implicit wait
		  driver.findElement(By.id("signInSubmit")).click(); // Clicking the login button
		  
		  
		  String text = driver.findElement(By.id("nav-link-yourAccount")).getText(); // Extracting the text value from the webelement identifier
		 
		  // Validating the successful login flow
		  
		  if (text.contains("Wilson")){
			  System.out.println("Login successful");
		  }
		  else {
			  System.out.println("Login not successful");
		  }
	  }
	  
	  // Code to change the pin number
	  
	  @Test(priority=5)
	  public void ChangePINCodeD() throws AWTException {  
		 
		driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);  // Implicit wait
	    driver.findElement(By.cssSelector("#nav-global-location-slot > span > a")).click(); // Clicking the pincode link
	    
	    
	    String MainWindow=driver.getWindowHandle();		
		
	    // To handle all new opened window.				
	        Set<String> s1=driver.getWindowHandles();		
	        Iterator<String> i1=s1.iterator();		
	 
		while(i1.hasNext())			
	    {		
	        String ChildWindow=i1.next();		
	        		
	        if(MainWindow.equalsIgnoreCase(ChildWindow))			
	        {    	
	   
	    
	    	
	    driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS); // Implicit wait
	    driver.findElement(By.linkText("Change")).click(); // To click the change hyperlink
	    driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS); // Implicit wait    	
	    driver.findElement(By.cssSelector("#GLUXZipUpdateInput")).click();
	    driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS); // Implicit wait
	    driver.findElement(By.cssSelector("#GLUXZipUpdateInput")).clear();
	    driver.findElement(By.cssSelector("#GLUXZipUpdateInput")).sendKeys("421502");
	    driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS); // Implicit wait
	    
	    Robot robot = new Robot(); 
	    robot.keyPress(KeyEvent.VK_TAB);// Using robot class to do keyboard tab key event to focus on the apply button
		robot.keyRelease(KeyEvent.VK_TAB); 
	    driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS); // Implicit wait
	    robot.keyPress(KeyEvent.VK_ENTER); // Using robot class to do keyboard enter key event to save the pincode
      robot.keyRelease(KeyEvent.VK_ENTER);
	        }
	   
	  }
	
	    }	
	  }

