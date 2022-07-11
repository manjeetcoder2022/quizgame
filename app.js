
function login()
{
    player1_name=document.getElementById("player1_name").value
    player2_name=document.getElementById("player2_name").value

    localStorage.setItem("player_1_input" ,player1_name)
    localStorage.setItem("player_2_input" ,player2_name)
    window.location="quiz.html"
}

