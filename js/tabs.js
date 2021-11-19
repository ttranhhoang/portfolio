const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$(".tab-item");
const panes = $$(".tab-pane");
const line = $(".line");
const tabActive = $(".tab-item.active");

line.style.left = tabActive.offsetLeft + "px";
line.style.width = tabActive.offsetWidth + "px";


tabs.forEach((tab, index) => {
  const pane = panes[index];
  tab.onclick = () => {
    $(".tab-item.active").classList.remove("active");
    $(".tab-pane.active").classList.remove("active");

    line.style.left = tab.offsetLeft + "px";
    line.style.width = tab.offsetWidth + "px";

    tab.classList.add("active");
    pane.classList.add("active");
  };
});
const url = "https://jsonplaceholder.typicode.com/posts";
const fetchAPI = fetch(url);
fetchAPI
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    var htmls = data.map((post) => {
      return `<li>${post.title}</li>`;
    });
    var html = htmls.join("");
    document.querySelector(".post-block").innerHTML = html;
  })
  .catch((err) => console.log(err));

function log(level, time, message) {
  console.log(level, time, message);
}
// function errorLog(message){
//   log("error", "Today", message);
// }
const errorLog = log.bind("error", "today", null);
errorLog("lỗi nè");
