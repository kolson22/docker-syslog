const SyslogServer = require("syslog-server");
const server = new SyslogServer();
const sendAlert = require('./helpers/limit.js');

const alerts = [
  'hello'
]

const regex = /^<[0-9]+>/g;

server.on("message", (message) => {
  message.message = message.message.replace(regex, '');
  console.log(message);
  message.message.split(' ').forEach((word) => {
    if(alerts.indexOf(word) !== -1){
      sendAlert(message);
    }
  });
});

server.start();