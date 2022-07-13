const S3UploadImages = require('../services/awsS3');
const path = require('path');

class UploadImage {
  constructor(){}

  async uploadAWS(nameImage, folder = '../images/'){
   const pathImage = path.join(__dirname,folder,nameImage); 
   const url = await new S3UploadImages().uploadImage(nameImage, pathImage);
   return url;
  }
}

module.exports = UploadImage;

