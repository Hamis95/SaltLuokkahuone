/etc/resolv.conf:
  file.managed:
    - source: salt://saltluokka/resolv.conf
    - user: root
    - group: root
    - mode: 644
    - template: jinja
