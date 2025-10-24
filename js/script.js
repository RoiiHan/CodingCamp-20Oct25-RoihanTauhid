//  namaPengunjung()

function namaPengunjung() {
  let nama = prompt("Masukkan Nama Anda : ");

  document.getElementById("nama").innerHTML = `HI ${nama}, `;
}

function resultForm(event) {
  event.preventDefault();
  const name = document.getElementById("name-input").value;
  const tempatL = document.getElementById("tempatLahir").value;
  const jk = document.querySelector("input[name='jk']:checked");
  const message = document.getElementById("message-input").value;

  if (jk.checked) {
    documentgetElementById;
  }

  document.getElementById("nama-result").innerHTML = `: ${name}`;
  document.getElementById("tempatL").innerHTML = `: ${tempatL}`;
  document.getElementById("jk").innerHTML = `: ${jk}`;
  document.getElementById("message").innerHTML = `: ${message}`;
}

resultForm();
