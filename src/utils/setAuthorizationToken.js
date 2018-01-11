import axios from 'axios';

export default function setAuthorizationToken(token){
  if(token){
    axios.default.headers.common['Authorization']=`Bearer ${token}`;
  }else{
    delete axios.default.headers.common['Authorization'];
  }
}
