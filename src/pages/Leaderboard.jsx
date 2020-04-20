import firebase from "firebase";
import gamepage from "./gamePage.jsx";
import React from "react";

console.log("App!!!");
var leader = firebase.firestore().collection("Users");
var query = leader.where("Score",">=", 0).orderBy("Score","desc").limit(10);

//console.log(Leaderboard);
var userScore = localStorage.getItem('User Score')
var name1 = localStorage.getItem("playerOneName");

//const multiplayer = localStorage.getItem("mulitplayer");

// "'" + name1 + "'"  // This will input the variable as a name 
   
        firebase.firestore().collection("Users").doc("Serena Williams").set({
            Score : userScore
           })
           .then(function() {
            console.log("Document successfully written!");
           })
           .catch(function(error) {
            console.error("Error writing document: ", error);
           });

        //Leaderboard Code
    //const Leaderboard = () => {
    console.log("Balooga");    
    query.get() // This grabs all 10 entries.
       .then(function(querySnapshot) {
           querySnapshot.forEach(function(doc) {
               // doc.data() is never undefined for query doc snapshots
               console.log(doc.id, " => ", doc.data());
           });
       })
       .catch(function(error) {
           console.log("Error getting documents: ", error);
       });
    
   // }
    
    
        
          
        export default function Leaderboard()
        {

        }