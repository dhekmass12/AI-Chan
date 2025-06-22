import { GoogleGenAI } from "@google/genai";


export default async function explainCode(code, order){
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

    const prompt = `Explain the following code: ${code}. Provide a detailed explanation of its functionality, purpose, and any important aspects to consider.`;

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