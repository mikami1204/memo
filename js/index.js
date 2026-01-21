let count = 0;

let rest = 10 - count;


function memo() {

    text = document.memo_form.textbox.value;

    if (text == "") {

        alert("メモしたい内容を入れてください");

    } else {

        const memo_test = document.querySelector('h2');

        memo_test.insertAdjacentHTML('afterend', '<input type="button" value="' + text + '" id="memo-c' + count + '" class="memo-c" onclick="none' + count + '()">');

        document.memo_form.textbox.value = '';

        count++;

    }

    if (count == 10) {
        stopmemo = document.getElementById('memo');

        stopmemo.classList.add('none');
    } else {

    };

    rest = 10 - count;

    counter = document.getElementById('counter');

    counter.innerHTML = 'メモ残り回数：' + rest;
}




function none0() {

    a = document.getElementById('memo-c0');

    a.classList.add('none');

}

function none1() {

    a = document.getElementById('memo-c1');

    a.classList.add('none');

}

function none2() {

    a = document.getElementById('memo-c2');

    a.classList.add('none');

}

function none3() {

    a = document.getElementById('memo-c3');

    a.classList.add('none');

}

function none4() {

    a = document.getElementById('memo-c4');

    a.classList.add('none');

}

function none5() {

    a = document.getElementById('memo-c5');

    a.classList.add('none');

}

function none6() {

    a = document.getElementById('memo-c6');

    a.classList.add('none');

}

function none7() {

    a = document.getElementById('memo-c7');

    a.classList.add('none');

}

function none8() {

    a = document.getElementById('memo-c8');

    a.classList.add('none');

}

function none9() {

    a = document.getElementById('memo-c9');

    a.classList.add('none');

}

