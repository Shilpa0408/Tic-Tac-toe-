let turn = "X";
let over = false;
let playerturn = "player 2";
let draw = false;
function fun(x) {
    if (x.matches) {
        document.querySelector('.transparentline').style.bottom = '60vh';
        document.querySelector('.image').style.bottom = '70vh';
    }
}
function fun1(x) {
    if (x.matches) {
        document.querySelector('.transparentline').style.bottom = '65vh';
        document.querySelector('.image').style.bottom = '70vh';
    }
}
function fun2(x) {
    if (x.matches) {
        document.querySelector('.transparentline').style.bottom = '75vh';
        document.querySelector('.image').style.bottom = '80vh';
    }
}
const chnageTurn = () => {
    return turn === "X" ? "0" : "X";
}
const changeplayerturn = () => {
    return playerturn === "Player 2" ? "Player 1" : "Player 2";
}

const win = () => {
    let text = document.getElementsByClassName("text");
    let wins = [
        [0, 1, 2],
        [0, 3, 6],
        [0, 4, 8],
        [1, 4, 7],
        [2, 5, 8],
        [2, 4, 6],
        [3, 4, 5],
        [6, 7, 8],
    ]
    wins.forEach(e => {
        if ((text[e[0]].innerText === text[e[1]].innerText) && (text[e[1]].innerText === text[e[2]].innerText) && (text[e[0]].innerText != '')) {
            if (text[e[0]].innerText == 'X') {
                document.querySelector(".info").innerText = "";
                document.querySelector(".transparentline").innerText = "Player 1  won";
            }
            else if (text[e[0]].innerText == '0') {
                document.querySelector(".info").innerText = "";
                document.querySelector(".transparentline").innerText = "Player 2  won";
            }
            over = true;
            document.querySelector('.b').style.background = 'transparent';
            document.querySelector('.b').style.background = 'rgba(31, 49, 71, 0.274)';
            document.querySelector('.transparentline').style.opacity = '1';
            console.log("hello");
            document.querySelector('.transparentline').style.bottom = '50vh';
            document.querySelector('.but').style.display = 'flex';
            document.querySelector('.image').style.opacity = '1';
            document.querySelector('.image').style.bottom = '60vh';
            var x = window.matchMedia("(max-width:732px)");
            fun(x);
            x.addListener(fun);
            var y = window.matchMedia("(max-width:490px)");
            fun1(y);
            y.addListener(fun1);
            var z = window.matchMedia("(max-width:360px)");
            fun2(z);
            z.addListener(fun2);
        }

    })
}

let boxes = document.getElementsByClassName("box");
let count = 0;
Array.from(boxes).forEach(i => {
    let btext = i.querySelector(".text");
    i.addEventListener('click', () => {
        if (btext.innerText === '') {
            count++;
            console.log(count);
            if(!draw)
            {
                btext.innerText = turn;
                turn = chnageTurn();
                win();
                playerturn = changeplayerturn();
                if (!over) {
                    document.getElementsByClassName("info")[0].innerText = "Turn of " + playerturn;
                }
            }
            if(count==9 && draw==false)
            {
                draw =true;
                document.querySelector(".info").innerText = "";
                document.querySelector(".transparentline").innerText = "Game Tie";
                document.querySelector('.b').style.background = 'transparent';
                document.querySelector('.b').style.background = 'rgba(31, 49, 71, 0.274)';
                document.querySelector('.transparentline').style.opacity = '1';
                document.querySelector('.transparentline').style.bottom = '50vh';
                document.querySelector('.transparentline').style.transform='translateX(345%)';
                document.querySelector('.but').style.display = 'flex';
                document.querySelector('.image').style.opacity = '1';
                document.querySelector('.image').style.bottom = '60vh';
                var x = window.matchMedia("(max-width:732px)");
                fun(x);
                x.addListener(fun);
                var y = window.matchMedia("(max-width:490px)");
                fun1(y);
                y.addListener(fun1);
                var z = window.matchMedia("(max-width:360px)");
                fun2(z);
                z.addListener(fun2);   
            }
        }
    })
})

reset.addEventListener('click', () => {
    let texts = document.querySelectorAll('.text');
    Array.from(texts).forEach(element => {
        element.innerText = "";
    })
    document.querySelector('.b').style.background = 'black';
    document.querySelector('.transparentline').style.opacity = '0';
    document.querySelector('.transparentline').style.bottom = '0';
    document.querySelector('.transparentline').style.transform='translateX(249%)';
    document.querySelector('.image').style.opacity = '0';
    document.querySelector('.image').style.bottom = '0';
    document.querySelector('.but').style.display = 'none';
    turn = 'X';
    over = false;
    playerturn = "player 1";
    count=0;
    draw =false;
    document.querySelector(".info").innerText = "Turn for " + playerturn;
})
