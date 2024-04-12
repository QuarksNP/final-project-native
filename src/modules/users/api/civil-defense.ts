import { BASE_API_URL } from "@users/lib/base-api-url";

export const civilDefense = async (endpoint: string) => {
  try {
    const response = await fetch(`${BASE_API_URL}${endpoint}`);

    if (!response.ok) throw new Error();

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};
