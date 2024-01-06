import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import StatLine from "./StatLine";
import useStats from "../../CustomHook/useStats";
import { useParams } from "react-router-dom";


function Statistique(){

    const users = useSelector(store => store.users)
    const params = useParams()
    const {filterUsers} = useStats()
    const orderedUsers = filterUsers(users)

    const userName = params.userName


    return(
        <div className="statsOverlay">
            <div className="statsBox">
                <div className="playerStatsBox">
                    {orderedUsers.map(user => <StatLine orderedUsers={orderedUsers} user={user} userName={userName} />)}
                </div>
            </div>
        </div>
    )
}

export default Statistique;