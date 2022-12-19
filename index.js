import express from 'express'
const app = express();

app.use(express.json());

// User array as a temporary database
const db = [{
    id:1, 
    title: 'close friend',
    name: 'Vikas',
    email: 'vikaskhulsing@gmail.com'
},
{
    id : 2,
    title: 'close friend',
    name: 'Saloni',
    email: 'saloniwarjukar@gmail.com'
},
{
    id:3,
    title: 'close friend',
    name : 'Shyam',
    email:'shyamkorade0@gmail.com'
}
]

// get all items
app.get('/all-friend-names', (req,res)=>{
    res.json({
        success:true,
        data:db,
        message: 'All names fetched successfully...'
    })
})

// if you want to add new item use post method
app.post('/add friend name', (req,res)=>{
    // const {id, title, name, email} = req.body;

    const newFriend ={
        id : 'id',
        title: 'title',
        name: 'name',
        email : 'email'
    }

    // Check if friend name already present in list
    db.forEach((item)=>{
        if (item.id == id)
    {
        return res.json({
        success: false,
        data: null,
        message : 'Name already exist'
    })
    }
    })

    db.push(newFriend);

    res.json({
        success:true,
        data: newFriend,
        message: 'Friend name addded successfully...'
    })
})



app.listen(5000, ()=>{
    console.log('Running on port 5000')
})