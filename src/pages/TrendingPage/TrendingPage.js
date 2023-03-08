import Header from "../../components/Header/Header"
import Posts from '../../components/Posts';
import * as S from "./styles.js";
import Trending from "../../components/Trending/Trending";

export default function TrendingPage() {
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