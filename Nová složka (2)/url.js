window.onload = function() {

  if (window.location.href.indexOf('?id=klavesnice') !=-1 ) {
const Klavesnice = [
  { name: 'Klavesnice1',   price:'1150'},  
  { name: 'Klavesnice2',   price:'2249'},
  { name: 'Klavesnice3',   price:'1081'},
  { name: 'Klavesnice4',   price:'1478'},
  { name: "Klavesnice5",   price:'987' },
  { name: 'Klavesnice6',   price:'647' }

  ]
  console.log(( Klavesnice.length + '  /  '+ Object.keys(Klavesnice).length ));
  let myTable = document.querySelector('#table');

/*   let headers = ["name", "price"] */
  let table = document.createElement('table');

 /*  headers.forEach(headerText => {
      let header = document.createElement('th');
      let textNode = document.createTextNode(headerText);
      header.appendChild(textNode);
      headerRow.appendChild(header);
  }); */

      let row = document.createElement('tr');
      table.className ="clearfix"

      
      let result = Klavesnice.map(a => a.price);
      Object.values(result).forEach(text => {
          let cell = document.createElement('p');
          
          cell.className= "price";
          let textNode = document.createTextNode(text);
          cell.appendChild(textNode);
          table.appendChild(cell);
      

       ;


      myTable.appendChild(table);


    });

      let myTablee = document.querySelector('#table');
      let tablee = document.createElement('table');
   
    
        
          tablee.className = "clearfixx";


          let resultt = Klavesnice.map(a => a.name);
          Object.values(resultt).forEach(textt => {
              var celll = document.createElement('p');
              
              celll.className= "name"
              
              let textNodee = document.createTextNode(textt);
              celll.appendChild(textNodee);
              tablee.appendChild(celll);
          
    
          

          myTablee.appendChild(tablee);
    let price = document.getElementsByClassName("price")
          for ( i = 0; i < price.length; i++) {
  
            price[i].classList +=price.length 
            console.log(price.length);

          }
 



 



  });
    let name = document.getElementsByClassName("name")
    console.log(name);

          for ( i = 0; i < name.length; i++) {
        
              name[i].className += name.length  
            
             console.log(name.length );
              
             }


  }

 





   if(window.location.href.indexOf('?id=saty') != -1)  {
     const Saty = [
    {name: 'Šaty2', price:'1450'},
    {name: 'šaty3',      price:'249'},
    { name: 'šaty4',price:'1781'},
    { name: 'šaty5',       price:'1478'},
    { name: "šaty6",        price:'9857'},
    { name: 'šaty1' ,    price:'687'}
  
  
  ]


var saty = document.getElementById("table");

Saty.forEach(player => saty.innerHTML += "<p>" + Object.values(player));

}


  if (window.location.href.indexOf('?id=sluchatka') !=-1 ) {
const Sluchatka = [
  {name: 'sluchatka1', price:'1150', images: "klavesnice.jpg"},  
  {name: 'sluchatka2',      price:'2249'},
  { name: 'sluchatka3',  price:'1081'},
  { name: 'sluchatka4',       price:'1478'},
  { name: "sluchatka5",        price:'987'},
  { name: 'sluchatka6' ,    price:'647'}

  ]
var sluchatka = document.getElementById("table");
Sluchatka.forEach(player => sluchatka.innerHTML += "<p>" + Object.values(player));
  

}   if (window.location.href.indexOf('?id=mys') != -1) {
     const Mys = [
    {name: 'mys1', price:'1450'},
    {name: 'mys2',      price:'249'},
    { name: 'mys3',price:'1781'},
    { name: 'mys4',       price:'1478'},
    { name: "mys5",        price:'9857'},
    { name: 'mys6' ,    price:'687'}
  
  
  ]


var mouse = document.getElementById("table");

Mys.forEach(player => mouse.innerHTML += "<p>" + Object.values(player));

}


  if (window.location.href.indexOf('?id=triko') !=-1 ) {
const Triko = [
  {name: 'triko1', price:'1150', images: "klavesnice.jpg"},  
  {name: 'triko2',      price:'2249'},
  { name: 'triko3',  price:'1081'},
  { name: 'triko4',       price:'1478'},
  { name: "triko5",        price:'987'},
  { name: 'triko6' ,    price:'647'}

  ]
var triko = document.getElementById("table");
  Triko.forEach(player => triko.innerHTML += "<p>" + Object.values(player));
  

}   if(window.location.href.indexOf('?id=pc') != -1)  {
     const Pc = [
    {name: 'pc1', price:'1450'},
    {name: 'pc2',      price:'249'},
    { name: 'pc3',price:'1781'},
    { name: 'pc4',       price:'1478'},
    { name: "pc5",        price:'9857'},
    { name: 'pc6' ,    price:'687'}
  
  
  ]


var pc = document.getElementById("table");

Pc.forEach(player => pc.innerHTML += "<p>" + Object.values(player));

}}

