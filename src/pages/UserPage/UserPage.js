import Header from "../../components/Header/Header.js"
import { useState } from "react"
import * as S from "./styles.js"
import {AiOutlineSearch } from "react-icons/ai"
import DebounceInput from 'react-debounce-input';
import axios from "axios"
import Posts from "../../components/Posts/index.jsx";

export default function UserPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    console.log(searchQuery)
    function handleSearch(event) {
    const searchTerm = event.target.value;

    if (searchTerm.length >= 3) {
      axios.get(`localhost:5000/users?name=${searchTerm}`).then((response) => {
        setSearchResults(response.data);
      });
    } else {
      setSearchResults([]);
    }

    setSearchQuery(searchTerm);
  }

    return (
        <S.ConteinerUserPage>
            <Header />
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
            <Posts/>
            <Posts/>
        </S.ConteinerUserPage>
    )
}

