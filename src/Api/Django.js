//import $ from "jquery";
import axios from 'axios';


let debug = false;

let urlLogin="http://localhost:8000/rest-auth/login/"
let urlRegister="http://localhost:8000/users/register/"
let urlTasks="http://localhost:8000/tasks/"
let urlProfile="http://localhost:8000/profile/"
let urlUser="http://localhost:8000/users/user/"
if(!debug){
    urlLogin='https://backend-agenda.herokuapp.com/rest-auth/login/'
    urlRegister='https://backend-agenda.herokuapp.com/users/register/'
    urlTasks='https://backend-agenda.herokuapp.com/tasks/'
    urlProfile='https://backend-agenda.herokuapp.com/profile/'
    urlUser='https://backend-agenda.herokuapp.com/users/user/'
}


const api={

  //user Login
  logIn:(data)=>{
      return new Promise(function (resolve, reject) {
          const instance = axios.create({
              baseURL: urlLogin,
              // timeout: 2000,
              headers: {
                  'Content-Type': 'application/json',
                  //'Authorization': 'Bearer ' + userToken
              }
          });
          instance.post('', data)
              .then(function (response) {
                  resolve(response.data);
              })
              .catch(function (error) {
                  console.log('el error: ', error.response);
                  reject(error);
              });
      });
  },
//user user

    getUser:()=>{
      const userToken = JSON.parse(localStorage.getItem('userAgendaToken'));
      return new Promise(function (resolve, reject) {
          const instance = axios.create({
              baseURL: urlUser,
              // timeout: 2000,
              headers: {
                  'Content-Type': 'application/json',
                  'Authorization': 'Token ' + userToken
              }
          });
          instance.get('')
              .then(function (response) {
                  resolve(response.data);
              })
              .catch(function (error) {
                  console.log('el error: ', error.response);
                  reject(error);
              });


      });

    },


}


export default api;
