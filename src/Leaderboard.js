import firebase from "firebase";

console.log("App!!!");
 
  /*
  firebase.firestore().collection("kristak").doc("testID").get().then(function(doc) {
      if (doc.exists) {
          console.log("Document data:", doc.data());
      } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
      }
  }).catch(function(error) {
      console.log("Error getting document:", error);
  });
  */
   //Added a new collection, users
 firebase.firestore().collection("Users").doc("Tariq").set({
  Username : "Tariqqqq123",
  Score : 325
 })
 .then(function() {
  console.log("Document successfully written!");
 })
 .catch(function(error) {
  console.error("Error writing document: ", error);
 });
  
 //Leaderboard Code
 var leader = firebase.firestore().collection("Users");
 var query = leader.where("Score",">=", 325);
 query.get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });

export default Leaderboard;