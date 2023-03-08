import axios from 'axios'

export class BackedService {    

    async searchConfirmation(telephone){
        return await axios.get("/.netlify/functions/getConfirmation?telephone="+telephone)        
    }
}

export default new BackedService();