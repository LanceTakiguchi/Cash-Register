// Product buttons
var products = [{name: "Banana", price: 0.69}, {name: "Whole Milk Gallon", price: 2.99}, {name: "Potato Chips", price: 1.59}];
var banana = {name: "Banana", price: 0.69};
var grocery_list = [];
/*var add_to_list = function(item){
	grocery_list.push(products[item]);
	console.log(grocery_list);
}*/
var add_to_list = function(){
	console.log("Hello");
}
$(document).ready(function() {
	for(var item in products){
		var button = $('<button class="btn btn-outline-info">'+ products[item].name + ' | $' + products[item].price + '</button>');
		button.click(function(){
			console.log("Hello");
		});
		button.appendTo(".products");
	}
});