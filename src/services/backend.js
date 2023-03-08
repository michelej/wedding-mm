import axios from 'axios'

export class BackedService {    

    async searchConfirmation(telephone){
        return await axios.get("/.netlify/functions/getConfirmation?telephone="+telephone)        
    }

    async saveConfirmation(object){        
        return await axios.put("/.netlify/functions/saveConfirmation?id="+object.objectId,object)        
    }
}

export default new BackedService();