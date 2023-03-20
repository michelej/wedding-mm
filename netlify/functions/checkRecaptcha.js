const axios = require('axios');

exports.handler = async (event, context) => {
    const response = JSON.parse(event.body);
    try {
        const result = await axios({
            method: 'post',
            url: 'https://www.google.com/recaptcha/api/siteverify',
            params: {
                secret: process.env.VUE_APP_RECAPTCHA_SERVER_KEY,
                response: response.token
            }
        });        
        if(result.data.success){
            return {
                statusCode:200,
                body:'OK'
            }
        }else{
            return {
                statusCode: 404,
                body: result.data.error-codes
            };    
        }                
    } catch (error) {
        return {
            statusCode: 404,
            body: error
        };
    }
};