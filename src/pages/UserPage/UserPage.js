import Header from "../../components/Header/Header.js"
import * as S from "./styles.js"
import {AiOutlineSearch } from "react-icons/ai"

export default function UserPage() {
    return (
        <S.ConteinerUserPage>
            <Header />
            <S.SearcheStyle>
                <input type="text" placeholder="Search for people" />
                <span> <AiOutlineSearch color=" #C6C6C6" fontSize={20} /></span>
            </S.SearcheStyle>
            <S.ConteinerMain>
                <div>
                    <S.ProfileStyle>
                        <span>
                            <img src="image" alt="image profile" />
                        </span>
                        <h2>Juvenal Juvêncio’s posts</h2>
                    </S.ProfileStyle>
                </div>
            </S.ConteinerMain>

        </S.ConteinerUserPage>
    )
}

