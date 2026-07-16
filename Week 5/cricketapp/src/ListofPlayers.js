import React from "react";

function ListofPlayers() {

    const players = [
        { name: "Virat Kohli", score: 95 },
        { name: "Rohit Sharma", score: 82 },
        { name: "Shubman Gill", score: 68 },
        { name: "KL Rahul", score: 55 },
        { name: "Hardik Pandya", score: 73 },
        { name: "Ravindra Jadeja", score: 66 },
        { name: "Rishabh Pant", score: 89 },
        { name: "Surya Kumar", score: 71 },
        { name: "Bumrah", score: 49 },
        { name: "Shami", score: 63 },
        { name: "Siraj", score: 78 }
    ];

    const lowScorePlayers = players.filter(player => player.score < 70);

    return (
        <div>

            <h2>List of Players</h2>

            <ul>
                {players.map((player, index) => (
                    <li key={index}>
                        {player.name} - {player.score}
                    </li>
                ))}
            </ul>

            <h2>Players with Score Below 70</h2>

            <ul>
                {lowScorePlayers.map((player, index) => (
                    <li key={index}>
                        {player.name} - {player.score}
                    </li>
                ))}
            </ul>

        </div>
    );
}

export default ListofPlayers;