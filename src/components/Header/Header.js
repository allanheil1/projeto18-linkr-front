import { useState } from "react"
import { AiOutlineDown, AiOutlineSearch, AiOutlineUp } from "react-icons/ai"
import * as S from "./styles.js"

export default function Header() {
    const [open, setOpen] = useState(false)
    return (
        <S.ConteinerHeader>
            <h1>Linkr</h1>
            <S.SearcheStyle>
                <input type="text" placeholder="Search for people" />
                <span> <AiOutlineSearch color=" #C6C6C6" fontSize={24} /></span>
            </S.SearcheStyle>

            <S.ImageStyle>
                {open? <AiOutlineUp color="#fff" fontSize={24} onClick={()=>setOpen(false)}/> : <AiOutlineDown color="#fff" fontSize={24} onClick={()=>setOpen(true)} /> }
                <span>
                    <img src="profile" alt="image profile" />
                </span>
                {open? <div>Logout</div> : "" }
            </S.ImageStyle>
        </S.ConteinerHeader>
    )
}


