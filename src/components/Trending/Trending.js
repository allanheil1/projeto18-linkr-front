import { useEffect, useState } from "react";
import { StyleMargin, StyleTrending, trendingStyle } from "./styles";
import { trendingHashtags } from "../../service";
import { Link } from "react-router-dom";

export default function Trending({refresh}) {
    const [trending, setTrending] = useState([])
    const token = localStorage.getItem('token')
    useEffect(() => {
        const fetchTrendings = async () => {
            try {
                const res = await trendingHashtags(token)
                setTrending(res.data)
            } catch (err) {
                console.log(err)
                alert('An error occured while trying to fetch the trendings, please refresh the page');
            }
        }
        fetchTrendings()
    }, [setTrending, refresh])
    return (
        <StyleTrending data-test="trending">
                <h1>trending</h1>
                <div></div>
                {trending.map(t => (<h3>
                    <Link to={`/hashtag/${t.name}`} style={trendingStyle}>
                        <h2 data-test="hashtag">#{t.name}</h2>
                    </Link>
                </h3>
                ))}
        </StyleTrending>
    )
}