# sedemo-web
simple express webdemo

to install:
- clone the repo
- npm install
- run: node app.js

to install as a service
- modify the ./sedemo-web/service/sedemo.service file according to your local server
- copy this file to /lib/systemd/system
- run: systemctl enable sedemo.service
