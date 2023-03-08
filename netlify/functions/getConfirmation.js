var Parse = require('parse/node');

Parse.serverURL = process.env.VUE_APP_BACK_URL;
Parse.initialize(
    process.env.VUE_APP_APP_ID, // This is your Application ID
    process.env.VUE_APP_JAVASCRIPT_KEY // This is your Javascript key
  );

exports.handler = async (event, context) => {
    const { telephone } = event.queryStringParameters;
    const ConfirmationParse = Parse.Object.extend('Confirmation');
    const query = new Parse.Query(ConfirmationParse);
    query.equalTo('telephone', telephone);
    const response = await query.find(); 
    console.log(JSON.stringify(response,"",2));      
    
    let obj={}
    if(response.length >0){
        obj={
            fullname:response[0].get('fullname'),
            telephone:response[0].get('telephone'),
            objectId:response[0].get('objectId'),
            comments:response[0].get('comments'),
            assistance:response[0].get('assistance'),
            guests:response[0].get('guests')
        }
        return {
            statusCode: 200,
            body: JSON.stringify(obj)
          };
    }else{
        return {
            statusCode: 204,
            body: ''
          };
    }         
};