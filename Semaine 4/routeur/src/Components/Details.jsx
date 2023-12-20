import React, { useEffect, useState } from "react";
import { useParams, useSearchParams, Outlet, useNavigate } from "react-router-dom";

function Details({posts}){

    const {postID} = useParams()
    const post = posts.find(post => (post.id == postID))
    const [controle, setControle] = useState(false)
    const navigate = useNavigate()

    const handleClick = () => {
        setControle(!controle)

        if(controle){navigate(-1)}
        else{navigate("test")}
    }


    return(
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
            <button onClick={handleClick}>Changer</button>
            <div>
                <Outlet/>
            </div>
        </div>
    )
}

export default Details;