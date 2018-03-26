import React, {Component, Fragment} from 'react';
import {ProjectTable} from './ProjectsTable';
import {connect} from 'react-redux';
import {newProject} from '../../redux/actions/projectActions';
import {FloatingActionButton} from 'material-ui';
import IconFAB from 'material-ui/svg-icons/content/add';
import {Switch,Route} from 'react-router-dom';
import NewProject from './AddNewProjectPage';
import './ProjectStyles.css';


class ProjectContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
        };
    }

    closeModal = () => {
        this.props.history.push('/agenda/project');
    };

    onSubmit = () => {
        this.props.history.push('/agenda/project');
    };

    render() {
        const {projects, areFetched} = this.props;
        const NewProjectModal = (props) => (
            <NewProject
                onSubmit={this.onSubmit}
                onCancel={this.closeModal}
                {...this.props}
                {...props}
            />
        );
        return (
            <Fragment>
                {
                    !areFetched ?
                        <h1>Loading</h1> :
                        <Fragment>
                            <ProjectTable
                                projects={projects}
                            />
                            <Switch>
                                <Route path="/agenda/project/:id" render={NewProjectModal}/>
                            </Switch>
                            <FloatingActionButton
                                style={fabStyle}
                                onClick={()=>this.props.history.push('/agenda/project/add')}
                            >
                                <IconFAB/>
                            </FloatingActionButton>
                        </Fragment>

                }
            </Fragment>
        );
    }
}

const fabStyle = {
    position: 'fixed',
    bottom: 15,
    right: 15
};

const mapStateToProps = (state,ownProps) => ({
    projects: state.projects.list,
    areFetched: state.projects.areFetched
});

ProjectContainer = connect(mapStateToProps, {newProject})(ProjectContainer);
export default ProjectContainer;
