#!/usr/bin/env node
const ks = require('node-key-sender');
const argv = require('./argv');

const keys = argv.keys?.split(',') ?? ['w', 's', 'a', 'd', 'space'];
const baseTime = argv.base ?? 180;
const maxRandTime = argv.randTime ?? 60;

if (isNaN(baseTime) || isNaN(maxRandTime)) {
  throw new Error('podaj liczbe cymbale');
}
const pressRandomKey = () => {
  const time = (Math.floor(Math.random() * maxRandTime) + baseTime) * 1000;
  const randomKey = keys[Math.floor(Math.random() * keys.length)];
  setTimeout(() => {
    ks.sendKey(randomKey);
    pressRandomKey();
  }, time);
};
pressRandomKey();
