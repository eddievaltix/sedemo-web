# sedemo-web
simple express webdemo
starts a simple webapp on port 3000

for deployment in aws:
- deploy amazon linux 2 instance and use userdata.sh as user data script

for deployment with docker:
- docker run -p 3000:3000 --restart=always -d eddievaltix/sedemo-web

for deployment on any os platform supporting nodejs:
- yum install git
- clone the repo
- install nodejs
- npm install
- run: node app.js

