import { getStrapiURL } from "./apiHelpers"

export async function fetchAPI(path: string, urlParamsObject = {}, options = {}) {
    try {
        // Build request URL
        const queryString = new URLSearchParams(urlParamsObject).toString()
        const requestUrl = `${getStrapiURL(`/api${path}`)}${queryString ? `${queryString}` : ''}`
        // Trigger API call
        const response = await fetch(requestUrl, {
            headers: {
                'Content-Type': 'application/json'
            },
            ...options,
        })
        console.log(requestUrl)

        if (!response.ok) {throw new Error(`Erro na requisição: ${response.statusText}`)}

        const data = await response.json()
        return data

    } catch (error) {
        console.log(error)
        throw new Error('Verifique se o servidor está em execução e se todos os tokens necessários estão definidos.')
    }
}