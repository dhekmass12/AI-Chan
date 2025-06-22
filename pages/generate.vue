<script>
    // Use a static import for server-side compatibility
    import '~/assets/css/app.css'
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
    import { faArrowRightArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowRightArrowLeft'
    import { faFile } from '@fortawesome/free-regular-svg-icons/faFile'
</script>

<template>
    <div>
        <div class="w-4/5 space-y-12 m-auto">
            <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div class="sm:col-span-3 col-span-full">
                    <label for="source-lang" class="block text-sm font-medium leading-6 text-gray-900">
                        Language: <Dropdown :set-lang="setSourceLang" :selected="sourceLang" :value-objs="sourceLangConstants" class="mr-1"/>
                        <!-- <button class="inline-flex justify-center align-middle gap-x-1.5 bg-white px-2 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50">
                            <input type="file" class="hidden">
                            <FontAwesomeIcon :icon="faFile" class="size-[1.125rem]" />
                        </button> -->
                        <!-- <button
                            class="inline-flex justify-center align-middle gap-x-1.5 bg-white px-2 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50"
                            @click="switchLang()"
                        >
                            <FontAwesomeIcon :icon="faArrowRightArrowLeft" class="size-[1.125rem]"/>
                        </button> -->
                    </label>
                    <div class="mt-2">
                        <div class="mt-6 mb-6">
                            <label for="prompt" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Prompt</label>
                            <input 
                                :value="text"
                                @input="event => prompt = event.target.value"
                                placeholder="Calculate the total cost of items in a shopping cart" type="text" id="prompt" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        </div>

                        <div class="mt-6 mb-6">
                            <label for="steps" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Describe the steps</label>
                            <input 
                                :value="text"
                                @input="event => steps = event.target.value"
                                placeholder="Add up the cost of all items in the cart and return the final cost" type="text" id="steps" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        </div>

                        <div class="mt-6 mb-6">
                            <label for="example" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Example</label>
                            <input 
                                :value="text"
                                @input="event => example = event.target.value"
                                placeholder="If the items cost $100, $50, and $25, the output should be $175" type="text" id="example" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        </div>
                    </div>
                </div>

                <div class="sm:col-span-3 col-span-full">
                    <label for="dest-lang" class="block text-sm font-medium leading-6 text-gray-900">Generated Code</label>
                    <div class="mt-2">
                        <textarea disabled id="dest-lang" name="dest-lang" rows="3" 
                            :value="destText"
                            class="block w-full rounded-md border-0 p-5 py-4 text-xl text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400"
                        >
                        </textarea>
                    </div>
                </div>
            </div>
        </div>

        <div class="flex items-center">
                <button
                    class="mt-5 px-4 py-2 bg-blue-600 text-white rounded mx-auto"
                    @click="handleSubmit"
                >
                    Submit
                </button>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue'

    // console.log(process.env.REPLICATE_API_TOKEN)

    const sourceLang = ref(sourceLangConstants[0])
    const prompt = ref("")
    const steps = ref("")
    const example = ref("")
    const destText = ref("")
    const order = ref(0)
    const lastOrder = ref(0)

    function setSourceLang(lang) {
        sourceLang.value = lang
    }

    function handleSubmit() {

        generateCode(sourceLang.value, prompt.value, steps.value, example.value, order.value).then(result => {
            const order = result.order
            const newText = result.destText

            // if (order > lastOrder.value){
            lastOrder.value = order
            destText.value = newText
            // }
        })
    }
</script>
