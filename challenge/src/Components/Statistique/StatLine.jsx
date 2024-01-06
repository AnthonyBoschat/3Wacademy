import React from "react";
import useStats from "../../CustomHook/useStats";

function StatLine({user, userName, orderedUsers}){

    const backgroundStyle = userName === user.name ? {backgroundColor:"rgba(2, 159, 187, 0.575)"} : null
    const position = orderedUsers.findIndex(userName => userName.name === user.name)

    return(
        <>
        <div style={backgroundStyle} key={user?.name} className="playerScore">
            <span className="playerScoreBox">
                <i className="playerScoreHearthIcon fa-solid fa-star"></i>
                <span className="playerScoreValue">{user?.score}</span>
            </span>
            <span className="playerName">{user?.name}</span>
            <span className="playerRankBox">
                <span className="playerRank">
                    {position + 1}
                </span>
            </span>
        </div>
        <div style={backgroundStyle} key={user?.name} className="playerScore">
            <span className="playerScoreBox">
                <i className="playerScoreHearthIcon fa-solid fa-star"></i>
                <span className="playerScoreValue">{user?.score}</span>
            </span>
            <span className="playerName">{user?.name}</span>
            <span className="playerRankBox">
                <span className="playerRank">
                    {position + 1}
                </span>
            </span>
        </div>
        <div style={backgroundStyle} key={user?.name} className="playerScore">
            <span className="playerScoreBox">
                <i className="playerScoreHearthIcon fa-solid fa-star"></i>
                <span className="playerScoreValue">{user?.score}</span>
            </span>
            <span className="playerName">{user?.name}</span>
            <span className="playerRankBox">
                <span className="playerRank">
                    {position + 1}
                </span>
            </span>
        </div>
        <div style={backgroundStyle} key={user?.name} className="playerScore">
            <span className="playerScoreBox">
                <i className="playerScoreHearthIcon fa-solid fa-star"></i>
                <span className="playerScoreValue">{user?.score}</span>
            </span>
            <span className="playerName">{user?.name}</span>
            <span className="playerRankBox">
                <span className="playerRank">
                    {position + 1}
                </span>
            </span>
        </div>
        <div style={backgroundStyle} key={user?.name} className="playerScore">
            <span className="playerScoreBox">
                <i className="playerScoreHearthIcon fa-solid fa-star"></i>
                <span className="playerScoreValue">{user?.score}</span>
            </span>
            <span className="playerName">{user?.name}</span>
            <span className="playerRankBox">
                <span className="playerRank">
                    {position + 1}
                </span>
            </span>
        </div>
        <div style={backgroundStyle} key={user?.name} className="playerScore">
            <span className="playerScoreBox">
                <i className="playerScoreHearthIcon fa-solid fa-star"></i>
                <span className="playerScoreValue">{user?.score}</span>
            </span>
            <span className="playerName">{user?.name}</span>
            <span className="playerRankBox">
                <span className="playerRank">
                    {position + 1}
                </span>
            </span>
        </div>
        <div style={backgroundStyle} key={user?.name} className="playerScore">
            <span className="playerScoreBox">
                <i className="playerScoreHearthIcon fa-solid fa-star"></i>
                <span className="playerScoreValue">{user?.score}</span>
            </span>
            <span className="playerName">{user?.name}</span>
            <span className="playerRankBox">
                <span className="playerRank">
                    {position + 1}
                </span>
            </span>
        </div>
        <div style={backgroundStyle} key={user?.name} className="playerScore">
            <span className="playerScoreBox">
                <i className="playerScoreHearthIcon fa-solid fa-star"></i>
                <span className="playerScoreValue">{user?.score}</span>
            </span>
            <span className="playerName">{user?.name}</span>
            <span className="playerRankBox">
                <span className="playerRank">
                    {position + 1}
                </span>
            </span>
        </div>
        <div style={backgroundStyle} key={user?.name} className="playerScore">
            <span className="playerScoreBox">
                <i className="playerScoreHearthIcon fa-solid fa-star"></i>
                <span className="playerScoreValue">{user?.score}</span>
            </span>
            <span className="playerName">{user?.name}</span>
            <span className="playerRankBox">
                <span className="playerRank">
                    {position + 1}
                </span>
            </span>
        </div>
        <div style={backgroundStyle} key={user?.name} className="playerScore">
            <span className="playerScoreBox">
                <i className="playerScoreHearthIcon fa-solid fa-star"></i>
                <span className="playerScoreValue">{user?.score}</span>
            </span>
            <span className="playerName">{user?.name}</span>
            <span className="playerRankBox">
                <span className="playerRank">
                    {position + 1}
                </span>
            </span>
        </div>
        <div style={backgroundStyle} key={user?.name} className="playerScore">
            <span className="playerScoreBox">
                <i className="playerScoreHearthIcon fa-solid fa-star"></i>
                <span className="playerScoreValue">{user?.score}</span>
            </span>
            <span className="playerName">{user?.name}</span>
            <span className="playerRankBox">
                <span className="playerRank">
                    {position + 1}
                </span>
            </span>
        </div>
        
        </>
        
        
    )
}

export default StatLine;