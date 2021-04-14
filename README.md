# OnlineShopTask - Angular
This is a simple website for online grocery shopping

## Technologies
This project is built using Angular, HTML along with custom CSS and Bootstrap. 

## Goal
The idea behind this simple project is to simulate an online shop without its main functionalities - adding items to a cart, placing orders and delivering. 
The data(items) are coming from a file named "data.json", in which an array of objects is included to simulate a database for the items. 

## Functionality 
* Modules
  - Product => Contains the module of product, the properties of the product and the properties types.

* Components
  - Navbar => Displays a simple navbar functionality.
  - Showcase => The showcase displays the "logo" of the online shop.
  - Products => This component is responsible for gathering the data from the .json file, passing the products to the component Product-item and iterating over each item.
  - Product-item => Displays each item, styling it, and if an item is selected through the "More info" button a modal is opened, containing the information of the selected item.
