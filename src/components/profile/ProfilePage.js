import React from 'react';
import Dialog from 'material-ui/Dialog';

import ProfileComponents from './ProfileComponents';
import ChangePasswordContainer from '../changepass/ChangePasswordContainer';
/*redux*/
import {bindActionCreators}from 'redux';
import {connect} from 'react-redux';
import * as profileActions from '../../redux/actions/profileActions';



class ProfilePage extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          edit:true,
          defaultP:{},
          data: {},
          message:"Change success!!",
          file: '',
          imagePreviewUrl: '',
          openChangePassword:false,
      };
  }




  activeEdit = () => {
    let {edit} = this.state;
    edit = !edit;
    this.setState({edit})
    console.log(this.state.defaultP)
  };
  cancelEdit = ()=>{
    this.setState({edit:true})
    console.log('gola')
    this.props.openProfile();
  }
  handleChange = (e) => {
      let data = this.props.profile;
      data[e.target.name] = e.target.value;
      this.setState({data});
      console.log(data)
  };
  uploadphoto=(e)=>{
    let data = this.props.profile;
    data["avatar"]=e.target.files[0];
    this.setState({data})
    let reader = new FileReader();
    let file = e.target.files[0];

      reader.onloadend = () => {
        this.setState({
          file: file,
          imagePreviewUrl: reader.result
        });
      }
      reader.readAsDataURL(file)
  }
  onSubmit=(e)=>{
  e.preventDefault();
  const message=this.state.message;
  const nuevoRegistro= this.state.data;
  this.setState({edit:true})
  this.props.showToast(message)
  console.log(nuevoRegistro)
  this.props.profileActions.saveProfile(nuevoRegistro)
};
openClosePassword = () => {
  let {openChangePassword}=this.state;
  openChangePassword = !openChangePassword
  this.setState({openChangePassword});
};
  render() {
    const {profile} = this.props;
    console.log(profile)

    return (
            <Dialog
              modal={false}
              open={this.props.open}
              onRequestClose={this.cancelEdit}
              contentStyle={modStyle}
              style={{minHeight:'250px'}}
              bodyStyle={{padding:'0px !important'}}

            >
            <ChangePasswordContainer
               open={this.state.openChangePassword}
               openClosePassword={this.openClosePassword}
               showToast={this.props.showToast}
              />
              <ProfileComponents
                activeEdit={this.activeEdit}
                edit={this.state.edit}
                openClosePassword={this.openClosePassword}
                uploadPhoto={this.uploadphoto}
                onChange={this.handleChange}
                onSubmit={this.onSubmit}
                imagePreviewUrl={this.state.imagePreviewUrl}
                  {...profile}
                />

            </Dialog>

    );
  }
}

var modStyle={
  margin:'-45px auto',
  minWidth: '250px',
  width:'400px',


}
function mapStateToProps(state, ownProps) {
let profile = state.profile.object

    return {
       profile
    }

}

function mapDispatchToProps(dispatch){
  return{
    profileActions:bindActionCreators(profileActions,dispatch)
  }
}

ProfilePage = connect (mapStateToProps,mapDispatchToProps)(ProfilePage);

export default ProfilePage;
