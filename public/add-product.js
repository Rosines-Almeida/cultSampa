var database = firebase.database();
var USER_ID = window.location.search.match(/\?id=(.*)/)[1]; 

$(document).ready(function(){

  $(".add-product").click(function(event) {
    event.preventDefault();
        console.log("foi");

    const name = $(".name").val();


    var postFromDB = database.ref('products/' + USER_ID).push({ //adiciona no banco de dados
      name,
     });


    
    /*const description = $(".description").val();
    const promoValue = $(".promo-value").val();
    const originalValue = $(".original-value").val();
    const discount = (originalValue/promoValue)*100;
    const address = $(".adress").val();
    const phone = $(".phone").val();
    const category = $(".category").val();
    const website = $(".discount").val();
    const quantity = $(".quantity").val();
    const expirationDate = $(".expiration-date").val();
    const image = $(".image").val();

    const actualDate = moment().subtract(6, 'days').calendar(); */



/*    var postFromDB = database.ref('products/' + USER_ID).push({ //adiciona no banco de dados
      name,
      promoValue,
      originalValue,
      discount,
      adress,
      phone,
      website,
      category,
      quantity,
      expirationDate
    });
*/
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