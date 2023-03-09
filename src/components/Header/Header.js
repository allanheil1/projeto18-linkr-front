import { useEffect, useState } from "react"
import { AiOutlineDown, AiOutlineSearch, AiOutlineUp } from "react-icons/ai"
import DebounceInput from 'react-debounce-input';
import axios from "axios"
import * as S from "./styles.js"
import List from "./List.js";

 
export default function Header() {
    const [open, setOpen] = useState(false)
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    
    console.log(filteredUsers)
    console.log(searchQuery)
    function handleSearch(event) {
        const searchTerm = event.target.value;
    
        if (searchTerm.length >= 3) {
            axios.get(`http://localhost:5000/users`).then((response) => {
                const filteredUsers = response.data.filter(user =>
                    user.name.toLowerCase().includes(searchTerm.toLowerCase())
                );
                setFilteredUsers(filteredUsers);
            });
        } else {
            setFilteredUsers([]);
        }
    
        setSearchQuery(searchTerm);
    }

    useEffect(() => {
        setSearchResults(filteredUsers);
    }, [filteredUsers]);
    
    
    return (
        <S.ConteinerHeader>
            <h1>Linkr</h1>
            <S.SearcheStyle>
                <DebounceInput
                    minLength={3}
                    debounceTimeout={300}
                    type="text"
                    placeholder="Search for people"
                    onChange={handleSearch}
                    value={searchQuery}
                />
                <span> <AiOutlineSearch color=" #C6C6C6" fontSize={24} /></span>
                <ul>
                    {searchResults.map((item)=> <List item={item}/>)}
                </ul>
            </S.SearcheStyle>
            <S.ImageStyle>
                {open ? <AiOutlineUp color="#fff" fontSize={24} onClick={() => setOpen(false)} /> : <AiOutlineDown color="#fff" fontSize={24} onClick={() => setOpen(true)} />}
                <span>
                    <img src="profile" alt="image profile" />
                </span>
                {open ? <div>Logout</div> : ""}
            </S.ImageStyle>
        </S.ConteinerHeader>
    )
}


