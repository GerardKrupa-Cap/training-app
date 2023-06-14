import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.remote.AutomationName;
import io.appium.java_client.service.local.AppiumServiceBuilder;
import io.appium.java_client.service.local.flags.GeneralServerFlag;
import org.junit.*;

import io.appium.java_client.android.options.UiAutomator2Options;
import io.appium.java_client.service.local.AppiumDriverLocalService;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import java.net.MalformedURLException;
import java.net.URL;
import java.time.Duration;

public class AndroidEmulatorTest {

    private AndroidDriver driver;
    private static AppiumDriverLocalService appiumDriverLocalService;

    @BeforeClass
    public static void setupClass() throws MalformedURLException {
        appiumDriverLocalService = new AppiumServiceBuilder()
                .usingPort(4723)
                .build();
        appiumDriverLocalService.start();

    }

    @AfterClass
    public static void tearDownClass() {
        if (appiumDriverLocalService != null) {
            appiumDriverLocalService.stop();
        }
    }

    @Before
    public void setup() throws MalformedURLException {
        UiAutomator2Options options = new UiAutomator2Options()
                .setPlatformName("Android")
                .setAutomationName(AutomationName.ANDROID_UIAUTOMATOR2)
                .setApp("android/app/build/outputs/apk/debug/app-debug.apk");

        driver = new AndroidDriver(new URL("http://127.0.0.1:4723"), options);
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
    }

    @After
    public void tearDown() {
        if (driver != null) {
            driver.quit();
        }
    }

    @Test
    public void theButtonChangesTheText() {
        Assert.assertNotNull(driver.findElement(By.xpath("//*[@text='Nothing to see here']")));
        WebElement button = driver.findElement(By.xpath("//*[@text='Do not click here']"));
        button.click();
        Assert.assertNotNull(driver.findElement(By.xpath("//*[@text='Still nothing to see here']")));
    }

    @Test
    public void theButtonsNavigate() {
        driver.findElement(By.xpath("//*[@text='Bye bye']")).click();
        driver.findElement(By.xpath("//*[@text='Go Home']")).click();
        Assert.assertNotNull(driver.findElement(By.xpath("//*[@text='Nothing to see here']")));
    }

    @Test
    public void backGoesBackHome() {
        driver.findElement(By.xpath("//*[@text='Bye bye']")).click();
        Assert.assertNotNull(driver.findElement(By.xpath("//*[@text='Go Home']")));
        driver.navigate().back();
        Assert.assertNotNull(driver.findElement(By.xpath("//*[@text='Nothing to see here']")));
    }
}
