const AWSXRay = require('aws-xray-sdk-core');
const AWS = AWSXRay.captureAWS(require('aws-sdk'));
const dynamodb = new AWS.DynamoDB.DocumentClient();
const sns = new AWS.SNS();

exports.main = async function(event) {

  await dynamodb.get({
    TableName: 'notes',
    Key: { noteId: 'note1' },
  }).promise();

  await sns.publish({
    Message           : 'test',
    TopicArn          : 'arn:aws:sns:us-east-1:113345762000:test-topic',
  }).promise();

  return {
    statusCode: 200,
    body: 'successful',
  };
}
