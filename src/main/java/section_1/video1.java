package section_1;

public class video1 {
    /**
     * 1 -> Playwright handles the modern webApps with Auto-wait capability
     * So you do not need to put any hardCode sleep and all in the playWright.
     * -----------------------------------------------------------------------
     * playWright have some inbuilt feature to handle the autoWait.
     *
     * This link "https://playwright.dev/docs/actionability" is helpful.
     * Go through the document where you can understand the click event, how it will happen in playWright.
     * So Before to click happen it will check all the states which mentioned in document.
     * Like : all states means -> "Attached","Visible","Stable","Receives Events","Enabled","Editable"
     * Note : PLAYWRIGHT will CHECK all the state then after it will continue.
     * ======================================================================================================
     * so in other automation tools the moment appears it will try to click on it, may be by that time it is not
     * in a stable mode or fully visible then you will run into errors.
     * But in PlayWright first it will CHECK all the state then after it will continue.
     * -----------------------------------------------------------------------
     * PlayWright-JAVA
     * PlayWright-JS
     * PlayWright-C#
     * PlayWright-Python
     * PlayWright-TypeScript
     * -----------------------------------------------------------------------
     * PlayWright have one imp feature called Traces. --> Which help us to take Screenshot , test video recording,
     * flaky test retry and Logging.  [in built feature]
     * -----------------------------------------------------------------------
     * PlayWright provides inspector tool.
     * -----------------------------------------------------------------------
     * */
}
