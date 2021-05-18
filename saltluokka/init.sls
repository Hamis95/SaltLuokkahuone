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


/etc/resolv.conf:
  file.managed:
    - source: salt://saltluokka/resolv.conf
    - user: root
    - group: root
    - mode: 644
    - template: jinja

/etc/gcompris.conf:
  file.managed:
    - source: salt://saltluokka/gcompris.conf
    - mode: 755
