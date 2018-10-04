export function home() {
  return `   
  <h1>Categorias</h1>
<div class="categories">
<a title="Parque" class="category" href="/parque">
  <i class="flaticon-park"></i>
</a>
<a title="Arte de Rua" class="category" href="/streetArt">
  <i class="flaticon-street-art"></i>
</a>
<a title="Museu" class="category" href="/museu">
  <i class="flaticon-venus"></i>
</a>
<a title="Musica" class="category" href="/musica">
  <i class="flaticon-electric-guitar"></i>
</a>
<a title="Tecnologia" class="category" href="/tecnologia">
  <i class="flaticon-gamepad"></i>
</a>
<a title="Tecnologia" class="category" href="/tecnologia">
  <i class="flaticon-masks"></i>
</a>
</div>`
};

export function renderPartner(){

  return `
  <h2  class='ml-5'> Cadastre seu cupom</h2>
      <!-- categoria -->
    <label  class='ml-5' for="formGroupExampleInput">Escolha a categoria</label> 
    <select   class='category ml-5' class="form-control form-control-sm">
      <option value="arte-de-rua">Arte de rua</option>
      <option value="museu">Museu</option>
      <option value="parque">Parque</option>
      <option value="tecnologia">Tecnologia</option>
      <option value="teatro">Teatro</option>
    </select>
    <style>
     .width-input{
        width: 70%;
      }
      .width-input-val{
        width: 30%;
      }
    </style>
    <form class='ml-5'>
      <div class="form-group">
        <label for="formGroupExampleInput">Nome do evento/Local </label>
        <input type="text" class=" name form-control  width-input id="formGroupExampleInput" placeholder="Nome do evento/Local">
      </div>
      <div class="form-group">
        <label for="formGroupExampleInput2"> Descrição</label>
        <textarea type="text" class="description form-control width-input" id="formGroupExampleInput2" placeholder="Descrição"></textarea>
      </div>
      <!-- valores -->
      <form class="needs-validation width-input" novalidate>
      <div class="form-row width-input">
        <div class="col-md-4 mb-3 width-input">
          <label for="validationTooltip01">Valor original</label>
          <input type="text" class="original-value form-control width-input" id="validationTooltip01" placeholder="Valor original" value="0,00 R$" required>
          <div class="valid-tooltip">
            Looks good!
          </div>
          </div>
                             
          <div class="form-group">
            <label for="formGroupExampleInput2"> Valor com Desconto</label>
            <input type="text" class="promo-value form-control" id="formGroupExampleInput2" placeholder="0,00 R$">
          </div>
          <div class="form-group">
                                                   
              </div>
              </div>
            </form>
            <div class="ml-5 form-group">
              <label for="formGroupExampleInput2"> Validade</label>
              <input type="text" class="expiration-date form-control width-input-val" id="formGroupExampleInput2" placeholder="Validade">
            </div>
            <form>
              <div class="ml-5 form-row width-input">
                <label for="formGroupExampleInput2"> Endereço</label>
                <div class="col-7">              
                  <input type="text" class="address form-control " placeholder="Endereco">
                </div>

              </div>
            </form>
            <form>
              <div class="ml-5 form-row width-input">
                <label for="formGroupExampleInput2">Site</label>
                <div class="col-7">              
                  <input type="text" class="website address form-control " placeholder="Site">
                </div>
                
              </div>
            </form>
            <form>
              <div class="ml-5 form-row width-input">
                <label for="formGroupExampleInput2">Numero de cupons</label>
                <div class="col-7">              
                  <input type="text" class="quantity form-control " placeholder="Numero de cupons">
                </div>
                
              </div>
            </form>
            <form>
              <div  class="form-group ml-5">
                <label for="exampleFormControlFile1 ">Escolha uma imagem </label>
                <input type="text" class="image form-control-file" id="exampleFormControlFile1">
              </div>
            </form>
              <button  type="submit" class="ml-5 btn btn-primary add-product">Cadastrar</button>
            </form>
            `;
}

/*export function renderPartner() {
  return `
    <label for="formGroupExampleInput">Nome do evento/Local </label>
    <input type="text" class="name form-control  width-input id="formGroupExampleInput" placeholder="Nome do evento/Local">
    <button  type="submit" class="ml-5 btn btn-primary add-product">Cadastrar</button>
  `;
}*/