var LPAWS = {};

// Initialize the Amazon Cognito credentials provider
AWS.config.region = 'eu-central-1'; // Region
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'eu-central-1:750e4d83-1b61-482c-9257-c84c577c10c9',
});

LPAWS.sendToTopic = function() {
    var sns = new AWS.SNS();
    var params = {
        //Message: 'Hello topic', /* required */
        Message: document.querySelector('#input-msg').value,
        Subject: 'Browser SNS publish - contact form',
        TopicArn: 'arn:aws:sns:eu-central-1:322447592164:email_address'
    };
    sns.publish(params, function(err, data) {
        if (err) console.log(err, err.stack); // an error occurred
        else     console.log(data);           // successful response
    });
};