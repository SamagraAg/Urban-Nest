import express from 'express';

const app = express();

// app.get('/',(req,res)=>{
//     res.json({Success:true})
// })

app.listen(3000, () => {
    console.log('Server is running on port 3000!');
    }
)