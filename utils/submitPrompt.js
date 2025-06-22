import { useFetch } from "nuxt/app";

export default async function submitPrompt(prompt, order) {
    const token = process.env.REPLICATE_API_TOKEN
    try {
        const response = await $fetch('https://api.replicate.com/v1/predictions', {
            method: 'POST',
            headers: {
                Authorization: `Token ${token}`,
                    'Content-Type': 'application/json'
                },
                body: {
                    version: 'ibm-granite/granite-3.3-8b-instruct', // or your model version
                    input: {
                        prompt: prompt
                    }
                }
        })

        return {
            destText: response.output?.join('') || '',
            order: order
        }
    } catch (e) {
        console.error(e)
    }
}