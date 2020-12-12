// 変数
// 要素を取得して変数に代入
let display = document.getElementById('display');
let startStop = document.getElementById('startStop');
let reset = document.getElementById('reset');

// ストップウォッチの初期値
let hours = 0;
let minites = 0;
let seconds = 0;

let newHours = 0;
let newMinites = 0;
let newSeconds = 0;

// startStopボタンの機能を付ける上での変数
let status = "stop";　// 変数statusの初期値はstop
let interval;  // setInterval/ clearIntervalを代入する変数

// 関数
// ストップウォッチの時間部分の関数
function stopWatch () {
    seconds++;
    // 60秒経過したら一つ上の位で１繰り上げられ、そのくらいの値を０に戻す
    if(seconds / 60 == 1) {
        minites++;
        seconds = 0;
        if (minites / 60 ==1) {
            hours++;
            minites = 0;
        }
    }
    // 値が1ケタの時に前に０を追加して見やすくする
    if(seconds < 10){
        newSeconds = "0" + seconds;
    } else {
        newSeconds = seconds;
    }
    if(minites < 10){
        newMinites = "0" + minites;
    } else {
        newMinites = minites;
    }
    if(hours < 10){
        newHours = "0" + hours;
    } else {
        newHours = hours;
    }


    display.innerHTML = newHours + ":" + newMinites + ":" + newSeconds;
}

// startStopをクリックしたときの関数
startStop.addEventListener('click', function(){
    // statusがstopの時に、スタートボタンを押したらカウントが始まる・ボタンをSTOPに変える
    if(status == "stop"){
        interval = setInterval(stopWatch, 1000); //カウントを始める
        startStop.innerHTML = "STOP";
        status = "start";
    }
    // statusがsttartの時に、ストップボタンを押したらカウントが止まる・ボタンをSTARTに変える
    else {
        clearInterval(interval); //カウントを止める
        startStop.innerHTML = "START";
        status = "stop";
    }
})

// resetをクリックしたときの関数
reset.addEventListener('click', function(){
    clearInterval(interval); //カウントを止める
    startStop.innerHTML = "START";
    status = "stop";
    display.innerHTML = "00:00:00";
    hours = 0;
    minites = 0;
    seconds = 0;
})
