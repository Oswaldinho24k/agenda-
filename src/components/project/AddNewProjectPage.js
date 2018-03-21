import React, {Component} from "react";
import {connect} from 'react-redux';
import {newProject} from '../../redux/actions/projectActions';
import {Dialog, FlatButton} from 'material-ui';
import {AddNewProjectForm as Form} from './AddNewProjectForm';
import moment from 'moment';
import {ToastSuccess} from 'react-toastr-basic';

class AddNewProjectPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            project: {
                name_project: ""
            },
            created_date: {},
            due_date: {}
        };
    }

    componentWillMount(){
        const {project} = this.props;
        if(project) {
            let projectCloned = Object.assign({}, project);
            this.setState({
                project:projectCloned,
                created_date: moment(projectCloned.created_date, 'YYYY-MM-DD').toDate(),
                due_date: moment(projectCloned.due_date, 'YYYY-MM-DD').toDate()
            });
        }
    }

    componentWillReceiveProps(nP) {
        if (nP.project) {
            let project = nP.project;
            project = Object.assign({}, project);
            this.setState({
                project,
                created_date: moment(project.created_date, 'YYYY-MM-DD').toDate(),
                due_date: moment(project.due_date, 'YYYY-MM-DD').toDate()
            });
        }
    }


    handleChange = e => {
        let project = Object.assign({},this.state.project);
        project[e.target.name] = e.target.value;
        this.setState({project});
    };

    handleDatePickerChange = name => (event, date) => {
        let project = Object.assign({},this.state.project);
        project[name] = moment(date).format("YYYY-MM-DD");
        this.setState({
            project,
            [name]:date
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        const {onSubmit, newProject} = this.props;
        newProject(Object.assign({},this.state.project))
            .then(r => {
                console.log(r);
                onSubmit();
            }).catch(e=>{
                console.log(e);
        })
    };

    render() {
        const {onCancel} = this.props;
        const {project, created_date, due_date} = this.state;
        const actions = [
            <FlatButton
                label="Cancelar"
                secondary
                onClick={onCancel}
            />,
            <FlatButton
                label="Guardar"
                primary
                keyboardFocused={true}
                type="submit"
                form="newProForm"
            />
        ];
        return (
            <Dialog
                open
                title="Añadir nuevo proyecto"
                onRequestClose={onCancel}
                contentStyle={contentStyle}
                actions={actions}
            >
                <Form
                    project={project}
                    created_date={created_date}
                    due_date={due_date}
                    onChange={this.handleChange}
                    onDatePickerChange={this.handleDatePickerChange}
                    onSubmit={this.handleSubmit}
                />
            </Dialog>
        );
    }
}

const contentStyle = {
    width: "40vw"
};

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    let project;
    if (id !== 'add') {
        project = (state.projects.list.filter(project => project.id == id)[0]);
    }
    return {
        project
    }
};

AddNewProjectPage = connect(mapStateToProps, {newProject}) (AddNewProjectPage);
export default AddNewProjectPage;