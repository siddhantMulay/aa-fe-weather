import ENDPOINT from "./constants";

/**
 * Generic API call
 * @param location inputs coordinates of a city
 * @returns resolved promise of data
 */
const API = async (location: string) => {
  const URL = ENDPOINT.replace("%LOCATION%", location);

  const options = {
    method: "GET",
    headers: { accept: "application/json" }
  };

  try {
    const response = await fetch(URL, options);
    if (!response.ok) {
      throw Error(response.statusText);
    }
    const data = response.json();
    return Promise.resolve(data);
  } catch (error) {
    console.log(error);
  }
};

export default API;
