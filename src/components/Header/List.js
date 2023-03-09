import { useNavigate } from "react-router-dom"


export default function List({item}) {
    const navigate = useNavigate();

    const redirectPage= (id)=>{
        navigate(`/user/${id}`)
        console.log(id)
    }

    return (
        <li onClick={()=>redirectPage(item.id)}>
            <div>
                <img src={item.photo} alt={item.name} />
            </div>
            <p>{item.name}</p>
        </li>
    )
}