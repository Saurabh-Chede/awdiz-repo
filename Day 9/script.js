const get = document.querySelector(".ghost");
const download = addEventListener.apply();

get.addEventListener("click", () => {
  console.log(`printf is python syntax`);
});

async function readMore() {
  let read = await fetch(`https://google.com`);
  let data = await read.blob("");
  console.log(data);
}
