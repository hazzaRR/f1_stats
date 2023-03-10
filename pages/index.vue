<template>
    <div>
        <h1>Hey guys</h1>
        <h2>{{last_race}}</h2>
        <!-- <Hero :raceName="raceName" :raceDate="raceDate" :country="country" /> -->
    </div>
</template>

<script setup>

const { data: last_race } = await useFetch('http://ergast.com/api/f1/current/last/results.json')
// const {season_calendar} = await useFetch('api/season_calender')


// console.log(data)

</script>

<style scoped>

</style>