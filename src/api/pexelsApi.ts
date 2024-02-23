import axios, { AxiosResponse } from "axios";
import { PEXELS_BASE_URL, PEXELS_KEY } from "@env";

export const fetchDestinationCardBg = async (searchParam: string) => {
	const url = `${PEXELS_BASE_URL}/search?query=${searchParam}&orientation=landscape&per_page=20`;
	const options = { headers: { Authorization: PEXELS_KEY } };

	try {
		const response: AxiosResponse = await axios.get(url, options);
		return response.data;
	} catch (err) {
		console.log(err);
	}
};
