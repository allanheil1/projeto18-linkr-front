import Header from "../../components/Header/Header"
import Posts from '../../components/Posts';
import { UserContext } from "../../contexts/UserContext";
import { useEffect, useContext, useState } from 'react';
import * as S from "./styles.js";
import Trending from "../../components/Trending/Trending";
import { useParams } from "react-router-dom";
import { hashtagPosts } from "../../service";

export default function TrendingPage(req) {
    const token = localStorage.getItem('token')
    const { hashtag } = useParams()
    const { checkLogin } = useContext(UserContext);
    const [hashtagPostsArray, setHashtagPostsArray] = useState([])

    useEffect(() => {
        checkLogin();
        const fetchHashtagPosts = async () => {
            try {
                const res = await hashtagPosts(hashtag, token)
                setHashtagPostsArray(res.data)
            } catch (err) {
                console.log(err)
                alert('An error occured while trying to fetch the hashtag posts, please refresh the page');
            }
        }
        fetchHashtagPosts()
    }, [hashtagPostsArray]);

    return (
        <S.Container>
            <Header></Header>
            <S.Content>
                <h1 data-test="hashtag-title">#{hashtag}</h1>
                {hashtagPostsArray.map((p, i) => <Posts
                    key={i}
                    id={p.id}
                    postId={p.postId}
                    name={p.name}
                    photo={p.photo}
                    content={p.content}
                    url={p.url}
                    urlTitle={p.urlTitle}
                    urlDescription={p.urlDescription}
                    urlImage={p.urlImage}
                />)}
            </S.Content>
            <Trending></Trending>
        </S.Container>
    )
}