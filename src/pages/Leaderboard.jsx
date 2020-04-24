import firebase from "firebase";
import React from "react";
import ReactDOM from 'react-dom'


    console.log("App!!!");
    var leader = firebase.firestore().collection("Users").where("Score",">", 0).orderBy("Score","desc").limit(10);
    var userScore = parseInt(localStorage.getItem('score'));
    var name = localStorage.getItem("name1");

    //const multiplayer = localStorage.getItem("mulitplayer");
    // "'" + name1 + "'"  // This will input the variable as a name 
   

    firebase.firestore().collection("Users").doc("'" + name + "'")
    .set({ Score : userScore })
    .then(function() {
        console.log("Document successfully written!");
        //localStorage.clear(); //Had to delete this because this stops music from playing.
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });
    
   
    leader.get() // This grabs all 10 entries.
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });
        
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    })

    


    
    
    /*
    <div className="App">
            <header className="App-header">
                {name}:  {userScore}
            </header>
        </div>
    
    */
  
export default function Leaderboard(){
    
}
  
   



