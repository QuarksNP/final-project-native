const BASE_URL = "https://maps.googleapis.com/maps/api/geocode/json?";

export async function geocode(lat: number, log: number) {
  try {
    const response = await fetch(
      `${BASE_URL}latlng=${lat},${log}&key=${process.env.EXPO_PUBLIC_MAPS_API_KEY}`
    );

    const json = await response.json();

    if (json.results[0]) {
      const adressComponent = json.results[0].address_components;
      const countryComponent = adressComponent.find(
        (component: { types: string | string[] }) =>
          component.types.includes("country")
      );

      return countryComponent;
    }
  } catch (error) {
    console.log(error)
  }
}
