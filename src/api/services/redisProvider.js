import redisClient from 'redis';
const { redis } = require('../../config/vars');

const client = redisClient.createClient(redis);//'redis://redis:6379');
client.on('connect', () => {
  console.log('Connected to Redis.');
})

client.on('error', console.log);

export function set(key, value) {
  return client.set(key, value);
}

export function get(key) {
  return new Promise((resolve, reject) => {
    client.get(key, (err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
}