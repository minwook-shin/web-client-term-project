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
    todaysmonth = month;
    var fulldate;
    getfulldate(year, month);

    /*----------------------------------*/
    /*-----------div 구현---------------*/
    var span = document.createElement("span");
    span.style.color = "black"
    var premon = document.createElement("img");
    premon.src = "image/leftarrow.png";
    premon.onclick = function(){
            if (month > 0) {
                month -= 1;
                getfulldate(year, month);
              
            day = day - (fulldate % 7 ) + 7;
            day %= 7;
            remove();
            loadtable();
        }
    }
    var nextmon = document.createElement("img");
    nextmon.src = "image/rightarrow.png";
    nextmon.onclick = function () {
        if (month < 11) {
            var d = getfulldate(year, month);
            month += 1;
            getfulldate(year, month);
            day = day + (d % 7);
            day %= 7;
            
            remove();
            loadtable();
        }
    }
    premon.style = "width:20px;height:20px;float:left;margin-top:20px";
    nextmon.style = "width:30px;height:30px;float:right;margin-top:15px";
    span.innerHTML = "20" + (year - 100) + "년 " + (month + 1) + "월"
    span.style = "font-size:2.5em;margin-left:30px"
    calander.appendChild(premon);
    calander.appendChild(span);
    calander.appendChild(nextmon);
    /*----------------------------------*/
    var hr = document.createElement("hr");
    calander.appendChild(hr);
    var table;
    loadtable();
    
    /*--------- 테이블 구현-------------*/
    function loadtable() {
        span.innerHTML = "20" + (year - 100) + "년 " + (month + 1) + "월"
        table = document.createElement("table");
        calander.appendChild(table);
        var sheet = document.createElement('style')
        sheet.innerHTML =
            ".calander td{border: 0.3px solid gray;}" +
            ".calander table{width:300px;height:300px;text-align:center}" +
            ".calander span{color:black}"
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
            if (number == today && month == todaysmonth) td.style.backgroundColor = "lightgray"
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
                if (number == today && month == todaysmonth) td.style.backgroundColor = "lightgray";
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
            }
            else {
                td.innerHTML = " ";
            }
            tr.appendChild(td);
        }
        table.appendChild(tr);
        var info = document.getElementById("monthinfo");
        info.innerHTML = month+1+"월 일정에 나와있는대로 구현이 될것입니다.";


    }
    function remove() {
        calander.removeChild(table);
    }
    function getfulldate(year, month) {
        switch (month+1) {
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
                }
                else {
                    fulldate = 28;
                }

        }
        return fulldate;
    }

    
}
