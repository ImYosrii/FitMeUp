const apiAuthorize = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9622861093msh398bf11fe4ca399p11812ejsnfff9a3a80a82',
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
	}
}
const apiAuthorizeYoutube = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9622861093msh398bf11fe4ca399p11812ejsnfff9a3a80a82',
		'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
	}
};
async function fetchData(url, options) {
    const response = await fetch(url, options)
    const data = await response.json();
    return data
}
export {apiAuthorize, apiAuthorizeYoutube, fetchData}
