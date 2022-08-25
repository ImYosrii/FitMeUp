const apiAuthorize = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c341cd4093msh0ea023804a02fa4p1986ecjsn5128c183a13f',
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
	}
}
const apiAuthorizeYoutube = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c341cd4093msh0ea023804a02fa4p1986ecjsn5128c183a13f',
		'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
	}
};
async function fetchData(url, options) {
    const response = await fetch(url, options)
    const data = await response.json();
    return data
}
export {apiAuthorize, apiAuthorizeYoutube, fetchData}
