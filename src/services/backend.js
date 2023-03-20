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
        return await axios.post("/.netlify/functions/checkRecaptcha",{token:response})
    }
}

export default new BackedService();