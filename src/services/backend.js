import axios from 'axios'
/*var Parse = require('parse');

Parse.serverURL = process.env.VUE_APP_BACK_URL;
Parse.initialize(
    process.env.VUE_APP_APP_ID, // This is your Application ID
    process.env.VUE_APP_JAVASCRIPT_KEY // This is your Javascript key
  );*/

export class BackedService {    

    /*async searchConfirmation(telephone){  
        const Confirmation = Parse.Object.extend('Confirmation');
        const query = new Parse.Query(Confirmation);
        query.equalTo('telephone', telephone);
        return await query.find();            
    }*/

    async searchConfirmation(telephone){
        return await axios.get("/.netlify/functions/getConfirmation?telephone="+telephone)        
    }
}

export default new BackedService();