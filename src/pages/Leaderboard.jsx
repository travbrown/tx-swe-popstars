// This page is the leaderboard code, it provides the ability to write to scores and usernames to Firebase and display them in leaderboard fashion.
import firebase from "firebase";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { GameContext } from "../gameContext";
    
export default function Leaderboard(){
  
//these three variables are responsible for storing the score(userscore), and name(name) variables, as well as containing a query to sort scores (leader)
    const {score} = useContext(GameContext);
    let leader = firebase.firestore().collection("Users").where("Score",">", 0).orderBy("Score","desc").limit(10);
    let userScore = score;
    let name = localStorage.getItem("name1");

    //This function provides the code for writing the name and score to Firebase under the "Users" collection.

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

    //This return will display the information that we grabbed from Firebase as well as some slight CSS to make it look nicer.
    // The div under classname "App" is the container for the button that leads off the leaderboard page and links back to the gameMode page.
  return (
    <div className="App">
        <div class ="item">
            <li id="subject-diff">Leaderboard</li> 
        </div>
        <center>
            <div style={{ color: "white", paddingTop: "50px"}}>
                {leaderboard.map((item, idx) => ( <ol type="1"> {item.id} : {item.score} points </ol> ))}
            </div>
            <div  style={{paddingTop: "50px"}}>
                <Link to="/gameMode" class= "default_button"> HOME </Link>
            </div>
        </center>
    </div> );
}