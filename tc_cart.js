"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 1

   Author: Ryan Wahl
   Date:   2.27.19
   
   Filename: tc_cart.js
	
*/

// The variable to store the order total.
var orderTotal = 0;

// Stores the cartHTML which contains a table of the items.
var cartHTML = "<table> <tr> <th>Item</th><th>Description</th><th>Price</th><th>Qty</th><th>Total</th> </tr>";

// Loops through all of the items defined in the tc_order.js script.
for (var i = 0; i < item.length; i++) {
    // Starts a new row and adds an image in a data cell for the cartHTML.
    cartHTML += "<tr> <td><img src='tc_" + item[i] + ".png' alt='item' /></td>";
    // Adds in the cells for the item description, price, and quantity.
    cartHTML += `<td>${itemDescription[i]}</td> <td>$${itemPrice[i]}</td> <td>${itemQty[i]}</td>`;

    // The variable that stores the item cost.
    var itemCost = itemPrice[i] * itemQty[i];
    // Adds the item cost table cell to the html.
    cartHTML += "<td>$" + itemCost + "</td></tr>";
    // Adds the item cost to the total cost.
    orderTotal += itemCost;
}

// Adds the end of the HTML content to the variable.
cartHTML += "<tr> <td colspan='4'>Subtotal</td> <td>$" + orderTotal + "</td> </tr> </table>";

// Gets the element with the id of cart and sets the innerHTML to the cartHTML.
document.getElementById("cart").innerHTML = cartHTML;