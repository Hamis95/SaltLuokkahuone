ohjelmat:
  pkg.installed:
    - pkgs:
      - firefox
      - gcompris
      - tuxmath
      - tuxpaint
      - scratch


/etc/firefox/syspref.js:
  file.managed:
    - source: salt://saltluokka/syspref.js
    - mode: 755
