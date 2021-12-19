'use strict';

const AWS = require('aws-sdk');
const s3 = new AWS.S3();

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
