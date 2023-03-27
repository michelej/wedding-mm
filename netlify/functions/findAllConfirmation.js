var Parse = require('parse/node');

Parse.serverURL = process.env.VUE_APP_BACK_URL;
Parse.initialize(
    process.env.VUE_APP_APP_ID, // This is your Application ID
    process.env.VUE_APP_JAVASCRIPT_KEY // This is your Javascript key
);

exports.handler = async (event, context) => {
    try {        
        const Confirmation = Parse.Object.extend('Confirmation');
        const query = new Parse.Query(Confirmation);   
        const results = await query.find();        
        let objs = []
        for (const object of results) {             
            let obj = {
                telephone: object.get('telephone'),
                fullname: object.get('fullname'),
                assistance: object.get('assistance'),
                guests: object.get('guests'),
                comments: object.get('comments')?object.get('comments'):'',
                ipAddress: object.get('ipAddress'),
                allergies: object.get('allergies')?object.get('allergies'):'',
                autocar: object.get('autocar')
            }
            objs.push(obj);
        }
        return {
            statusCode: 200,
            body: JSON.stringify(objs)
        };
    } catch (error) {
        return {
            statusCode: 400,
            body: JSON.stringify(error)
        };
    }
};