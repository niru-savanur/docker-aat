const express = require('express');
const path = require('path');
const app = express(),
      bodyParser = require("body-parser");
      port = 5000;
cors = require("cors");
// place holder for the data
app.use(cors({
    origin: '*'
}));


var tasks = [
    {id: 1, title: 'Task added appears here', status: false}
];

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../my-app/build')));

// app.get('/api/users', (req, res) => {
//   console.log('api/users called!')
//   res.json(users);
// });

// app.post('/api/user', (req, res) => {
//   const user = req.body.user;
//   console.log('Adding user:::::', user);
//   users.push(user);
//   res.json("user addedd");
// });

app.get('/api/tasks', (req, res)=>{
    console.log("sending tasks");
    
    try{
        res.json(tasks);
    }catch(e){
        console.log(e);
    }
    
});

app.post('/api/addtask', (req, res)=>{
    const task = req.body.task;
    console.log("Adding task ", task);
    tasks.push(task);
    res.json("Task added.");
});

app.post('/api/removetask', (req, res)=>{
    const tid = req.body.id;
    console.log("Removing task id ", tid);
    tasks = tasks.filter(task => task.id !== tid);
    res.json("Task removed.");
});

app.post('/api/updatetask', (req, res)=>{
    const task = req.body.task;
    console.log("updating task ", task);
    let removeOldRecord = [...tasks].filter(task => task.id !== updateData.id);
    tasks = [
      ...removeOldRecord, 
      task
    ]
    res.json("Updated.");
});

app.post('/api/mark', (req, res)=>{
    const tid = req.body.id;
    console.log("marking id ", tid);
    tasks = tasks.map(
        task => task.id === tid 
        ? ({ ...task, status: !task.status }) 
        : (task) 
    );
    res.json("marked.");
});

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, '../my-app/build/index.html'));
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});