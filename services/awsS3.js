const AWS = require('aws-sdk');
const fs = require('fs');
require('dotenv').config();

class S3UploadImages {
  constructor() {
    this.s3 = new AWS.S3({
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_PRIVATE_ACCESS_KEY,
    });
  }

  uploadImage(name, image) {
    
    const fileContent = fs.readFileSync(image);

    const params = {
      Bucket: process.env.AWS_BUCKET,
      Key: name, 
      Body: fileContent
    };

    return new Promise((resolve, rejects) => {
     try {
      this.s3.upload(params).promise().then((data) => {resolve(data.Location)});
     } catch (error) {
      rejects(error);
     }
    });
  }
}

module.exports = S3UploadImages;
