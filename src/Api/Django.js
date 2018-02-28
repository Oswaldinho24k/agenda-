///import $ from "jquery";
import axios from 'axios';


let debug = true;

let urlLogin="http://localhost:8000/rest-auth/login/"
let urlRegister="http://localhost:8000/users/register/"
let urlTasks="http://localhost:8000/tasks/"
let urlProfile="http://localhost:8000/profile/"
let urlUser="http://localhost:8000/rest-auth/user/"
let urlMeProfile="http://localhost:8000/users/meprofile/"
let urlPassChan="http://localhost:8000/rest-auth/password/change/";
let urlProject='http://localhost:8000/project/'
let urlMeeting='http://localhost:8000/meeting/'
let urlUsersAll='http://127.0.0.1:8000/usersall/'
let urlFile='http://localhost:8000/file/'
let urlAction='http://localhost:8000/action/'

if(!debug){
    urlLogin='https://backend-arnulfo.herokuapp.com/rest-auth/login/'
    urlRegister='https://backend-arnulfo.herokuapp.com/users/register/'
    urlTasks='https://backend-arnulfo.herokuapp.com/tasks/'
    urlProfile='https://backend-arnulfo.herokuapp.com/profile/'
    urlUser='https://backend-arnulfo.herokuapp.com/rest-auth/user/'
    urlMeProfile="https://backend-arnulfo.herokuapp.com/users/meprofile/"
    urlPassChan='https://backend-arnulfo.herokuapp.com/rest-auth/password/change/'
    urlProject='https://backend-arnulfo.herokuapp.com/project/'
    urlMeeting='https://backend-arnulfo.herokuapp.com/meeting/'
    urlUsersAll='https://backend-arnulfo.herokuapp.com/usersall/'
    urlFile='https://backend-arnulfo.herokuapp.com/file/'
    urlAction='https://backend-arnulfo.herokuapp.com/action/'
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

//user Me Profile
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
      if(typeof profile.avatar === 'string'){
        data.delete('avatar')
      }else{
        data.append('avatar', profile.avatar);
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
                    resolve(response.data);
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
                    'Content-Type': 'application/json',
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
    //user ALL Profiles
        getAllProfiles:()=>{
          const userToken = JSON.parse(localStorage.getItem('userAgendaToken'));
          return new Promise(function (resolve, reject) {
              const instance = axios.create({
                  baseURL: urlProfile,
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

//new Meeting
    newMeeting:(meeting)=>{

        return new Promise(function (resolve, reject) {
            const userToken = JSON.parse(localStorage.getItem('userAgendaToken'));
            const instance = axios.create({
                baseURL: urlMeeting,
                // timeout: 2000,
                headers: {
                    'Content-Type': undefined,
                    'Authorization': 'Token ' + userToken
                }
            });
            instance.post('',meeting)
                .then(function(response) {
                    resolve(response.data);
                })
                .catch(function (error) {
                    console.log('el error: ', error.response);
                    reject(error);
                });


        });
    },
//get Meeting
    getMeeting:()=>{
      const userToken = JSON.parse(localStorage.getItem('userAgendaToken'));
      return new Promise(function (resolve, reject) {
          const instance = axios.create({
              baseURL: urlMeeting,
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
//get users ALL
getAllUser:()=>{
  const userToken = JSON.parse(localStorage.getItem('userAgendaToken'));
  return new Promise(function (resolve, reject) {
      const instance = axios.create({
          baseURL: urlUsersAll,
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

  //get all tasks
  getTasks:()=>{
    const userToken = JSON.parse(localStorage.getItem('userAgendaToken'));
    return new Promise(function (resolve, reject) {
        const instance = axios.create({
            baseURL: urlTasks,
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
  // nueva Tarea
  newTask:(task)=>{

      return new Promise(function (resolve, reject) {
          const userToken = JSON.parse(localStorage.getItem('userAgendaToken'));
          const instance = axios.create({
              baseURL: urlTasks,
              // timeout: 2000,
              headers: {
                  'Content-Type': 'application/json',
                  'Authorization': 'Token ' + userToken
              }
          });
          instance.post('',task)
              .then(function(response) {
                  resolve(response.data);
              })
              .catch(function (error) {
                  console.log('el error: ', error.response);
                  reject(error);
              });


      });
  },
  //Delete Task
  deleteTask:(taskId)=>{

      return new Promise(function (resolve, reject) {
          const userToken = JSON.parse(localStorage.getItem('userAgendaToken'));
          const instance = axios.create({
              baseURL: urlTasks,
              // timeout: 2000,
              headers: {
                  'Content-Type': 'application/json',
                  'Authorization': 'Token ' + userToken
              }
          });
          instance.delete(taskId+'/')
              .then(function (response) {
                  resolve(response.data);
              })
              .catch(function (error) {
                  console.log('el error: ', error.response);
                  reject(error);
              });


      });
  },

  //edit Tasks
  editTask:(task)=>{

      return new Promise(function (resolve, reject) {
          const userToken = JSON.parse(localStorage.getItem('userAgendaToken'));
          const instance = axios.create({
              baseURL: urlTasks,
              // timeout: 2000,
              headers: {
                  'Content-Type': undefined,
                  'Authorization': 'Token ' + userToken
              }
          });
          instance.patch(task.id+'/',task)
              .then(function (response) {
                  resolve(response.data);
              })
              .catch(function (error) {
                  console.log('el error: ', error.response);
                  reject(error);
              });


      });
  },
  //Delete User
  deleteUser:(userId)=>{

      return new Promise(function (resolve, reject) {
          const userToken = JSON.parse(localStorage.getItem('userAgendaToken'));
          const instance = axios.create({
              baseURL: urlUsersAll,
              // timeout: 2000,
              headers: {
                  'Content-Type': 'application/json',
                  'Authorization': 'Token ' + userToken
              }
          });
          instance.delete(userId+'/')
              .then(function (response) {
                  resolve(response.data);
              })
              .catch(function (error) {
                  console.log('el error: ', error.response);
                  reject(error);
              });


      });
  },
  //Edit User
  editUser:(user)=>{

      return new Promise(function (resolve, reject) {
          const userToken = JSON.parse(localStorage.getItem('userAgendaToken'));
          const instance = axios.create({
              baseURL: urlUsersAll,
              // timeout: 2000,
              headers: {
                  'Content-Type': 'application/json',
                  'Authorization': 'Token ' + userToken
              }
          });
          instance.patch(user.id+'/',user)
              .then(function (response) {
                  resolve(response.data);
              })
              .catch(function (error) {
                  console.log('el error: ', error.response);
                  reject(error);
              });


      });
  },

  ///File

  getFile:()=>{
    const userToken = JSON.parse(localStorage.getItem('userAgendaToken'));
    return new Promise(function (resolve, reject) {
        const instance = axios.create({
            baseURL: urlFile,
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
  //new File
  newFile:(file)=>{
    let data = new FormData()
    for(let key in file){
      data.append(key, file[key])
    }
      return new Promise(function (resolve, reject) {
          const userToken = JSON.parse(localStorage.getItem('userAgendaToken'));
          const instance = axios.create({
              baseURL: urlFile,
              // timeout: 2000,
              headers: {
                  'Content-Type': undefined,
                  'Authorization': 'Token ' + userToken
              }
          });
          instance.post('',data)
              .then(function(response) {
                  resolve(response.data);
              })
              .catch(function (error) {
                  console.log('el error: ', error.response);
                  reject(error);
              });


      });
  },
  //Delete File
  deleteFile:(fileId)=>{

      return new Promise(function (resolve, reject) {
          const userToken = JSON.parse(localStorage.getItem('userAgendaToken'));
          const instance = axios.create({
              baseURL: urlFile,
              // timeout: 2000,
              headers: {
                  'Content-Type': 'application/json',
                  'Authorization': 'Token ' + userToken
              }
          });
          instance.delete(fileId+'/')
              .then(function (response) {
                  resolve(response.data);
              })
              .catch(function (error) {
                  console.log('el error: ', error.response);
                  reject(error);
              });


      });
  },
  ///Actions

  getAction:()=>{
    const userToken = JSON.parse(localStorage.getItem('userAgendaToken'));
    return new Promise(function (resolve, reject) {
        const instance = axios.create({
            baseURL: urlAction,
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
  //new Action ImmediateActions
  newAction:(immediateA)=>{

      return new Promise(function (resolve, reject) {
          const userToken = JSON.parse(localStorage.getItem('userAgendaToken'));
          const instance = axios.create({
              baseURL: urlAction,
              // timeout: 2000,
              headers: {
                  'Content-Type': 'application/json',
                  'Authorization': 'Token ' + userToken
              }
          });
          instance.post('',immediateA)
              .then(function(response) {
                  resolve(response.data);
              })
              .catch(function (error) {
                  console.log('el error: ', error.response);
                  reject(error);
              });


      });
  },
  //Delete Action
  deleteAction:(actionId)=>{

      return new Promise(function (resolve, reject) {
          const userToken = JSON.parse(localStorage.getItem('userAgendaToken'));
          const instance = axios.create({
              baseURL: urlAction,
              // timeout: 2000,
              headers: {
                  'Content-Type': 'application/json',
                  'Authorization': 'Token ' + userToken
              }
          });
          instance.delete(actionId+'/')
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
