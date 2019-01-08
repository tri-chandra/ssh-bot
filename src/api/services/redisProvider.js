import redis from 'redis';

const client = redis.createClient();

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