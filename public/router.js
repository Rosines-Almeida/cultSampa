import { home } from "./template.js";
import { renderPartner } from "./template.js";


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

function partner(ctx) {
  console.log("1");

  $("#content").html(renderPartner());
  var database = firebase.database();
  var USER_ID = ctx.params.partnerId; 


  $(".add-product").click(function(event) {
    event.preventDefault();
        console.log("foi");

    const name = $(".name").val();
    const description = $(".description").val();
    const promoValue = $(".promo-value").val();
    const originalValue = $(".original-value").val();
    const discount = (originalValue/promoValue)*100;
    const address = $(".address").val();
    const category = $(".category").val();
    const website = $(".website").val();
    const quantity = $(".quantity").val();
    const expirationDate = $(".expiration-date").val();
    const image = $(".image").val();

    //const actualDate = moment().subtract(6, 'days').calendar(); 

    var postFromDB = database.ref('products/' + USER_ID).push({ //adiciona no banco de dados
      name,
      promoValue,
      originalValue,
      discount,
      address,
      website,
      category,
      quantity,
      expirationDate,
      image
    });

    //console.log(postFromDB.key);

/*    $(".products-area").prepend(`
      <div>
        <p>${name}<p> 
        <p>${promoValue}<p>
        <p>${originalValue}<p> 
        <p>${discount}<p>
        <p>${adress}<p> 
        <p>${phone}<p> 
        <p>${website}<p>
        <p>${expirationDate}<p>          
        <p>${quantity}<p>

      </div>`);*/
  });

}