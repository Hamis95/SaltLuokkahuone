// This file can be used to configure global preferences for Firefox
// Example: Homepage
pref("browser.startup.homepage", "https://www.kiddle.co");
//turha tiedonjako pois päältä
lockPref("breakpad.reportURL", "");
lockPref("browser.tabs.crashReporting.sendReport", false);
lockPref("datareporting.healthreport.documentServerURI", "");
lockPref("datareporting.healthreport.service.enabled", false);
lockPref("datareporting.healthreport.uploadEnabled", false);
lockPref("datareporting.policy.dataSubmissionEnabled", false);
lockPref("datareporting.policy.dataSubmissionEnabled.v2", false);
lockPref("dom.ipc.plugins.flash.subprocess.crashreporter.enabled", false);
lockPref("dom.ipc.plugins.reportCrashURL", false);
lockPref("toolkit.telemetry.archive.enabled", false);
lockPref("toolkit.telemetry.cachedClientID", "");
lockPref("toolkit.telemetry.enabled", false);
lockPref("toolkit.telemetry.prompted", 2);
lockPref("toolkit.telemetry.rejected", true);
lockPref("toolkit.telemetry.server", "");
lockPref("toolkit.telemetry.unified", false);
lockPref("toolkit.telemetry.unifiedIsOptIn", true);
lockPref("toolkit.telemetry.optoutSample", false); 
//Tracking pois ja CPS päälle
lockPref("privacy.donottrackheader.enabled", true);
lockPref("privacy.donottrackheader.value", 1);
lockPref("security.csp.enable", true);
//XXS filtteri päälle
lockPref("browser.urlbar.filter.javascript", true);

// Poistetaan java käytöstä
lockPref("plugin.state.java", 0);
lockPref("plugin.state.npdeployjava1", 0);
