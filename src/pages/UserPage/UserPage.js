import Header from '../../components/Header/Header.js';
import { useState, useEffect } from 'react';
import * as S from './styles.js';
import { AiOutlineSearch } from 'react-icons/ai';
import DebounceInput from 'react-debounce-input';
import axios from 'axios';
import Posts from '../../components/Posts/index.jsx';
import List from '../../components/Header/List.js';
import { useParams } from 'react-router-dom';
import Trending from '../../components/Trending/Trending.js';

export default function UserPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [infoUser, setInfoUser] = useState([]);
  const { id } = useParams();
  const token = localStorage.getItem('token');

  function handleSearch(event) {
    const searchTerm = event.target.value;

        if (searchTerm.length >= 3) {
            const authConfig = (token) => ({
                headers: { Authorization: `Bearer ${token}` }
              })
            axios.get(`http://localhost:5000/users`,authConfig(token)).then((response) => {
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

    useEffect(() => {
        try {
            const res = axios.get(`http://localhost:5000/user/${id}`);
            res.then((r) => {
                setInfoUser(r.data);
            }).catch((e) => {
                console.log(e.message);
            });
        } catch (error) {
            console.log(error.message);
        }
    }, [id]);
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
                <ul>
                    {searchResults.map((item) => <List item={item} setSearchResults={setSearchResults} SetSearchQuery={setSearchQuery} />)}
                </ul>
            </S.SearcheStyle>
            <S.ConteinerMain>
                <div>
                    <div>
                        <S.ProfileStyle>
                            <span>
                                <img src={infoUser.photo} alt={infoUser.name} />
                            </span>
                            <h2>jeff’s posts</h2>
                        </S.ProfileStyle>
                    </div>
                    {infoUser.map(p => <Posts id={p.id}
                        name={p.name}
                        photo={p.photo}
                        content={p.content}
                        url={p.url}
                        urlTitle={p.urlTitle}
                        urlDescription={p.urlDescription}
                        urlImage={p.urlImage}
                        setSearchResults={setSearchResults}
                        SetSearchQuery={setSearchQuery} />)}
                </div>
                <Trending />
            </S.ConteinerMain>
        </S.ConteinerUserPage>
    )
}
