function talk(){
    var know = {
       "How are you?" : "I am Very Good :)",
       "Who are you?" : "Hello,I am Pantelis :-)",
       "How old are you?" : "32",
       "What is your job?" : "I am Junior Front-End Developer",
       "How many years of experience do you have?" : "1 year"
   };

    var user = document.getElementById('userBox').value;
       document.getElementById('chatLog').innerHTML = user + "<br>";
    if (user in know) {
        document.getElementById('chatLog').innerHTML = know[user] + "<br>";
    }else{
        document.getElementById('chatLog').innerHTML = "Sorry,I didn't understand <br>";
    }
};