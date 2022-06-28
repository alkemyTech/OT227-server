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

  async uploadImage(name, image) {
    // Read content from the file
    const fileContent = fs.readFileSync(image);

    // Setting up S3 upload parameters
    const params = {
      Bucket: process.env.AWS_BUCKET,
      Key: name, // File name you want to save as in S3
      Body: fileContent
    };

    await this.s3.upload(params).promise().then(data => data.Location)
  }
}

module.exports = S3UploadImages;
