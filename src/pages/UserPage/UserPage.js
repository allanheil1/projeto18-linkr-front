import Header from '../../components/Header/Header.jsx';
import { useState, useEffect } from 'react';
import * as S from './styles.js';
import { AiOutlineSearch } from 'react-icons/ai';
import DebounceInput from 'react-debounce-input';
import axios from 'axios';
import Posts from '../../components/Posts/index.jsx';
import List from '../../components/Header/List.jsx';
import { useParams } from 'react-router-dom';
import Trending from '../../components/Trending/Trending.js';
import Modal from '../../components/Modal/Modal.jsx';
import { followUser, searchUsers, unfollowUser } from '../../service/index.js';

export default function UserPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [infoUser, setInfoUser] = useState([]);
    const [follow, setFollow] = useState(false)
    const [isDisabled, setIsDisabled] = useState(false)
    const { id } = useParams();
    const token = localStorage.getItem('token');
    const url = process.env.REACT_APP_API_URL

    async function handleSearch(event) {
        const searchTerm = event.target.value;

        if (searchTerm.length >= 3) {
            try{
                const users = searchUsers({token})
                const filteredUsers = users.rows.filter(user =>
                    user.name.toLowerCase().includes(searchTerm.toLowerCase())
                );
                setFilteredUsers(filteredUsers);
            }catch(e){
                alert(e.message)
            }
        } else {
            setFilteredUsers([]);
        }

        setSearchQuery(searchTerm);
    }

    async function followClick() {
        try {
            if (!follow) {
                setIsDisabled(true)
                await followUser({ token, id })
                setFollow(true)
            } else {
                setIsDisabled(true)
                await unfollowUser({ token, id })
                setFollow(false)
            }
            setIsDisabled(false)
        } catch (err) {
            alert(err.message);
        }
    }

    useEffect(() => {
        setSearchResults(filteredUsers);
    }, [filteredUsers]);

    useEffect(() => {
        try {
            const authConfig = (token) => ({
                headers: { Authorization: `Bearer ${token}` }

            });
            const res = axios.get(`${url}/follows/${id}`, authConfig(token));
            res.then((r) => {
                setFollow(r.data);
            }).catch((e) => {
                console.log(e.message);
            });
        } catch (error) {
            console.log(error.message);
        }
    }, [follow])

    useEffect(() => {
        try {
            const authConfig = (token) => ({
                headers: { Authorization: `Bearer ${token}` }

            });
            const res = axios.get(`${url}/user/${id}`, authConfig(token));
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
                    {searchResults.map((item) => <List item={item} setSearchResults={setSearchResults} SetSearchQuery={setSearchQuery} />)}
                </ul>
            </S.SearcheStyle>
            <S.ConteinerMain>
                <div>
                    <div>
                        <S.ProfileStyle follow={follow}>
                            <span>
                                <img src={infoUser.photo} alt={infoUser.name} />
                            </span>
                            <h2>{infoUser[0]?.name}</h2>
                            {follow !== "same" && <button onClick={followClick} disabled={false}data-test="follow-btn">{follow ? 'Unfollow' : 'Follow'}</button>}
                        </S.ProfileStyle>
                    </div>
                    {infoUser.map(p => <Posts id={p.id}
                        name={p.name}
                        photo={p.photo}
                        postId={p.postId}
                        content={p.content}
                        commentCount={p.commentCount}
                        repostCount={p.repostCount}
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
