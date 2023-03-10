export default defineEventHandler( async (event) => {


    // // handle query params

    // const { name } = getQuery(event)


    // //handle post data
    // const { age } = await readBody(event)


    const data = await $fetch('http://ergast.com/api/f1/current/last/results.json')

    console.log(data.MRData.RaceTable.Races[0].raceName)


    return {
       data
    }
})