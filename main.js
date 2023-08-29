var coll = document.querySelectorAll(".collapsible");
for (var i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        var parentDiv = this.parentElement;
        var content = parentDiv.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
            this.innerHTML = "+";
        } else {
            content.style.display = "block";
            this.innerHTML = "-";
        }
    });
}