// JavaScript source code
window.onload = function () {
    var calanders = document.getElementsByClassName('calander');
    var calander = calanders[0];
    calander.date = new Date();
    calander.date.setDate(1);
    month = calander.date.getMonth();
    year = calander.date.getYear();
    day = calander.date.getDay();
    today = new Date().getDate();
    var fulldate = getfulldate(year, month);
    /*----------------------------------*/
    /*-----------div 구현---------------*/
    var h3 = document.createElement("h3");
    h3.innerHTML = "20" + (year - 100) + "년 " + (month + 1) + "월"
    calander.appendChild(h3);
    /*----------------------------------*/
    var hr = document.createElement("hr");
    calander.appendChild(hr);
    /*--------- 테이블 구현-------------*/

    var table = document.createElement("table");
    calander.appendChild(table);
    var sheet = document.createElement('style')
    sheet.innerHTML =
        ".calander td{border: 0.3px solid gray;}" +
        ".calander table{width:300px;height:300px;text-align:center}";
    document.body.appendChild(sheet);

    var tr = document.createElement("tr");
    days = ["일", "월", "화", "수", "목", "금", "토"]
    for (var i = 0; i < 7; i++) {
        var th = document.createElement("th");
        th.style.textAlign = "center"
        th.style.borderBottom = "2px solid darkblue"
        th.innerHTML = days[i];
        if (i == 0) th.style.color = "red";
        if (i == 6) th.style.color = "blue";
        tr.appendChild(th);
    }
    table.appendChild(tr);

    var tr = document.createElement("tr");
    var number = 1;
    for (var i = 0; i < day; i++) {
        var td = document.createElement("td");
        td.innerHTML = " ";
        tr.appendChild(td);
    }

    for (var i = 0; i < 7 - day; i++) {
        var td = document.createElement("td");
        td.innerHTML = number;
        if (number == today) td.style.backgroundColor = "lightgray"
        if (i == 0 && day == 0) td.style.color = "red";
        if (i == 6 - day) td.style.color = "blue";
        number++;
        tr.appendChild(td);
    }
    table.appendChild(tr);
    for (var i = 0; i < ((fulldate + day) / 7) - 2; i++) {
        var tr = document.createElement("tr");
        for (var j = 0; j < 7; j++) {
            td = document.createElement("td");
            td.innerHTML = number;
            if (number == today) td.style.backgroundColor = "lightgray";
            number++;
            if (j == 0) td.style.color = "red";
            if (j == 6) td.style.color = "blue"
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    var tr = document.createElement("tr");
    for (var i = 0; i < 7; i++) {
        var td = document.createElement("td");
        if (i == 0) td.style.color = "red";
        if (i == 6) td.style.color = "blue";
        if (number <= fulldate) {
            td.innerHTML = number;
            number++;
        } else {
            td.innerHTML = " ";
        }
        tr.appendChild(td);
    }
    table.appendChild(tr);


}

function getfulldate(year, month) {
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            fulldate = 31;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            fulldate = 30;
            break;
        case 2:
            if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
                fulldate = 29;
            } else {
                fulldate = 28;
            }

    }
    return fulldate;
}