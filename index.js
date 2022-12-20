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
app.post('/add-friend-name', (req,res)=>{
     const {id, title, name, email} = req.body;

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


app.get('/friend-name-by-id', (req, res) => {
    // read id from query params
    const id = req.query.id
  
    db.forEach((item) => {
      if (item.id == id) {
        return res.json({
          success: true,
          data: item,
          message: 'Name fetched successfully'
        })
      }
    })
  
    res.json({
      success: false,
      data: null,
      message: 'Name not found'
    })
  })
  
  app.get('/delete-name-by-id', (req, res) => {
    const id = req.query.id
  
    db.forEach((item, index) => {
      if (item.id == id) {
        db.splice(index, 1)
        return res.json({
          success: true,
          data: db,
          message: 'Name deleted successfully'
        })
      }
    })
  
    res.json({
      success: false,
      data: null,
      message: 'Name not found'
    })
  })
  
  app.get('/name-by-category', (req, res) => {
    const category = req.query.category
  
    const temp = []
  
    db.forEach((item) => {
      if (item.category === category) {
        temp.push(item)
      }
    })
  
    res.json({
      success: true,
      data: temp,
      message: `names for ${category} fetched successfully`
    })
  })


app.listen(5000, ()=>{
    console.log('Running on port 5000')
})