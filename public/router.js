$(document).ready(() => {
  page('/', index);
  page('/:category', category);
  page();
})

function index() {
  $("#content").html("<h1>teste</h1>");
};

function category(ctx) {
  $("#content").html("<h1>testezinho</h1>");
}