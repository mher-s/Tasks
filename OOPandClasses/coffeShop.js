class CoffeeShop {
  constructor(name) {
    this.amount = 0;
    this.name = name;
    this.orders = [];
    this.menu = [
      { productName: "pizza", type: "food", price: 10 },
      { productName: "kebab", type: "food", price: 15 },
      { productName: "coffee", type: "drink", price: 5 },
      { productName: "tea", type: "drink", price: 2 },
    ];
  }
  dueAmount() {
    for (let i = 0; i < this.orders.length; i++) {
      const orderItems = this.orders[i];
      for (let j = 0; j < this.menu.length; j++) {
        const menuItems = this.menu[j];
        if (orderItems === menuItems.productName) {
          this.amount += menuItems.price;
        }
      }
    }
    return this.amount; 
  }
  addOrder(orderItem) {
    for (let i = 0; i < this.menu.length; i++) {
      const element = this.menu[i];
      if (element.productName === orderItem) {
        this.orders.push(orderItem);
      }
    }
    if (this.orders.length === 0) {
      console.log("This item is currently unavailable!");
    }
    return this.orders;
  }
  fulfillOrder() {
    if (this.orders.length !== 0) {
      return `The ${this.orders} is ready`;
    } else {
      return "All orders have been fulfilled!";
    }
  }
  cheapestItem() {
    let lowestPrice = 0;
    for (let i = 0; i < this.menu.length; i++) {
      const element = this.menu[i];
      lowestPrice = Math.min(element.price);
    }
    return lowestPrice;
  }
  drinksOnly() {
    let allDrinks = [];
    for (let i = 0; i < this.menu.length; i++) {
      const element = this.menu[i];
      if (element.type === "drink") {
        allDrinks.push(element.productName);
      }
    }
    return allDrinks;
  }
  foodOnly() {
    let allFood = [];
    for (let i = 0; i < this.menu.length; i++) {
      const element = this.menu[i];
      if (element.type === "food") {
        allFood.push(element.productName);
      }
    }
    return allFood;
  }
}

let esim = new CoffeeShop("esim");

esim.addOrder("pizza");
esim.addOrder("coffee");
console.log(esim.orders);
console.log(esim.dueAmount());
