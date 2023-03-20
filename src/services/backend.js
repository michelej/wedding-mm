import axios from 'axios'

export class BackedService {    

    async searchConfirmation(telephone){
        return await axios.get("/.netlify/functions/getConfirmation?telephone="+telephone)        
    }

    async saveConfirmation(object){        
        return await axios.put("/.netlify/functions/saveConfirmation?id="+object.objectId,object)        
    }

    async createConfirmation(object){        
        return await axios.put("/.netlify/functions/createConfirmation",object)        
    }

    async saveConfirmationVersion(object){        
        return await axios.put("/.netlify/functions/saveConfirmationVersion",object)        
    }

    async checkRecaptcha(response){        
        const body = {
            secret: process.env.VUE_APP_RECAPTCHA_SERVER_KEY,
            response: response
        }
        return await axios.post("https://www.google.com/recaptcha/api/siteverify",body)        
    }
}

export default new BackedService();