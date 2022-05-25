var fs = require("fs");

window.onload = function () {
  var btn = this.document.querySelector("#btn-name");
  var persons = this.document.querySelector("#persons");
  btn.onclick = function () {
    fs.readFile("wansimon.txt", (err, data) => {
      persons.innerHTML = data;
    });
  };
};
