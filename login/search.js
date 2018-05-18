function search() {
    window.open('search.html', '_blank');
    var text = form.text.value; // form="name". text= "name". value; =
    var td = document.getElementsByTagName("td");
    var div = document.createElement("div");
    for (i = 0; i < td.length; i++) {

        var target = td[i].innerHTML;

        for (j = 0; j < target.length; j++) {
            var str = target.substring(j, j + text.length);
            if (text == str) {
                var span = document.createElement("span");
                span.innerHTML = target;
                div.appendChild(span);
                break;
            }
        }
        document.body.appendChild(div);
    }
}