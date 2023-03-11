<template>

<section class="bg-white dark:bg-gray-900">
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Formula 1 Race Tracker</h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">This website lets you find out about the latest race results and historical race Data</p>
            <a href="#" class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                Get started
                <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
        </div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <div class="card w-96 bg-base-100 shadow-xl">
                <figure><img src="Flag_of_Saudi_Arabia.svg" alt="Race Flag" /></figure>
                <div class="card-body">
                    <h2 class="card-title">
                        {{raceName}}
                    <div class="badge badge-secondary">Next Race</div>
                    </h2>
                    <p>{{ raceDate }}</p>
                    <p>{{ country }}</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Buy Now</button>
                    </div>
                </div>
                </div>
            <!-- <img src="Flag_of_Saudi_Arabia.svg" alt="mockup"> -->
        </div>                
    </div>
</section>

</template>

<script setup>

const { raceName, raceDate, country } = defineProps(['raceName', 'raceDate', 'country'])

</script>

<style scoped>

</style>