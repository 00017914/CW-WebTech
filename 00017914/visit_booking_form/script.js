const form = document.querySelector("form");
const log = document.querySelector("#log");


form.addEventListener("submit", (event) => {
  const data = new FormData(form);
  let output = "";

  for (const [key, value] of data.entries()) {
    output += `${key}=${value}\r\n`;
  }

  log.innerText = output;
  event.preventDefault();
});

function openMenu() {
  const menu = document.getElementById("menu");
  if (menu) {
    menu.style.width = "350px";
  }
}

function closeMenu() {
  const menu = document.getElementById("menu");
  if (menu) {
    menu.style.width = "0";
  }
}
