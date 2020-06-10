const multer = require('multer');

const storage = multer.diskStorage({
    destination : (req, file, callback) => {
        callback(null, './uploads/')
    },
    fileName  : (req, file, callback) => {
        callback(null, Date().now() + '-' + file.originalName)
    }
});

const upload = multer({
    storage : storage,
  
});

module.exports = upload;