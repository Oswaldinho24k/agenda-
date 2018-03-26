// importamos axios
import axios from 'axios';

//Definimos el nombre del prop del local storage que contiene el token de usuario
let tokenName = 'userAgendaToken';
//Función para obtener el token del local storage
function getUserToken() {
    return JSON.parse(localStorage.getItem(tokenName));
}

//Creamos nuestra llamada a la base de datos por medio
// del patròn de factura
const projectRepository = () => {
    const debug = true;
    const baseURL = 'http://localhost:8000/project/';

    if (!debug){

    }

    const newProject = project => {
        return new Promise( (resolve, reject) => {
            const instance = axios.create({
                baseURL,
                headers: {
                    "Content-Type" : "application/json",
                    "Authorization" : "Token " + getUserToken()
                }
            });

            instance.post("", project)
                .then(r => {
                    console.log(r.data);
                    resolve(r.data);
                }).catch(e => {
                    console.log(e.response);
                    reject(e.response);
            });
        })
    };

    const getProjects = () => {
        return new Promise( (resolve, reject) => {
            const instance = axios.create({
                baseURL,
                headers: {
                    "Content-Type" : "application/json",
                    "Authorization" : "Token " + getUserToken()
                }
            });

            instance.get("")
                .then(r => {
                    console.log(r.data);
                    resolve(r.data);
                }).catch(e => {
                console.log(e.response);
                reject(e.response);
            });
        })
    };

    const updateProject = project => {
        return new Promise( (resolve, reject) => {
            const instance = axios.create({
                baseURL,
                headers: {
                    "Content-Type" : "application/json",
                    "Authorization" : "Token " + getUserToken()
                }
            });

            instance.patch(`${project.id}/`, project)
                .then(r => {
                    console.log(r.data);
                    resolve(r.data);
                }).catch(e => {
                console.log(e.response);
                reject(e.response);
            });
        })
    };

    const deleteProject = projectId => {
        return new Promise( (resolve, reject) => {
            const instance = axios.create({
                baseURL,
                headers: {
                    "Content-Type" : "application/json",
                    "Authorization" : "Token " + getUserToken()
                }
            });

            instance.delete(`${projectId}/`)
                .then(r => {
                    console.log(r.data);
                    resolve(r.data);
                }).catch(e => {
                console.log(e.response);
                reject(e.response);
            });
        })
    };

    return {newProject,getProjects,updateProject,deleteProject}
};

export default projectRepository();