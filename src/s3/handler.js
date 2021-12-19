'use strict';

const AWS = require('aws-sdk');
const s3 = new AWS.S3();

// S3 Trigger To Lambda Function
module.exports.s3TriggerToLambda = async (event) => {
  const today = new Date();
  console.log(today);
  var params = {
      Bucket : "testbucketfromlambda555",
         Key : "test3.txt",
        Body : today.toString()
  };
  var data = await s3.putObject(params).promise();
  return data;
};

// Count Items In S3 Bucket Function
module.exports.countItemsInS3Bucket = async (event) => {
  const data = await s3.listObjectsV2({Bucket: "hydoodle-starter"}).promise();
  console.log(data.KeyCount);
  return data.KeyCount;
};