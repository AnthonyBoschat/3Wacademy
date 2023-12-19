import React, { useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";

function Details({posts}){

    const {postID} = useParams()
    const post = posts.find(post => (post.id == postID))

    return(
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </div>
    )
}

export default Details;