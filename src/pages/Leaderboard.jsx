import firebase from "firebase";
import React, { useState, useEffect } from "react";
    
export default function Leaderboard(){
    console.log("App!!!");
    var leader = firebase.firestore().collection("Users").where("Score",">", 0).orderBy("Score","desc").limit(10);
    var userScore = parseInt(localStorage.getItem('score'));
    var name = localStorage.getItem("name1");

    firebase.firestore().collection("Users").doc("" + name + "")
    .set({ Score : userScore })
    .then(function() {
        console.log("Document successfully written!");
        //localStorage.clear(); //Had to delete this because this stops music from playing.
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });

    
    const [leaderboard, setLeaderboard] = useState([]);
    useEffect(() => {

        leader.get() // This grabs all 10 entries.
        .then(function(querySnapshot) {

            let tmpLeaderboard = [];
            querySnapshot.forEach(function(doc) {

                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
                tmpLeaderboard.push({id: doc.id, score: doc.data().Score});
            });

            setLeaderboard(tmpLeaderboard);
            console.log(tmpLeaderboard);
            
        })
        .catch(function(error) {
            console.log("Error getting documents: ", error);
        })
    }, []);

  return (
    <div className="App">
    <div class ="item">
        <li id="subject-diff">Leaderboard</li> 
    </div>
    <center>
        <div style={{ color: "white", paddingTop: "50px"}}>
            {leaderboard.map((item, idx) => ( <ol type="1"> {item.id} : {item.score} points </ol> ))}
        </div>
    </center>
    </div>
    );
}