import com.microsoft.appcenter.appium.EnhancedAndroidDriver;
import com.microsoft.appcenter.appium.Factory;
import io.appium.java_client.remote.AutomationName;
import io.appium.java_client.service.local.AppiumDriverLocalService;
import io.appium.java_client.service.local.AppiumServiceBuilder;
import org.junit.*;
import org.junit.rules.TestWatcher;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.DesiredCapabilities;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.concurrent.TimeUnit;

public class RemoteAndroidTest {

    private static boolean isInAppCenter() {
        String appCenterTest = System.getenv("APP_CENTER_TEST");
        return "1".equals(appCenterTest);
    }

    @Rule
    public TestWatcher watcher = Factory.createWatcher();

    private EnhancedAndroidDriver<WebElement> driver;

    private static AppiumDriverLocalService appiumDriverLocalService = null;

    @BeforeClass
    public static void setupClass() throws MalformedURLException {

        if (!isInAppCenter()) {
            appiumDriverLocalService = new AppiumServiceBuilder()
                    .withArgument(() -> "--base-path", "/wd/hub")
                    .usingPort(4723)
                    .build();
            appiumDriverLocalService.start();
        }
    }

    @AfterClass
    public static void tearDownClass() {
        if (appiumDriverLocalService != null) {
            appiumDriverLocalService.stop();
        }
    }

    @Before
    public void setup() throws MalformedURLException {
        DesiredCapabilities capabilities = new DesiredCapabilities();
        capabilities.setCapability("automationName", AutomationName.ANDROID_UIAUTOMATOR2);
        if (!isInAppCenter()) {
            capabilities.setCapability("app", "./android/app/build/outputs/apk/debug/app-debug.apk");
        }
        driver = Factory.createAndroidDriver(new URL("http://127.0.0.1:4723/wd/hub"), capabilities);
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
        driver.label("The application starts");
        Assert.assertNotNull(driver.findElement(By.id("test:id/Beer")));
        driver.label("The list of tags is displayed");
        driver.findElement(By.id("test:id/Beer")).click();
        driver.label("Selecting Beer tag");
        Assert.assertNotNull(driver.findElement(By.id("test:id/tagged-image")));
        driver.label("The image is displayed");
        driver.findElement(By.id("test:id/navigate-home")).click();
        driver.label("The home button is clicked");
        Assert.assertNotNull(driver.findElement(By.id("test:id/Beer")));
        driver.label("The home screen is displayed");
    }

    @Test
    public void backGoesBackHome() {
        driver.label("The application starts");
        Assert.assertNotNull(driver.findElement(By.id("test:id/Beer")));
        driver.label("The list of tags is displayed");
        driver.findElement(By.id("test:id/Beer")).click();
        driver.label("Selecting Beer tag");
        Assert.assertNotNull(driver.findElement(By.id("test:id/tagged-image")));
        driver.label("The image is displayed");
        driver.navigate().back();
        driver.label("Clicking the back button");
        Assert.assertNotNull(driver.findElement(By.id("test:id/Beer")));
        driver.label("The home screen is displayed");
    }
}
