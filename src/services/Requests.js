
// const urlOf = path => footballDataOrgApi + path

// const buildRequest = (path, payload, headers, method) => {
// 	let options;
// 	// const token = localStorage.getItem(tokenName)
// 	const url = urlOf(path)

// 	// headers['Content-Type'] = "application/json"
//     headers['X-Auth-Token'] = footballDataOrgApiKey
// 	// if (!("Authorization" in headers) && token) headers['Authorization'] = `Bearer ${token}`

// 	options = { headers }

// 	if (method === "POST") {
// 		options = {
// 			method,
// 			body: JSON.stringify(payload),
// 			headers: headers
// 		};
// 	}

// 	return { url, options }
// }


// const fetchResponse = async (path, payload, headers, method) => {
// 	const { url, options } = buildRequest(path, payload, headers, method)
// 	const response = await fetch(url, options)
// 	const statusCode = response.status
// 	const jsonResponse = statusCode === 204 ? {} : await response.json()
	
// 	return { statusCode, jsonResponse }
// }


const backend = "http://tfs-env.eba-j7cetwic.ap-south-1.elasticbeanstalk.com"
// const backend = "http://192.168.1.9:8009"

const Requests = async (path) => {
	const url = backend + "/make-a-request"
	const headers = {'Content-Type': "application/json"}
	const options = { method: "POST", body: JSON.stringify({ path }), headers}
	const response = await fetch(url, options)
	const statusCode = response.status
	const jsonResponse = await response.json()

	return { statusCode, jsonResponse }
}


const ScrapeRequest = async (url) => {
	const path = backend + "/scrape"
	const headers = {'Content-Type': "application/json"}
	const options = { method: "POST", body: JSON.stringify({ url }), headers}
	const response = await fetch(path, options)
	const statusCode = response.status
	const jsonResponse = await response.json()

	return { statusCode, jsonResponse }
}



const RealTimeRequests = async () => {
	const url = backend + "/fetch-real-time-news"
	const response = await fetch(url)
	const statusCode = response.status
	const jsonResponse = await response.json()
	
	return { statusCode, jsonResponse }
	// return { statusCode: 200, jsonResponse: data}
}


export { RealTimeRequests, ScrapeRequest };
export default Requests;
