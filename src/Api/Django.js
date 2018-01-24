//import $ from "jquery";
import axios from 'axios';


let debug = true;

let urlLogin="http://localhost:8000/rest-auth/login/"
let urlRegister="http://localhost:8000/users/register/"
let urlTasks="http://localhost:8000/tasks/"
let urlProfile="http://localhost:8000/profile/"
let urlUser="http://localhost:8000/rest-auth/user/"
let urlMeProfile="http://localhost:8000/users/meprofile/"
let urlPassChan="http://localhost:8000/rest-auth/password/change/";
if(!debug){
    urlLogin='https://backend-agenda.herokuapp.com/rest-auth/login/'
    urlRegister='https://backend-agenda.herokuapp.com/users/register/'
    urlTasks='https://backend-agenda.herokuapp.com/tasks/'
    urlProfile='https://backend-agenda.herokuapp.com/profile/'
    urlUser='https://backend-agenda.herokuapp.com/rest-auth/user/'
    urlPassChan='https://backend-agenda.herokuapp.com/rest-auth/password/change/'
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
//User RegisterContainer
    newUser:(register)=>{
      const userToken = JSON.parse(localStorage.getItem('userAgendaToken'));
      return new Promise(function (resolve, reject) {
          const instance = axios.create({
              baseURL: urlRegister,
              // timeout: 2000,
              headers: {
                  'Content-Type': 'application/json',
                  'Authorization': 'Token ' + userToken
              }
          });
          instance.post('',register)
              .then(function (response) {
                  resolve(response.data);
              })
              .catch(function (error) {
                  console.log('el error: ', error.response);
                  reject(error);
              });
      });
    },

//user Profile
    getProfile:()=>{
      const userToken = JSON.parse(localStorage.getItem('userAgendaToken'));
      return new Promise(function (resolve, reject) {
          const instance = axios.create({
              baseURL: urlMeProfile,
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
    //user saveProfile
    saveProfile:(profile)=>{
      let data = new FormData()
      for(let key in profile){
        data.append(key, profile[key])
      }
        return new Promise(function (resolve, reject) {
            const userToken = JSON.parse(localStorage.getItem('userAgendaToken'));
            const instance = axios.create({
                baseURL: urlProfile,
                // timeout: 2000,
                headers: {
                    'Content-Type': undefined,
                    'Authorization': 'Token ' + userToken
                }
            });
            instance.patch(profile.id+'/', data)
                .then(function (response) {
                    resolve(response.profile);
                })
                .catch(function (error) {
                    console.log(profile);
                    console.log('el error: ', error.response);
                    reject(error);
                });


        });
    },

    //change password
    changePass:(password)=>{
        return new Promise(function (resolve, reject) {
            const userToken = JSON.parse(localStorage.getItem('userAgendaToken'));
            const instance = axios.create({
                baseURL: urlPassChan,
                // timeout: 2000,
                headers: {
                    'Content-Type': undefined,
                    'Authorization': 'Token ' + userToken
                }
            });
            instance.post('', password)
                .then(function (response) {
                    resolve(response.password);
                })
                .catch(function (error) {
                    console.log('el error: ', error.response);
                    reject(error);
                });


        });
    },

}



export default api;
