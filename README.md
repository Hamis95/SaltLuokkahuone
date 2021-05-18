# SaltLuokkahuone

Tämän moduulin tarkoituksena on tehdä valmis template Ala-asteen linux koneelle.
Moduuli tekee firefoxista turvallisemman ja asentaa opetukselle tarvittavia ohjelmia koneelle käyttäen hyväksi Saltstackia.

Tähän moduuliin valitsin ohjelmat: **Firefox, GCompris, Tux Math, Tux Paint ja Scratch.**

Moduuli muokkaa Firefoxin asetuksia, jotta sen käyttö on turvallisempaa. Nämä asetukset löytyvät [syspref.js](https://github.com/Hamis95/SaltLuokkahuone/blob/main/saltluokka/syspref.js) tiedostosta.

```
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

```



Moduuli muokkaa myös minionin DNS palvelinta, jotta koulu voi asettaa haluamansa DNS-palvelimen sivujen blokkausta ja tietoturvaa varten.
DNS-asetuksia voi muokata [resolv.conf](https://github.com/Hamis95/SaltLuokkahuone/blob/main/saltluokka/resolv.conf) tiedostossa.

```

# This file is managed by man:systemd-resolved(8). Do not edit.
#
# This is a dynamic resolv.conf file for connecting local clients to the
# internal DNS stub resolver of systemd-resolved. This file lists all
# configured search domains.
#
# Run "systemd-resolve --status" to see details about the uplink DNS servers
# currently in use.
#
# Third party programs must not access this file directly, but only through the
# symlink at /etc/resolv.conf. To manage man:resolv.conf(5) in a different way,
# replace this symlink by a static file or a different symlink.
#
# See man:systemd-resolved.service(8) for details about the supported modes of
# operation for /etc/resolv.conf.

#tähän kohtaan omat DNS serverit:

nameserver 1.1.1.1
nameserver 1.0.0.1

```

Koska linuxin käyttäjät eivät ole tyhmiä niin muokkaan myös GCompriksen konfiguraatiota, että vaikeustaso alkaa 1 sijaan 2.

Täältä näkee tiedoston [gcompris.conf](https://github.com/Hamis95/SaltLuokkahuone/blob/main/saltluokka/gcompris.conf)

Tein myös vaihtoehtoiset moduulit [DNS](https://github.com/Hamis95/SaltLuokkahuone/tree/main/DNS) ja [Firefox](https://github.com/Hamis95/SaltLuokkahuone/tree/main/Firefox) asetuksille.

**HUOM. moduulin raportointi ja vaiheet on selostettu [Harjoitus 7](https://github.com/Hamis95/ConfigManagement/blob/main/H7.md)**
