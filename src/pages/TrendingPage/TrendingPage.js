import Header from "../../components/Header/Header"
import Posts from '../../components/Posts';
import { UserContext } from "../../contexts/UserContext";
import { useEffect, useContext } from 'react';
import * as S from "./styles.js";
import Trending from "../../components/Trending/Trending";

export default function TrendingPage() {

    const { checkLogin } = useContext(UserContext);

      useEffect(() => {
          checkLogin();
      }, []);

    return (
        <S.Container>
            <Header></Header>
            <S.Content>
                <h1>#hashtag</h1>
                <Posts />
                <Posts />
            </S.Content>
        <Trending></Trending>
        </S.Container>
    )
}