class Product {
   constructor(name, price, year){
      this.name = name;
      this.price = price;
      this.year = year;
   }
}

class UI {
   addProduct(product){
      const productList = document.querySelector('#product-list');
      const element = document.createElement('div');

      element.innerHTML = `
         <div class="card text-center mb-3">
            <div class="card-body">
               <strong>Product Name</strong>: ${product.name}
               <strong>Product Price</strong>: ${product.price}
               <strong>Product Year</strong>: ${product.year}
               <a href="#" class="btn btn-danger" name="delete">Delete</a>
         </div>
      `
      productList.appendChild(element);
   }

   resetForm(){
      document.querySelector('#product__form').reset();
   }
   deleteProduct(e){
      if(e.name === 'delete'){
         e.parentElement.parentElement.parentElement.remove();
      }
   }

   showMessage(){

   }
}
// DOM Events
document.querySelector('#product__form').addEventListener('submit', (e)=>{
   const name = document.querySelector('#name').value;
   const price = document.querySelector('#price').value;
   const year = document.querySelector('#year').value;

   const product = new Product(name, price, year);
   const ui= new UI();

   ui.addProduct(product)
   ui.resetForm();

   e.preventDefault()
})

document.querySelector('#product-list').addEventListener('click', (e) =>{
  const ui = new UI();
  ui.deleteProduct(e.target);
})