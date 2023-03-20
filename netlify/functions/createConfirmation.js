var Parse = require('parse/node');

Parse.serverURL = process.env.VUE_APP_BACK_URL;
Parse.initialize(
    process.env.VUE_APP_APP_ID, // This is your Application ID
    process.env.VUE_APP_JAVASCRIPT_KEY // This is your Javascript key
  );

exports.handler = async (event, context) => {    
    const data = JSON.parse(event.body);    
    try {
        const object = new Parse.Object('Confirmation');
        object.set('fullname',data.fullname);
        object.set('telephone',data.telephone);
        object.set('assistance',data.assistance);
        object.set('guests',data.guests);
        object.set('comments',data.comments);
        object.set('ipAddress',data.ipAddress);
        object.set('allergies',data.allergies);
        object.set('autocar',data.autocar);
    
        const response = await object.save();
        return {
            statusCode: 200,
            body: JSON.stringify(response)
          };
    } catch(error)  {
        return {
            statusCode: 404,
            body: error
          };
    }        
};