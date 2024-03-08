import {configAxios} from "src/config/configAxios";

export async function getCSRFToken () {
    const response = await configAxios.get('/getCSRFToken');
    console.log('CSRFToken',response.data.CSRFToken);
   configAxios.defaults.headers.post['X-CSRF-Token'] = response.data.CSRFToken;
 };