<script>
    // Use a static import for server-side compatibility
    import '~/assets/css/app.css'
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
    import { faArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowLeft'
</script>

<script setup>
    import { clearError } from 'nuxt/app';

    const props = defineProps({
        error: Object
    })

    const handleError = () => clearError({ redirect: '/' })
</script>

<template>
    <Navbar />
    <section class="jumbotron text-center custom-homepage">
        <span style="top:75px; font-size:2em; font-weight: bold">{{ error?.statusCode }}</span><span class="custom-h1"> Error</span>
        <div>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold my-4 py-2 px-4 rounded" @click="handleError">
                <FontAwesomeIcon :icon="faArrowLeft" class="size-[1.125rem]" /> Kembali
            </button>
        </div>
    </section>
</template>
