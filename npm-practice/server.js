// require the Express module
const express = require("express");
// creates an instance of an Express server
const app = express();
// define the port
const port = 3000;
// run the server
app.listen(port, () => console.log(`Listening on
port: ${port}.`));

const students = ["Winne","Minnie","Mickey"];

app.get("/students", (req,res) => {
//actual functionality
res.json(students);
})

// accept POST request at URI: /students
app.post("/students", (req, res) => {
    //students.push(newStudent)
    res.json("Adding a student..");
  });
  // accept PUT request at URI: /students
  app.put("/students", (req, res) => {
    //students.splice(index,1,newStudent); 
    res.json("Updating a student..");
  });
  // accept DELETE request at URI: /students
  app.delete("/students", (req, res) => {
    //students.splice(index,1); 
    res.json("Deleting a student..");
  });