const apiAuthorize = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'bc28660b12msha1a3f69b7b55714p107cdbjsn7bb4bdc3d6fd',
		'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
	},
	limit:0
}
const apiAuthorizeYoutube = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '705a1aaf04msh4583e50054c07acp105f04jsnca251d7b7929',
		'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
	}
};
async function fetchData(url, options) {
    const response = await fetch(url, options)
    const data = await response.json();
    return data
}
export {apiAuthorize, apiAuthorizeYoutube, fetchData}
