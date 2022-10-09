"use strict";
import { config } from "dotenv";
import path from "path";
import axios from "axios";
import fs from "fs";

config({ path: path.resolve(".env") });

const GAS_URL = process.env.GAS_URL;
const GAS_PRODUCT = process.env.GAS_PRODUCT;

// @ts-ignore
async function getEventList(filePath) {
  try {
    const { data } = await axios.get(`https://${GAS_URL}/${GAS_PRODUCT}/exec`);
    const { Events } = data;
    console.log(Events)
    await fs.writeFileSync(filePath, JSON.stringify({ events: Events }, null, 2));
  } catch (err) {
    console.error(err);
  }
}

/**
 *
 * @type {[{filePath: string, callback: ((function(*): Promise<void>)|*)}]}
 */
const resourceServices = [{ filePath: "src/data/event-list.json", callback: getEventList }];

async function syncResources() {
  try {
    await Promise.all(
      resourceServices.map(async (service) => {
        // Remove old files
        console.log(`deleting ${service.filePath}`);
        if (fs.existsSync(service.filePath)) fs.unlinkSync(service.filePath);
        // Create new files
        console.log(`calling ${service.callback.name}`);
        // Return resolution from callback
        return await service.callback(service.filePath);
      })
    );
  } catch (err) {
    console.error(err);
  }
}

syncResources().then(() => process.exit(0));
