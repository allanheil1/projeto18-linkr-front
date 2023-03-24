import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { AiOutlineDown, AiOutlineSearch, AiOutlineUp } from "react-icons/ai"
import DebounceInput from 'react-debounce-input';
import axios from "axios"
import * as S from "./styles.js"
import List from "./List.jsx";

 
export default function Header() {
    const [open, setOpen] = useState(false)
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const photo = localStorage.getItem('photo');
    const navigate = useNavigate();
    const url = process.env.REACT_APP_API_URL
    
    function handleSearch(event) {
        const searchTerm = event.target.value;
    
        if (searchTerm.length >= 3) {
            axios.get(`${url}/users`).then((response) => {
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
    
    function clickLogout(){
        localStorage.removeItem('token');
        localStorage.removeItem('photo');
        navigate("/");
    }
    
    return (
        <S.ConteinerHeader>
            <h1>Linkr</h1>
            <S.SearcheStyle>
                <DebounceInput
                    data-test="search"
                    minLength={3}
                    debounceTimeout={300}
                    type="text"
                    placeholder="Search for people"
                    onChange={handleSearch}
                    value={searchQuery}
                />
                <span> <AiOutlineSearch color=" #C6C6C6" fontSize={24} /></span>
                <ul>
                    {searchResults.map((item)=> <List item={item} setSearchResults={setSearchResults} SetSearchQuery={setSearchQuery}/>)}
                </ul>
            </S.SearcheStyle>
            <S.ImageStyle>
                {open ? <AiOutlineUp color="#fff" fontSize={24} onClick={() => setOpen(false)} /> : <AiOutlineDown color="#fff" fontSize={24} onClick={() => setOpen(true)} />}
                <span>
                    <img src={photo} alt="image profile" />
                </span>
                {open ? <button onClick={() => clickLogout()}>Logout</button> : ""}
            </S.ImageStyle>
        </S.ConteinerHeader>
    )
}


