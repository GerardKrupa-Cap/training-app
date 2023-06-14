import io.appium.java_client.remote.AutomationName;
import io.appium.java_client.service.local.AppiumServiceBuilder;
import io.appium.java_client.service.local.flags.GeneralServerFlag;
import org.junit.*;

import io.appium.java_client.ios.IOSDriver;
import io.appium.java_client.ios.options.XCUITestOptions;
import io.appium.java_client.service.local.AppiumDriverLocalService;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import java.net.MalformedURLException;
import java.net.URL;
import java.time.Duration;

public class AppleSimulatorTest {

    private IOSDriver driver;
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
        XCUITestOptions options = new XCUITestOptions()
                .setPlatformName("iOS")
                .setDeviceName("iPhone SE (3rd generation)")
                .setPlatformVersion("16.4")
                .setAutomationName(AutomationName.IOS_XCUI_TEST)
                .setApp("/Users/krupagj/Library/Developer/Xcode/DerivedData//TrainingApp-ezurjbqfgmchctbniwlgxnxcsjbt/Build/Products/Debug-iphonesimulator/TrainingApp.app");

        driver = new IOSDriver(new URL("http://127.0.0.1:4723"), options);
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
        Assert.assertNotNull(driver.findElement(By.xpath("//*[@label='Nothing to see here']")));
        driver.findElement(By.xpath("//*[@name='changeText']")).click();
        Assert.assertNotNull(driver.findElement(By.xpath("//*[@label='Still nothing to see here']")));
    }

    @Test
    public void theButtonsNavigate() {
        driver.findElement(By.xpath("//*[@label='Bye bye']")).click();
        driver.findElement(By.xpath("//*[@label='Go Home']")).click();
        Assert.assertNotNull(driver.findElement(By.xpath("//*[@label='Nothing to see here']")));
    }

    @Test
    public void backGoesBackHome() {
        driver.findElement(By.xpath("//*[@label='Bye bye']")).click();
        Assert.assertNotNull(driver.findElement(By.xpath("//*[@label='Go Home']")));
        driver.navigate().back();
        Assert.assertNotNull(driver.findElement(By.xpath("//*[@label='Nothing to see here']")));
    }
}
