import { home } from "./template.js";

$(document).ready(() => {
  page('/', index);
  page('/:partnerId', partner)
  page('/:category', category);
  page();

  function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
  }

  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  }

  $(".openbtn").click( () => openNav());
  $(".closebtn").click( () => closeNav());
})

function index() {
  $("#content").html(home());
};

function category(ctx) {
  $("#content").html("<h1>testezinho</h1>");
}