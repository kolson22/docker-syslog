const SyslogServer = require("syslog-server");
const server = new SyslogServer();
const sendAlert = require('./helpers/limit.js');

const alerts = [
  'hello'
]

server.on("message", (message) => {
  console.log(message);
  message.message.split(' ').forEach((word) => {
    if(alerts.indexOf(word) !== -1){
      sendAlert(message);
    }
  });
});

server.start();