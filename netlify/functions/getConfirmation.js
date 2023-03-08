var Parse = require('parse');

Parse.serverURL = process.env.VUE_APP_BACK_URL;
Parse.initialize(
    process.env.VUE_APP_APP_ID, // This is your Application ID
    process.env.VUE_APP_JAVASCRIPT_KEY // This is your Javascript key
  );

exports.handler = async (event, context) => {
    const { telephone } = event.queryStringParameters;
    const Confirmation = Parse.Object.extend('Confirmation');
    const query = new Parse.Query(Confirmation);
    query.equalTo('telephone', telephone);
    const response = await query.find();            
  
    return {
      statusCode: 200,
      body: JSON.stringify(response)
    };
  };