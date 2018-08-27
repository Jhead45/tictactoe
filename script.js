// move variable
let move = {
    text: '',
    id: ''
}

// set number of players for game mode
function numOfPlayers(number) {
    let btn1 = document.getElementById('btn1');
    let btn2 = document.getElementById('btn2');
    btn1.remove();
    btn2.remove();
    
    if (number == 1) {
        let header = document.getElementById('gameTitle');
        let title = document.createTextNode('Player VS Computer');
        header.appendChild(title);
        onePlayerGame();

    } else if (number == 2) {
        let header = document.getElementById('gameTitle');
        let title = document.createTextNode('Player VS Player');
        header.appendChild(title);
        twoPlayerGame();

    }
 
}

// start one player game

function onePlayerGame() {
    let i = 0;
    let c = 0;
    let pastMoves = [];
    let availMoves = ['row1-col1', 'row1-col2', 'row1-col3', 'row2-col1', 'row2-col2', 'row2-col3', 'row3-col1', 'row3-col2', 'row3-col3'];
    let comp = 'O';
 
    let mode = 'one player';
    let spots = document.querySelectorAll('.spot');
        spots.forEach(function(spot) {
            spot.addEventListener("click", checkSpot); 
            
        });

    function checkSpot(e) {
        let move = {
            text: e.target.textContent,
            id: this.id
        }
            i ++;
        if (i == c + 1) {
            if (move.text == 'X' || move.text == 'O') {
                alert('This spot has already been taken!');
            } else if (move.text == '') {
                let turn = 'X';
                e.target.textContent = `${turn}`;
                let status = winCheck(turn,pastMoves,mode);
    
                tieCheck(pastMoves);
            
                pastMoves.push(move.id);
                pastMoves.forEach(function(move) {
                    availMoves.forEach(function(avail) {
                        if (move == avail) {
                           let index = availMoves.indexOf(move)
                           availMoves.splice(index, 1);
                        }
                    })
                })

                let row1col1 = document.getElementById('row1-col1').innerHTML;
                let row1col2 = document.getElementById('row1-col2').innerHTML;
                let row1col3 = document.getElementById('row1-col3').innerHTML;
                let row2col1 = document.getElementById('row2-col1').innerHTML;
                let row2col2 = document.getElementById('row2-col2').innerHTML;
                let row2col3 = document.getElementById('row2-col3').innerHTML;
                let row3col1 = document.getElementById('row3-col1').innerHTML;
                let row3col2 = document.getElementById('row3-col2').innerHTML;
                let row3col3 = document.getElementById('row3-col3').innerHTML;
                if (row1col1 == comp && row1col2 == comp && row1col3 == '') {
                    let go = document.createTextNode(comp);
                    document.getElementById('row1-col3').appendChild(go);
                    pastMoves.push('row1-col3');
                } else if (row1col1 == comp && row2col1 == comp && row3col1 == '') {
                    let go = document.createTextNode(comp);
                    document.getElementById('row3-col1').appendChild(go);
                    pastMoves.push('row3-col1');
                } else if (row1col2 == comp && row2col2 == comp && row3col2 == '') {
                    let go = document.createTextNode(comp);
                    document.getElementById('row3-col2').appendChild(go);
                    pastMoves.push('row3-col2');
                } else if (row1col2 == comp && row1col3 == comp && row1col1 == '') {
                    let go = document.createTextNode(comp);
                    document.getElementById('row1-col1').appendChild(go);
                    pastMoves.push('row1-col1');
                } else if (row1col3 == comp && row2col3 == comp && row3col3 == '') {
                    let go = document.createTextNode(comp);
                    document.getElementById('row3-col3').appendChild(go);
                    pastMoves.push('row3-col3');
                } else if (row2col2 == comp && row2col3 == comp && row2col1 == '') {
                    let go = document.createTextNode(comp);
                    document.getElementById('row2-col1').appendChild(go);
                    pastMoves.push('row2-col1');
                } else if (row2col3 == comp && row3col3 == comp && row1col3 == '') {
                    let go = document.createTextNode(comp);
                    document.getElementById('row1-col3').appendChild(go);
                    pastMoves.push('row1-col3');
                } else if (row3col3 == comp && row3col2 == comp && row3col1 == '') {
                    let go = document.createTextNode(comp);
                    document.getElementById('row3-col1').appendChild(go);
                    pastMoves.push('row3-col1');
                } else if (row3col2 == comp && row2col2 == comp && row1col2 == '') {
                    let go = document.createTextNode(comp);
                    document.getElementById('row1-col3').appendChild(go);
                    pastMoves.push('row1-col3');
                } else if (row3col2 == comp && row3col1 == comp && row3col3 == '') {
                    let go = document.createTextNode(comp);
                    document.getElementById('row3-col3').appendChild(go);
                    pastMoves.push('row3-col3');
                } else if (row3col1 == comp && row2col1 == comp && row1col1 == '') {
                    let go = document.createTextNode(comp);
                    document.getElementById('row1-col1').appendChild(go);
                    pastMoves.push('row1-col1');
                } else if (row2col1 == comp && row2col2 == comp && row2col3 == '') {
                    let go = document.createTextNode(comp);
                    document.getElementById('row2-col3').appendChild(go);
                    pastMoves.push('row2-col3');
                } else if (row1col1 == comp && row2col2 == comp && row3col3 == '') {
                    let go = document.createTextNode(comp);
                    document.getElementById('row3-col3').appendChild(go);
                    pastMoves.push('row3-col3');
                } else if (row1col3 == comp && row2col2 == comp && row3col1 == '') {
                    let go = document.createTextNode(comp);
                    document.getElementById('row3-col1').appendChild(go);
                    pastMoves.push('row3-col1');
                } else if (row3col3 == comp && row2col2 == comp && row1col1 == '') {
                    let go = document.createTextNode(comp);
                    document.getElementById('row1-col1').appendChild(go);
                    pastMoves.push('row1-col1');
                } else if (row3col1 == comp && row2col2 == comp && row1col3 == '') {
                    let go = document.createTextNode(comp);
                    document.getElementById('row1-col3').appendChild(go);
                    pastMoves.push('row1-col3');
                } else if (row1col1 == comp && row1col3 == comp && row1col2 == '') {
                    let go = document.createTextNode(comp);
                    document.getElementById('row1-col2').appendChild(go);
                    pastMoves.push('row1-col2');
                } else if (row2col1 == comp && row2col3 == comp && row2col2== '') {
                    let go = document.createTextNode(comp);
                    document.getElementById('row2-col2').appendChild(go);
                    pastMoves.push('row2-col2');
                } else if (row3col1 == comp && row3col3 == comp && row3col2 == '') {
                    let go = document.createTextNode(comp);
                    document.getElementById('row3-col2').appendChild(go);
                    pastMoves.push('row3-col2');
                } else if (row1col1 == comp && row3col1 == comp && row2col2 == '') {
                    let go = document.createTextNode(comp);
                    document.getElementById('row2-col2').appendChild(go);
                    pastMoves.push('row2-col2');
                } else if (row1col2 == comp && row3col2 == comp && row2col2 == '') {
                    let go = document.createTextNode(comp);
                    document.getElementById('row2-col2').appendChild(go);
                    pastMoves.push('row2-col2');
                } else if (row1col3 == comp && row3col3 == comp && row2col3 == '') {
                    let go = document.createTextNode(comp);
                    document.getElementById('row2-col3').appendChild(go);
                    pastMoves.push('row2-col3');
                } else if (row1col1 == comp && row3col3 == comp && row2col2 == '') {
                    let go = document.createTextNode(comp);
                    document.getElementById('row2-col2').appendChild(go);
                    pastMoves.push('row2-col2');
                } else if (row1col3 == comp && row3col1 == comp && row2col2 == '') {
                    let go = document.createTextNode(comp);
                    document.getElementById('row2-col2').appendChild(go);
                    pastMoves.push('row2-col2');
                } else if (row1col1 == turn && row1col2 == turn && row1col3 == '') {
                    let go = document.createTextNode(comp);
                    document.getElementById('row1-col3').appendChild(go);
                    pastMoves.push('row1-col3');
                } else if (row1col1 == turn && row2col1 == turn && row3col1 == '') {
                    let go = document.createTextNode(comp);
                    document.getElementById('row3-col1').appendChild(go);
                    pastMoves.push('row3-col1');
                } else if (row1col2 == turn && row2col2 == turn && row3col2 == '') {
                    let go = document.createTextNode(comp);
                    document.getElementById('row3-col2').appendChild(go);
                    pastMoves.push('row3-col2');
                } else if (row1col2 == turn && row1col3 == turn && row1col1 == '') {
                    let go = document.createTextNode(comp);
                    document.getElementById('row1-col1').appendChild(go);
                    pastMoves.push('row1-col1');
                } else if (row1col3 == turn && row2col3 == turn && row3col3 == '') {
                    let go = document.createTextNode(comp);
                    document.getElementById('row3-col3').appendChild(go);
                    pastMoves.push('row3-col3');
                } else if (row2col2 == turn && row2col3 == turn && row2col1 == '') {
                    let go = document.createTextNode(comp);
                    document.getElementById('row2-col1').appendChild(go);
                    pastMoves.push('row2-col1');
                } else if (row2col3 == turn && row3col3 == turn && row1col3 == '') {
                    let go = document.createTextNode(comp);
                    document.getElementById('row1-col3').appendChild(go);
                    pastMoves.push('row1-col3');
                } else if (row3col3 == turn && row3col2 == turn && row3col1 == '') {
                    let go = document.createTextNode(comp);
                    document.getElementById('row3-col1').appendChild(go);
                    pastMoves.push('row3-col1');
                } else if (row3col2 == turn && row2col2 == turn && row1col2 == '') {
                    let go = document.createTextNode(comp);
                    document.getElementById('row1-col3').appendChild(go);
                    pastMoves.push('row1-col3');
                } else if (row3col2 == turn && row3col1 == turn && row3col3 == '') {
                    let go = document.createTextNode(comp);
                    document.getElementById('row3-col3').appendChild(go);
                    pastMoves.push('row3-col3');
                } else if (row3col1 == turn && row2col1 == turn && row1col1 == '') {
                    let go = document.createTextNode(comp);
                    document.getElementById('row1-col1').appendChild(go);
                    pastMoves.push('row1-col1');
                } else if (row2col1 == turn && row2col2 == turn && row2col3 == '') {
                    let go = document.createTextNode(comp);
                    document.getElementById('row2-col3').appendChild(go);
                    pastMoves.push('row2-col3');
                } else if (row1col1 == turn && row2col2 == turn && row3col3 == '') {
                    let go = document.createTextNode(comp);
                    document.getElementById('row3-col3').appendChild(go);
                    pastMoves.push('row3-col3');
                } else if (row1col3 == turn && row2col2 == turn && row3col1 == '') {
                    let go = document.createTextNode(comp);
                    document.getElementById('row3-col1').appendChild(go);
                    pastMoves.push('row3-col1');
                } else if (row3col3 == turn && row2col2 == turn && row1col1 == '') {
                    let go = document.createTextNode(comp);
                    document.getElementById('row1-col1').appendChild(go);
                    pastMoves.push('row1-col1');
                } else if (row3col1 == turn && row2col2 == turn && row1col3 == '') {
                    let go = document.createTextNode(comp);
                    document.getElementById('row1-col3').appendChild(go);
                    pastMoves.push('row1-col3');
                } else if (row1col1 == turn && row1col3 == turn && row1col2 == '') {
                    let go = document.createTextNode(comp);
                    document.getElementById('row1-col2').appendChild(go);
                    pastMoves.push('row1-col2');
                } else if (row2col1 == turn && row2col3 == turn && row2col2== '') {
                    let go = document.createTextNode(comp);
                    document.getElementById('row2-col2').appendChild(go);
                    pastMoves.push('row2-col2');
                } else if (row3col1 == turn && row3col3 == turn && row3col2 == '') {
                    let go = document.createTextNode(comp);
                    document.getElementById('row3-col2').appendChild(go);
                    pastMoves.push('row3-col2');
                } else if (row1col1 == turn && row3col1 == turn && row2col2 == '') {
                    let go = document.createTextNode(comp);
                    document.getElementById('row2-col2').appendChild(go);
                    pastMoves.push('row2-col2');
                } else if (row1col2 == turn && row3col2 == turn && row2col2 == '') {
                    let go = document.createTextNode(comp);
                    document.getElementById('row2-col2').appendChild(go);
                    pastMoves.push('row2-col2');
                } else if (row1col3 == turn && row3col3 == turn && row2col3 == '') {
                    let go = document.createTextNode(comp);
                    document.getElementById('row2-col3').appendChild(go);
                    pastMoves.push('row2-col3');
                } else if (row1col1 == turn && row3col3 == turn && row2col2 == '') {
                    let go = document.createTextNode(comp);
                    document.getElementById('row2-col2').appendChild(go);
                    pastMoves.push('row2-col2');
                } else if (row1col3 == turn && row3col1 == turn && row2col2 == '') {
                    let go = document.createTextNode(comp);
                    document.getElementById('row2-col2').appendChild(go);
                    pastMoves.push('row2-col2');
                } else {
                    if (availMoves.length > 1) { 
                    var rand = availMoves[Math.floor(Math.random() * availMoves.length)];
                    let go = document.createTextNode(comp);
                    document.getElementById(`${rand}`).appendChild(go);
                    pastMoves.push(`${rand}`);
                    } 
                }
                winCheck(comp,pastMoves,mode);
                tieCheck(pastMoves);
            }
                            c ++;

        }
    }
}


//start two player game

function twoPlayerGame() {
    let i = 0;
    let pastMoves = [];
 
    let mode = 'two player';
    let spots = document.querySelectorAll('.spot');
        spots.forEach(function(spot) {
            spot.addEventListener("click", checkSpot); 
        });

    function checkSpot(e) {
        let move = {
            text: e.target.textContent,
            id: this.id
        }
             i ++;
   
        if (move.text == 'X' || move.text == 'O') {
            alert('This spot has already been taken!');
        } else if (move.text == '') {

            if (i %2 === 0) {
                let turn = 'O';
                e.target.textContent = `${turn}`;
                winCheck(turn,pastMoves,mode);
            } else {
                let turn = 'X';
                e.target.textContent = `${turn}`;
                winCheck(turn,pastMoves,mode);
            }
            pastMoves.push(move.id);
        }
        tieCheck(pastMoves);
    }
}

function winCheck(turn,pastMoves,mode) {
    let row1col1= document.getElementById('row1-col1').innerHTML;
    let row1col2= document.getElementById('row1-col2').innerHTML;
    let row1col3= document.getElementById('row1-col3').innerHTML;
    let row2col1= document.getElementById('row2-col1').innerHTML;
    let row2col2= document.getElementById('row2-col2').innerHTML;
    let row2col3= document.getElementById('row2-col3').innerHTML;
    let row3col1= document.getElementById('row3-col1').innerHTML;
    let row3col2= document.getElementById('row3-col2').innerHTML;
    let row3col3= document.getElementById('row3-col3').innerHTML;
    let end = 'stop';

    if (row1col1 == turn && row1col2 == turn && row1col3 == turn) {
        pastMoves.length = 0;
        whoWins(turn,mode);
        return end;
    } else if (row1col1 == turn && row2col1 == turn && row3col1 == turn) {
        pastMoves.length = 0;
        whoWins(turn,mode);
        return end;
    } else if (row1col1 == turn && row2col2 == turn && row3col3 == turn) {
        pastMoves.length = 0;
        whoWins(turn,mode);
        return end;
    } else if (row1col2 == turn && row2col2 == turn && row3col2 == turn) {
        pastMoves.length = 0;
        whoWins(turn,mode);
        return end;
    } else if (row1col3 == turn && row2col3 == turn && row3col3 == turn) {
        pastMoves.length = 0;
        whoWins(turn,mode);
        return end;
    } else if (row1col3 == turn && row2col2 == turn && row3col1 == turn) {
        pastMoves.length = 0;
        whoWins(turn,mode);
        return end;
    } else if (row2col1 == turn && row2col2 == turn && row2col3 == turn) {
        pastMoves.length = 0;
        whoWins(turn,mode);
        return end;
    } else if (row3col1 == turn && row3col2 == turn && row3col3 == turn) {
        pastMoves.length = 0;        
        whoWins(turn,mode);
        return end;
    }
    
}

function whoWins(turn,mode) {
    if (turn == 'X') {
        let winner = 'Player 1';
        let text = document.createTextNode(`${winner} Wins!`);
        document.getElementById('whoWon').appendChild(text);
        stopMoves();
    } else if (turn == 'O') {
        if (mode == 'two player') {
            let winner = 'Player 2';
            let text = document.createTextNode(`${winner} Wins!`);
            document.getElementById('whoWon').appendChild(text);
            stopMoves();
        } else {
            let winner = 'Computer';
            let text = document.createTextNode(`The ${winner} Wins! Try Again!`);
            document.getElementById('whoWon').appendChild(text);
            stopMoves();
        }
    } else {
        alert('Whoops! We seem to have had an error! Try Again.');
    }
}

function tieCheck(cat) {
    let num = cat.length;
    if (num == 9) {
        let eww = 'Its a Tie... Gross... Like Kissing your sister!';
        let text = document.createTextNode(`${eww} Wins!`);
        document.getElementById('whoWon').appendChild(text);
    }
}

function stopMoves() {
    document.getElementsByClassName('spot').removeAttribute('id');
}

