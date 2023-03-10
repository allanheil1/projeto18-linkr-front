import { useNavigate } from "react-router-dom"


export default function List({item, setSearchResults, SetSearchQuery}) {
    const navigate = useNavigate();

    const redirectPage= (id)=>{
        navigate(`/user/${id}`)
        setSearchResults([])
        SetSearchQuery("")
    }

    return (
        <li data-test="user-search" onClick={()=>redirectPage(item.id)}>
            <div>
                <img src={item.photo} alt={item.name} />
            </div>
            <p>{item.name}</p>
        </li>
    )
}