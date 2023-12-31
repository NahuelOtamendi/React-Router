import { useState } from "react"
import "../assets/css/componentes/card.css"
import { useParams, useNavigate } from "react-router-dom"
import { buscar } from "../api/api"
import { useEffect } from "react"

const Post = ({url}) => {

    const [post, setpost] = useState({})
    const {id } = useParams() 
    const navigate = useNavigate()

    useEffect(() => {
        buscar(`/posts/${id}`, setpost).catch(() => {
            navigate("/not-found")
        })
    }, [id])   
return(
   <main className = "container flex flex--center">
     <article className = "card post">
       <h2 className = "post-card__title">{post.title}</h2>
       <p className = "text__card">{post.body}</p>
     </article>
   </main>
 )
}

export default Post