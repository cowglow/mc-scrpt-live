"use strict";
import fs from "fs";
import axios from "axios";

async function getEventList(filePath) {
  const GAS_URL = process.env.GAS_URL;
  const GAS_PRODUCT = process.env.GAS_PRODUCT;
  const EVENT_LIST_API_URL = "https://" + GAS_URL + "/" + GAS_PRODUCT + "/exec";

  try {
    const { data } = await axios.get(EVENT_LIST_API_URL);
    const { Events } = data;
    fs.writeFileSync(filePath, JSON.stringify({ events: Events }, null, 2));
  } catch (err) {
    console.error(err);
  }
}
/*
async function getPlaylistTracks(filePath) {
  const SC_URL = process.env.SC_URL;
  const SC_PLAYLIST_ID = process.env.SC_PLAYLIST_ID;
  const PLAYLIST_TRACKS_API_URL =
    "https://" +
    SC_URL +
    "/playlists/" +
    SC_PLAYLIST_ID +
    "/tracks?access=playable&linked_partitioning=true";

  try {
    const { data } = await axios.get(PLAYLIST_TRACKS_API_URL);
    fs.writeFileSync(filePath, JSON.stringify({ tracks: data }, null, 2));
  } catch (err) {
    console.error(err);
  }
}
*/

const SYNC = [
  { filePath: "src/data/event-list.json", callback: getEventList },
  // { filePath: "src/data/soundcloud-data.json", callback: getPlaylistTracks },
];

async function syncResources() {
  try {
    SYNC.forEach(({ filePath, callback }) => {
      // Remove old files
      if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
      // Create new files
      callback(filePath);
    });
  } catch (err) {
    console.error(err);
  }
}

syncResources().then(() => console.log("done"));
