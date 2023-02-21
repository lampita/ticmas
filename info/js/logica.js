let btnItems = document.querySelectorAll(".item .btn-item");

for (let i = 0; i < btnItems.length; i++) {
  btnItems[i].addEventListener("click", function (e) {
    let btn = e.target;

    if (btn.className == "btn-item") {
      removerClase();
      btn.classList.add("active");
    } else if (btn.className == "btn-item active") {
      btn.classList.remove("active");
    }
  });

  function removerClase() {
    for (let i = 0; i < btnItems.length; i++) {
      btnItems[i].classList.remove("active");
    }
  }
}
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
