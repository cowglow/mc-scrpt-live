"use strict";
const axios = require("axios");
const dotenv = require("dotenv");
const path = require("path");
const fs = require("fs");

dotenv.config();

const filePath = "services/web-app/src/data/event-list.json";

path.exists(filePath, (exists) => {
  if (exists) fs.unlinkSync(filePath);
});

const getEventList = async () => {
  const url = process.env.GAS_URL;
  const product = process.env.GAS_PRODUCT;
  const API_URL = "https://" + url + "/" + product + "/exec";
  try {
    const data = await axios.get(API_URL);
    return JSON.stringify(data, null, 2);
  } catch (error) {
    console.warn(error);
  }
};

console.log("DEV_MODE", process.env.DEV_MODE);
console.log("GAS_URL", process.env.GAS_URL);
console.log("GAS_PRODUCT", process.env.GAS_PRODUCT);

const init = async () => {
  try {
    const { Events } = await getEventList();
    fs.writeFileSync(filePath, Events);
  } catch (e) {
    console.warn(e);
  }
};

init().then(() => console.log("success"));
