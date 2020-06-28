const express = require('express');
const app = express();
const port = 4000;
const bodyParser = require('body-parser');
const cors = require('cors');
app.use(bodyParser.json());
app.use(cors());


app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "PUT, POST, GET, OPTIONS, DELETE");
    next();
});

var userRoute = require('./routes/user.route');
var loginRoute = require('./routes/login.route');
var courseRoute = require('./routes/course.route')
// var mailRoute = require('./routes/mail.route');
app.use('/course', courseRoute);
app.use('/user', userRoute);
app.use('/login', loginRoute);

// app.use('/mail', mailRoute);

// const upload = require('./multer');
// const cloudinary = require('./cloudinary');
// const fs = require('fs');


// app.use('/upload', upload.array('file'), async (req, res) => {
//   const uploader = async (path) => {
//     cloudinary.uploads(path, 'upload');
//   }

//   if (req.method === 'POST') {
//     const urls = [];
//     const files = req.files;

//     for (let file of files) {
//       const { path } = file;
//       const newPath = await uploader(path);
//       urls.push(newPath);
//       fs.unlinkSync(path);
//     }
//     res.status(200).send({
//       message: 'Upload complete',
//       data: urls
//     });
//   }
//   else {
//     res.status(405).send({
//       message: 'Upload not success'
//     })
//   }
// });






app.listen(port, () => console.log(`Example app listening on port ${port}!`));