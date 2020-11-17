const RateLimiter = require('limiter').RateLimiter;
const limiter = new RateLimiter(10, 'hour');
const notify = require('./alert.js');

const sendAlert = (msg) => {
  limiter.removeTokens(1, (err, remaining) => {
    if(err) console.log('err', err);
    msg.remaining = Math.floor(remaining);
    notify(msg);
  });
}

module.exports = sendAlert;