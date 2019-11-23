export const getApiUri = () => {
  const GAS_URL = 'script.google.com/macros/s'
  const GAS_PRODUCT =
    "AKfycbwDp2Qaqwuwkit2eIAgpCpi-oCVvVP3Y3CLdqgY4vpEtj2rWgwK";

  return document.domain === "localhost"
    ? "fixture/dev_events-fixture.json"
    : "https://" + GAS_URL + "/" + GAS_PRODUCT + "/exec";
};
