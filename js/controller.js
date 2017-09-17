// Product buttons
var products = [{name: "Banana", price: 0.69}, {name: "Whole Milk Gallon", price: 2.99}, {name: "Potato Chips", price: 1.59}];
var banana = {name: "Banana", price: 0.69};
var grocery_list = [];
var recall_number = function(index){
	return function(){
		alert(index);
	}
}
$(document).ready(function() {
	for(var item in products){
		var button = $('<button class="btn btn-outline-info">'+ products[item].name + ' | $' + products[item].price + '</button>');
		button.click(recall_number(item));
		button.appendTo(".products");
	}
});