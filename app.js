// https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/EventBridge.html#putEvents-property

const AWS = require('aws-sdk');

//console.log(AWS.config);

const eventBridge = new AWS.EventBridge({ region: 'eu-west-1' });
const EVENT_BUS_NAME = 'DataModel_Events';
const DETAIL_TYPE = 'datamodelEventBusTest';
const SOURCE = 'srm.tenantId.customDataModel';
const detail = "{\"payload\": { \"data\": { \"collection\": \"content\", \"contentType\": \"movie\", \"status\": \"Ready for Air\", \"descriptorTitle\": \"any\", \"modifyingUser\":\"user02\"} } }";

var params = {
    Entries: [
        {
            Detail: detail,
            DetailType: DETAIL_TYPE,
            EventBusName: EVENT_BUS_NAME,
            Source: SOURCE,
            Time: new Date()
        }
    ]
};

eventBridge.putEvents(params, function (err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else console.log(data);           // successful response
});