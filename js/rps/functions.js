function changePic(x) {

    if (x === 'p') {
        document.getElementById("playerPic").src = "../../images/p.jpg";
        playGame('p');
    }
    else if (x === 'r') {
        document.getElementById("playerPic").src = "../../images/r.jpg";
        playGame('r')
    }
    else if (x === 's') {
        document.getElementById("playerPic").src = "../../images/s.jpg";
        playGame('s')
    }
}
