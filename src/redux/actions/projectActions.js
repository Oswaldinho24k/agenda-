import ProjectApi from '../../Api/projectRepository';
//FETCHED
// Determine if projects have fetched from server
export const FETCHED = "PROJECTS_FETCHED";

export const projectsFethedSuccess = status => ({
    type: FETCHED,
    status
});

// READ
export const READ = "GET_PROJECTS";

export const getProjectsSuccess = projects => ({
    type: READ,
    projects
});

export const getProjects = () => (dispatch, getState) => {
    return ProjectApi.getProjects()
        .then(r => {
            dispatch(getProjectsSuccess(r));
            // Determine if projects have fetched from server
            dispatch(projectsFethedSuccess(true));
            Promise.resolve(r);
        }).catch(e => {
            Promise.reject(e);
        });
};

// CREATE
export const CREATE = "POST_PROJECT";

export const newProjectSuccess = project => ({
    type: CREATE,
    project
});

export const newProject = project => (dispatch, getState) => {
    return ProjectApi.newProject(project)
        .then(r => {
            dispatch(newProjectSuccess(r));
            Promise.resolve(r);
        }).catch(e => {
            Promise.reject(e)
        });
};

// Update
export const UPDATE = "UPDATE_PROJECT";

export const updateProjectSuccess = project => ({
    type: UPDATE,
    project
});

export const updateProject = project => (dispatch, getState) => {
    return ProjectApi.updateProject(project)
        .then(r => {
            dispatch(updateProjectSuccess(r));
            Promise.resolve(r);
        }).catch(e => {
            Promise.reject(e)
        });
};

// DELETE
export const DELETE = "DELETE_PROJECT";

export const deleteProjectSuccess = idProject => ({
    type: DELETE,
    idProject
});

export const deleteProject = idProject => (dispatch, getState) => {
    return ProjectApi.deleteProject(idProject)
        .then(r => {
            dispatch(deleteProjectSuccess(idProject));
            Promise.resolve(r);
        }).catch(e => {
            Promise.reject(e)
        });
};


