import { api, config } from "../index";

export const searchApi = api.injectEndpoints({
	endpoints: (build) => ({
		searchDestination: build.query({
			query: (searchStr) => ({
				url: `/api/search?dest=${searchStr}`,
				headers: config.headers,
			}),
		}),
	}),
});

export const { useSearchDestinationQuery } = searchApi;
