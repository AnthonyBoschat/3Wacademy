import React, {} from "react";

export default function useStats(){

    const filterUsers = (users) => {
        const orderedUsers = [...users].sort((a,b) => b.score - a.score)
        return orderedUsers
    }
    

    return{filterUsers}
}