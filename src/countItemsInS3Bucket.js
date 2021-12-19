'use strict';

const AWS = require('aws-sdk');
const s3 = new AWS.S3();

module.exports.countItemsInS3Bucket = async (event) => {
    const data = await s3.listObjectsV2({Bucket: "hydoodle-starter"}).promise();
    console.log(data.KeyCount);
    return data.KeyCount;
  };