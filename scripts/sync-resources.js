"use strict";
const fs = require("fs");
const axios = require("axios");
const { JSDOM } = require("jsdom");

const GAS_URL = process.env.GAS_URL;
const GAS_PRODUCT = process.env.GAS_PRODUCT;
const EVENT_LIST_API_URL = "https://" + GAS_URL + "/" + GAS_PRODUCT + "/exec";
const EVENT_LIST_FILEPATH = "services/web-app/src/data/event-list.json";

const SC_URL = process.env.SC_URL;
const SC_MIX = process.env.SC_MIX;
const PLAYLIST_TRACKS_API_URL = "https://" + SC_URL + "/" + SC_MIX;
const PLAYLIST_TRACKS_FILEPATH =
  "services/web-app/src/data/soundcloud-data.json";

// const SYNC = [EVENT_LIST_FILEPATH, PLAYLIST_TRACKS_FILEPATH];
const SYNC = [EVENT_LIST_FILEPATH];

async function getEventList() {
  try {
    const { data } = await axios.get(EVENT_LIST_API_URL);
    return data;
  } catch (err) {
    console.error(err);
  }
}

async function getPlaylistTracks() {
  try {
    const { data } = await axios.get(PLAYLIST_TRACKS_API_URL);
    const dom = new JSDOM(data);
    console.log(dom.window.document.querySelectorAll(".trackList__item"));
    return false;
  } catch (err) {
    console.error(err);
  }
}

async function syncResources() {
  // Remove Old file
  try {
    SYNC.forEach((filePath) => fs.unlinkSync(filePath));
  } catch (err) {
    console.error(err);
  }

  // Fetch Event list
  try {
    const { Events } = await getEventList();
    fs.writeFileSync(
      EVENT_LIST_FILEPATH,
      JSON.stringify({ events: Events }, null, 2)
    );
  } catch (err) {
    console.error(err);
  }

  try {
    const Tracks = await getPlaylistTracks();
    fs.writeFileSync(
      PLAYLIST_TRACKS_FILEPATH,
      JSON.stringify({ tracks: Tracks }, null, 2)
    );
  } catch (err) {
    console.error(err);
  }
}

syncResources().then(() => console.log("done"));
