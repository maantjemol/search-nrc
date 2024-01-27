import type { AudioGuidedRun, NRCData } from '$lib/nrc';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const count = 50;
	const runs: AudioGuidedRun[] = [];
	const options = { method: 'GET' };

	for (let anchor = 0; anchor < 350; anchor += 50) {
		const url = `https://api.nike.com/activityapps/audioguidedruns/v1?platform=android&marketplace=US&language=en-US&units=imperial&local_date=2024-01-27T12%3A48%3A54.158%2B01%3A00&fields=id%2Cproperties%2Clanding%2Cdetail&preview=false&count=${count}&anchor=${anchor}`;
		try {
			const response = await fetch(url, options);
			const data = (await response.json()) as NRCData;
			runs.push(...data.data.audioGuidedRuns);
		} catch (error) {
			console.error(error);
		}
	}

	return { runs: runs };
}
