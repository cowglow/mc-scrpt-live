import fixtureData from "src/fixture/dev_events-fixture.json";
const DEV_MODE = import.meta.env.DEV_MODE || false;
const url = import.meta.env.GAS_URL || "script.google.com/macros/s";
const product =
  import.meta.env.GAS_PRODUCT ||
  "AKfycbwDp2Qaqwuwkit2eIAgpCpi-oCVvVP3Y3CLdqgY4vpEtj2rWgwK";

export async function get() {
  // @ts-ignore
  const API_URL = "https://" + url + "/" + product + "/exec";
  if (DEV_MODE) {
    return {
      body: fixtureData,
    };
  } else {
    try {
      const response = await fetch(API_URL);
      const events = response.json();
      return {
        body: events,
      };
    } catch (error) {
      return {
        body: error,
      };
    }
  }
}
