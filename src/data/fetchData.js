const apiAuthorize = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4344a6e8a8mshee7e2dccc3f3721p154794jsn7d775e829ab1',
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
	}
}
const apiAuthorizeYoutube = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4344a6e8a8mshee7e2dccc3f3721p154794jsn7d775e829ab1',
		'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
	}
};
async function fetchData(url, options) {
    const response = await fetch(url, options)
    const data = await response.json();
    return data
}
export {apiAuthorize, apiAuthorizeYoutube, fetchData}
