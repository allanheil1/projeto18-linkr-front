import { useNavigate } from "react-router-dom"


export default function List({id, name, photo}) {
    const navigate = useNavigate();
    const redirectPage= (id)=>{
        navigate(`/user/${id}`)
    }
    return (
        <li onClick={()=>redirectPage(id)}>
            <div>
                <img src={photo} alt={name} />
            </div>
            <p>{name}</p>
        </li>
    )
}