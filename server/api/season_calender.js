export default defineEventHandler( async (event) => {


    // // handle query params

    // const { name } = getQuery(event)


    // //handle post data
    // const { age } = await readBody(event)


    const season_calendar = await $fetch('http://ergast.com/api/f1/current.json')

    console.log(season_calendar.MRData.RaceTable.Races[1].raceName)


    return {
        season_calendar
    }
})