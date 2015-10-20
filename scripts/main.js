'use strict';
var $ = require ('jquery');
window.$ = require('jquery');
window.jQuery = $;

var form = $('form');
var item = $('.item');
var price = $('.price');
var quantity = $('.quantity');
var itemArray = [];
var count=0;
var subtotal=0;
var tax=0;
var total=0;

form.on('submit', function(e){
	e.preventDefault();
	itemArray.push(item.val());
	$('#items').append('<div class="row"><div class="col s4"><h4>'+itemArray[count]+'</h4></div><div class="col s4"><h4>qty: '+$('.quantity').val()+'</h4></div><div class="col s4"><h4>$'+(parseFloat($('.price').val())*parseFloat($('.quantity').val())).toFixed(2)+'</h4></div></div>');
	count++;
	subtotal=subtotal+parseFloat($('.price').val())*parseFloat($('.quantity').val());
	$('.subtotal').html('Subtotal: $'+subtotal.toFixed(2));
	tax=(parseFloat(subtotal)*0.0825);
	$('.tax').html('Tax: $'+tax.toFixed(2));
	total = parseFloat(subtotal)+parseFloat(tax);
	$('.total').html('<h4><strong>Total: $'+total.toFixed(2)+'</strong></h4>');
	item.val('');
	price.val('');
	quantity.val('');
})
