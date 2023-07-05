import com.microsoft.appcenter.appium.EnhancedAndroidDriver;
import com.microsoft.appcenter.appium.Factory;
import io.appium.java_client.remote.AutomationName;
import io.appium.java_client.service.local.AppiumDriverLocalService;
import org.junit.*;
import org.junit.rules.TestWatcher;
import org.openqa.selenium.By;
import org.openqa.selenium.Platform;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.DesiredCapabilities;

import java.net.MalformedURLException;
import java.net.URL;
import java.time.Duration;
import java.util.concurrent.TimeUnit;

public class RemoteAndroidTest {

    @Rule
    public TestWatcher watcher = Factory.createWatcher();

    private EnhancedAndroidDriver<WebElement> driver;

    private static AppiumDriverLocalService appiumDriverLocalService;

    @BeforeClass
    public static void setupClass() throws MalformedURLException {
//        appiumDriverLocalService = new AppiumServiceBuilder()
//                .usingPort(4723)
//                .build();
//        appiumDriverLocalService.start();

    }

    @AfterClass
    public static void tearDownClass() {
//        if (appiumDriverLocalService != null) {
//            appiumDriverLocalService.stop();
//        }
    }

    @Before
    public void setup() throws MalformedURLException {
        DesiredCapabilities capabilities = new DesiredCapabilities();
        capabilities.setPlatform(Platform.ANDROID);
        capabilities.setCapability("automationName", AutomationName.ANDROID_UIAUTOMATOR2);
        driver = Factory.createAndroidDriver(new URL("http://127.0.0.1:4723"), capabilities);
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
    }

    @After
    public void tearDown() {
        if (driver != null) {
            driver.label("Stopping App");
            driver.quit();
        }
    }

    @Test
    public void theButtonsNavigate() {
        driver.label("Selecting Beer tag");
        driver.findElement(By.id("test:id/Beer")).click();
        Assert.assertNotNull(driver.findElement(By.id("test:id/tagged-image")));
        driver.label("Clicking the home button");
        driver.findElement(By.id("test:id/navigate-home")).click();
        Assert.assertNotNull(driver.findElement(By.id("test:id/Beer")));
    }

    @Test
    public void backGoesBackHome() {
        driver.label("Selecting Beer tag");
        driver.findElement(By.id("test:id/Beer")).click();
        Assert.assertNotNull(driver.findElement(By.id("test:id/tagged-image")));
        driver.label("Clicking the back button");
        driver.navigate().back();
        Assert.assertNotNull(driver.findElement(By.id("test:id/Beer")));
    }
}
