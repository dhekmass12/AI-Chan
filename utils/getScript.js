import { useFetch } from "nuxt/app";

export default async function getScript(sourceLang, destLang, string, order){
    if (sourceLang.value === destLang.value){
        const destText = await useFetch(`/api/sameScripts`,
            {
                method: "POST",
                params: {
                    sourceText: string
                }
            }
        )

        return {
            destText: destText,
            order: order
        }
    }
    else if (sourceLang.value === "java"){
        if (destLang.value === "latin"){
            return {
                destText: string,
                order: order
            }
        }
    }
    else if (sourceLang.value === "latin"){
        if (destLang.value === "java"){
            const java = await useFetch(`/api/latinToJava`,
                {
                    method: "POST",
                    params: {
                        latin: string
                    }
                }
            )

            return {
                destText: java,
                order: order
            }
        }
    }
}