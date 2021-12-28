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
         this.showMessage('Product Deleted Successfully', 'danger');
      }
   }

   showMessage(message, cssClass){
      const div = document.createElement('div');
      div.className = `alert alert-${cssClass}`;
      div.appendChild(document.createTextNode(message));
      //Showing in DOM
      const container = document.querySelector('.container');
      const app = document.querySelector('#app');
      container.insertBefore(div, app);
      setTimeout(()=>{
         document.querySelector('.alert').remove()
      },3000);
   }
}
// DOM Events
document.querySelector('#product__form').addEventListener('submit', (e)=>{
   const name = document.querySelector('#name').value;
   const price = document.querySelector('#price').value;
   const year = document.querySelector('#year').value;

   const product = new Product(name, price, year);
   const ui= new UI();

   //form validation 
   if(name === '' || price === '' || year === ''){
     return ui.showMessage('Complete Fields Please', 'danger');
   }

   ui.addProduct(product)
   ui.resetForm();
   ui.showMessage('Product Added Successfully','success');

   e.preventDefault()
})

document.querySelector('#product-list').addEventListener('click', (e) =>{
  const ui = new UI();
  ui.deleteProduct(e.target);
})
