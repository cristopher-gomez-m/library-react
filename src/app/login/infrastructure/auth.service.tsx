import axios from "axios";

export const hadleLogin = (form: validatedForm) => {
  const route:string = 'http://localhost:3000/login';
 return axios.post('',form)
};
