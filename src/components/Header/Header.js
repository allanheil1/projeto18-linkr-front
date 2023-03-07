import { AiOutlineDown, AiOutlineSearch } from "react-icons/ai"
import * as S from "./styles.js"

export default function Header() {
    return (
        <S.ConteinerHeader>
            <h1>Linkr</h1>
            <S.SearcheStyle>
                <input type="text" placeholder="Search for people" />
                <span> <AiOutlineSearch color=" #C6C6C6" fontSize={24} /></span>
            </S.SearcheStyle>

            <S.ImageStyle>
                <AiOutlineDown color="#fff" fontSize={24} />
                <span>
                    <img src="profile" alt="image profile" />
                </span>
            </S.ImageStyle>
        </S.ConteinerHeader>
    )
}


