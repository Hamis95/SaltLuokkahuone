# SaltLuokkahuone

Tämän moduulin tarkoituksena on tehdä valmis template Ala-asteen linux koneelle.
Moduuli tekee firefoxista turvallisemman ja asentaa opetukselle tarvittavia ohjelmia koneelle käyttäen hyväksi Saltstackia.

Tähän moduuliin valitsin ohjelmat: **Firefox, GCompris, Tux Math, Tux Paint ja Scratch.**

Moduuli muokkaa Firefoxin asetuksia, jotta sen käyttö on turvallisempaa. Nämä asetukset löytyvät [syspref.js](https://github.com/Hamis95/SaltLuokkahuone/blob/main/saltluokka/syspref.js) tiedostosta.

Moduuli muokkaa myös minionin DNS palvelinta, jotta koulu voi asettaa haluamansa DNS-palvelimen sivujen blokkausta ja tietoturvaa varten.
