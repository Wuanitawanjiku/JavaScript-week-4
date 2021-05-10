class Mkulima{
    constructor(){
    this.farms = [];
    this.groceryVendors = [];
    this.products = [];
    }

addFarm(farmid, name, farmer, phone, address){
    return this.farms.push({farmid, name, farmer, phone, address});
}

removeFarm(farmid){
    let farms = this.farms.find(farm => 
        farm.farmid === farmid)
        return delete this.farms[farms];
    
}

updateFarm(farmid, name, phone, address){
     var newUpdates = {farmid, name, phone, address};
     this.farms.farmid = farmid;
     this.farms.name = name;
     this.farms.phone = phone;
     this.farms.address = address;
     return newUpdates;
 }    

 getFarm(farmid){
     let farms = this.farms.find(farm => 
        farm.farmid === farmid);
        return this.farms;

 }


addProduct(productid, name, price){ 
   return this.products.push({productid, name, price}); 
}
    

removeProduct(productid){
     let product = this.products.find(product => 
        product.productid === productid);
        return delete this.products[product];
}

updateProduct(productid, name, price){
    var newProduct = {productid, name, price};
     this.products.productid= productid;
     this.products.name = name;
     this.products.price = price;
     return newProduct;
}
getProduct(productid){
    let product = this.products.find(product =>
        product.productid === productid);
        return product;    
}

printProducts(){
    for (let product of this.products){
            console.log(`${product.name}:${product.price}`);
        }
    }

calculateOrderCost(productid, quantity){
  let cost = this.products.find(cost =>
    cost.productid === productid);
    return cost.price*quantity;
}
}

let mkulima = new Mkulima();
console.log(mkulima.addFarm(102,"Solio Farm","Wanjala","0110023445","54012-3245"));
console.log(mkulima.addFarm(202,"Farm Fresh","Waithera","0712345672","54002-00200"));
console.log(mkulima.addFarm(302,"Brookside Farm","Muigai","0720005421","54012-00100"));

console.log(mkulima.removeFarm(["Farm Fresh"]));
console.log(mkulima.removeFarm(302));


console.log(mkulima.updateFarm(402,"Gatundu Farm", "0110299209", "23439-2394"));

console.log(mkulima.getFarm(102));

console.log(mkulima.addProduct(502, "Macademia Nuts", 530));
console.log(mkulima.addProduct(602, "Ovacados", 30));

console.log(mkulima.removeProduct(202));

console.log(mkulima.updateProduct(702, "Bread", 50.0));

console.log(mkulima.getProduct(502));

mkulima.printProducts();

console.log(mkulima.calculateOrderCost(602, 20));    
