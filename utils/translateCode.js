import { GoogleGenAI } from "@google/genai";


export default async function translateCode(sourceLang, destLang, code, order){
    // let destText = "";

    // await axios.get(`https://submit-prompt-836479433669.asia-southeast2.run.app?prompt=ANJING`)
    //     .then((res) => {
    //         destText = res.data;
    //         console.log(destText);
    //     })
    //     .catch((e) => {
    //         this.errors.push(e);
    //         console.error(e);
    //     });

    // return {
    //     destText: destText,
    //     order: order
    // }

    const prompt = `Translate the following code from ${sourceLang["value"]} to ${destLang["value"]}: ${code}. Ensure that the translated code is syntactically correct and maintains the original functionality.`;

    const ai = new GoogleGenAI({ apiKey: "AIzaSyDfskonvBsaUJsBpwZsChoRU1TnTKVrn3s" });

    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
    })

    return {
        destText: response.text,
        order: order
    }
}