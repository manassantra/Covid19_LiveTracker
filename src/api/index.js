import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async () => {
    try {
        /* const response = await axios.get(url);
        return response; */
        const { data: { confirmed , recovered , deaths , lastUpdate, }} = await axios.get(url);
        return { confirmed , recovered , deaths , lastUpdate };
    } catch (error) {

    }
}

const url2 = 'https://covid19.mathdro.id/api/daily'

export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(url2);

        const modifiedData = data.map((dailyData)=>({
            confirmed : dailyData.confirmed.total,
            deaths : dailyData.deaths.total,
            date: dailyData.reportDate,
        }));

        return modifiedData;
    } catch (error) {
        
    }
}