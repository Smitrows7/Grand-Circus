const { json } = require('body-parser');
const express = require('express');
const items = express.Router();

//logic for endpoints
const itemsList = [
    {id:'1',product:"Tide",price:7.50,quantity:1},
    {id:'2',product:"Dawn Dish Soap",price:3.50,quantity:1},
    {id:'3',product:"Bananas",price:6.00,quantity:6},
    {id:'4',product:"Blueberry",price:2.10,quantity:1},
    {id:'5',product:"Strawberry",price:2.50,quantity:1},
    {id:'6',product:"Yogurt",price:4.00,quantity:1},
    {id:'7',product:"Cheese",price:5.00,quantity:2},
    {id:'8',product:"Eggs",price:8.00,quantity:1},
    {id:'9',product:"Milk",price:5.00,quantity:2},
    {id:'10',product:"Sugar",price:5.00,quantity:1}
];

    items.get("/", (req, res) => {
        const maxPrice = req.query.price;
        const srchStr  = req.query.product;
        const pageSize = req.query.pgSize;
        let rtnItems = itemsList;
        if (maxPrice){
        //search itemlist
        rtnItems = itemsList.filter( (rtnItem) => {
        //return teacher === name;
          console.log(rtnItems);
          return rtnItem.price < maxPrice;
    
        });
        
        //res.json(rtnItems);
        }
        if (srchStr){

            rtnItems = rtnItems.filter((rtnItem) => {
             
               return rtnItem.product.toLowerCase().includes(srchStr.toLowerCase());
    
            })
    
        }

        if (pageSize){

            rtnItems = rtnItems.slice(0,pageSize-1); 
    
        }


        //else{
        // return whole list
        //res.json(itemsList);
        //}
        // the actual functionality
        // go to the database
        // set the data from the database to a variable
        // transform

      if (!rtnItems){
        res.status(404).send('Empty search list!!');
          
      }
      else{
      res.status(200).json(rtnItems);
      
    }
      //res.json(rtnItems);
    });
    
    // accept POST request at URI: /items
  
    items.post("/", (req, res) => {
      
      let rtnItems = itemsList;
      let newObj = req.body;
      console.log('req:',newObj);
        
      let postId = itemsList.length+1;
      let postProd = newObj.product;
      let postPrice = newObj.price;
      let postQty = newObj.quantity;
      const newItem = {
        id: itemsList.length+1,
        product: req.body.product,
        price:req.body.price,
        quantity:req.body.quantity
    };
      rtnItems.push(newItem);
      console.log('test:',rtnItems);
      res.status(201).json(rtnItems);
      //res.json(rtnItems);
       
    });
    
    // accept PUT request at URI: /students
    items.put("/:id", (req, res) => {
      
      const id = parseint(req.params.id);
      console.log("id:",id);
      //find the item to update from itemsList array
      const index = itemsList.findIndex( (i)=> i.id === id);
      const item = itemsList[index];
      //get item from body
      const newItem = req.body; 
      //removes 1 item from the array, starting at the index provided,
      // then adds newItem in its place
      // students.splice(index, 1, newStudent);
      itemsList.splice(index,1,newItem);
      res.json(itemsList);
    });
    
    // accept DELETE request at URI: /students
    /*teachers.delete("/", (req, res) => {
      // students.splice(index, 1);
      res.json("Deleting a teacher..");
    });*/
    
    
    //export module so it can be used in other files
    module.exports = items;