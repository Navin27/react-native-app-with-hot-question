// Utility Functions
const baseUrl = "https://api.stackexchange.com/2.3/questions?order=desc&sort=hot&site=stackoverflow"
const getApi = async (endpoint) => {
    console.log("`${baseUrl}${endpoint}`", `${baseUrl}${endpoint}`)
    const response = await fetch(`${baseUrl}${endpoint}`)
    return await response.json()
}
export {
    getApi 
}