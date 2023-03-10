import { useEffect, useState } from "react";
import { StyleTrending } from "./styles";
import axios from "axios";

export default function Trending() {
    const [ trending, setTrending ] = useState([])
    useEffect(() => {
        const fetchTrendings = async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_API_URL}/trending`)
                setTrending(res.data)
            } catch (err) {
                console.log(err)
                alert('An error occured while trying to fetch the trendings, please refresh the page');
            }
        }
        fetchTrendings()
    }, [setTrending])
    return (
        <StyleTrending>
            <h1>trending</h1>
            <div></div>
            {trending.map(t => (<h2>#{t.name}</h2>))}
        </StyleTrending>
    )
}