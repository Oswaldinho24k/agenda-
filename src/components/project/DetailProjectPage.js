import React, {Component,Fragment} from "react";
import {connect} from 'react-redux';
import {ProjectTitle as ProjectInfo} from './ProjectTitle';
import Gantt from './Gantt';
import './ProjectStyles.css';
import moment from 'moment';


class DetailProjectPage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    goToEdit = () => {
        this.props.history.push(`/agenda/project/${this.props.id}`)
    };

    render() {
        const {project,fetched,tasks} = this.props;
        const mytasks = tasks.map( task => ({
            id: task.id,
            text: task.name,
            start_date: moment(task.starts, moment.ISO_8601).format('DD-MM-YYYY'),
            duration: moment(task.expiry, moment.ISO_8601).from(moment(task.starts, moment.ISO_8601)),
            progress: 1
        }));
        const data = {
            data: mytasks,
            links: [
                {}
            ]
        };
        return (
            <Fragment>
                {
                    !fetched ? <h1>Loading</h1> :
                        <div className="detail">
                            <ProjectInfo
                                project={project}
                                goToEdit={this.goToEdit}
                            />
                            <div style={{height: 500, width: '100%'}}>
                                <Gantt tasks={data}/>
                            </div>
                        </div>
                }
            </Fragment>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const project = state.projects.list.filter( project => project.id == id)[0];
    const tasks = state.tasks.list.filter( task => task.project == id);
    return {
        id,
        project,
        fetched: state.projects.areFetched,
        tasks
    }

};

DetailProjectPage = connect(mapStateToProps,{})(DetailProjectPage);
export default DetailProjectPage;