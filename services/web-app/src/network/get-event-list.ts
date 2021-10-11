export const getEventList = async () => {
  const url = import.meta.env.GAS_URL || "script.google.com/macros/s";
  const product =
    import.meta.env.GAS_PRODUCT ||
    "AKfycbwDp2Qaqwuwkit2eIAgpCpi-oCVvVP3Y3CLdqgY4vpEtj2rWgwK";

  const API_URL = "https://" + url + "/" + product + "/exec";
  try {
    const response = await fetch(API_URL);
    return response.json();
  } catch (error) {
    console.warn(error);
  }
};
