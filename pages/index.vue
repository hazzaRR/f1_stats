<template>
    <div class="bg-gray-800">
        <!-- <h2>{{last_race}}</h2> -->
        <!-- <Hero :raceName="raceName" :raceDate="raceDate" :country="country" /> -->
        <Hero class="mb-6 z-0"/>
        <!-- <h2>{{last_race.MRData}}</h2> -->
        <div class="flex flex-col w-full lg:flex-row">
            <div class="grid flex-grow card bg-base-300 rounded-box place-items-center">
                <Card />
            </div> 
            <div class="divider lg:divider-horizontal"></div> 
            <div class="grid flex-grow card bg-base-300 rounded-box place-items-center">
                <Card />
            </div>
        </div>

        <p class="text-white">{{ lastRaceName }}</p>
        <p class="text-white">{{ lastRaceDate }}</p>
        <p class="text-white">{{ lastRaceTime }}</p>
        <p class="text-white">{{ lastRaceLocation }}</p>
    </div>
</template>

<script setup>

    const { data: last_race } = await useFetch('http://ergast.com/api/f1/current/last/results.json')


    // console.log(last_race.value.MRData.RaceTable.Races[0].raceName)
    const lastRaceName = ref(last_race.value.MRData.RaceTable.Races[0].raceName)
    const lastRaceDate = ref(last_race.value.MRData.RaceTable.Races[0].date)
    const lastRaceTime = ref(last_race.value.MRData.RaceTable.Races[0].time)
    const lastRaceLocation = ref(last_race.value.MRData.RaceTable.Races[0].Circuit.Location.country)

    // const lastRaceFlag = await useFetch('https://countryflagsapi.com/png/'+ lastRaceLocation.value)


// const {season_calendar} = await useFetch('api/season_calender')

</script>

<style scoped>

</style>