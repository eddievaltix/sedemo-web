# sedemo-web
simple express webdemo
starts a simple webapp on port 3000

easy way:
docker run -p 3000:3000 --restart=always -d eddievaltix/sedemo-web

hard way:
- yum install git
- clone the repo
- install nodejs
- npm install
- run: node app.js

to install as a service
- modify the ./sedemo-web/service/sedemo.service file according to your local server
- copy this file to /lib/systemd/system
- run: systemctl enable sedemo.service


