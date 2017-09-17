// Product buttons
var products = [{name: "Banana", price: 0.69}, {name: "Whole Milk Gallon", price: 2.99}, {name: "Potato Chips", price: 1.59}];
var banana = {name: "Banana", price: 0.69};
var grocery_list = [];
var recall_number = function(index){
	return function(){
		grocery_list.push(products[index]);
		console.log(grocery_list);
		add_item(products[index]);
	}
}
var add_item = function(product){
		var listing = '<tr><td> ';
		listing += product.name; 
		listing += ' </td><td> '
		listing += product.price;
		listing += ' </td><td> 1 </td><td> '
		listing += product.price;
		listing += ' </td><td class="trash"> <button class="btn btn-danger"><i class="fa fa-trash-o" aria-hidden="true"></i></button> </td></tr>';
		var item = $(listing);
		item.appendTo(".bill");
	}
$(document).ready(function() {
	for(var item in products){
		var button = $('<button class="btn btn-outline-info">'+ products[item].name + ' | $' + products[item].price + '</button>');
		button.click(recall_number(item));
		button.appendTo(".products");
	}
});