var firebaseConfig = {
    apiKey: "AIzaSyAhI7vQg1ixoGkVDbqvAcNLjg1w2519New",
    authDomain: "kwitter-2-f0727.firebaseapp.com",
    databaseURL: "https://kwitter-2-f0727-default-rtdb.firebaseio.com",
    projectId: "kwitter-2-f0727",
    storageBucket: "kwitter-2-f0727.appspot.com",
    messagingSenderId: "1048656877671",
    appId: "1:1048656877671:web:e87a271f7b69abee3b1cc2"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");
    function send()
    {
          msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
name:user_name,
message:msg,
like:0

      });
      document.getElementById("msg").value="";
      }