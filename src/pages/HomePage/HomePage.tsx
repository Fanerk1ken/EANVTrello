import {HomeScreen} from "../../screens/HomeScreen";
import {useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

const HomePage = () => {
    const [params] = useSearchParams();

    const [data, setData] = useState()

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/todos/${randomIntFromInterval(1, 5)}`).then(response => {
            setTimeout(() => {
                setData(response.data.title)
            }, 500)
        })
    }, [])
    return (
        <>
            <h1>TITLE: {data}</h1>
            <h1>{params.get('search')}</h1>
            <HomeScreen />
        </>
    );
};

export default HomePage;


const randomIntFromInterval = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}