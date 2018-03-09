import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as orderActions from '../../redux/actions/orderActions';




 class NewOrderOfDay extends React.Component {
   constructor(props) {
       super(props);
       this.state = {
           order:{},
           editOrder:{},

       };
   }
   changeDone =(id,status)=>{
        let {editOrder} = this.state;
        editOrder['id']=id
        editOrder['status']= !status
       this.props.orderActions.editOrder(editOrder);
       console.log(editOrder)
   }
   onSubmit =(e)=>{
     e.preventDefault();
     let newOrder= this.state.order;
     newOrder['meeting']=parseInt(this.props.id)
     this.props.orderActions.newOrder(newOrder);
     this.props.close()
     console.log(newOrder)
   }
   onChange = (e) => {
       let order = this.state.order;
       order[e.target.name] = e.target.value;
       this.setState({order});
       console.log(order)
   };
  render() {
    const actions = [
      <FlatButton
        label="Cancelar"
        primary={true}
        onClick={this.props.close}
      />,
      <FlatButton
        label="Aceptar"
        primary={true}
        onClick={this.onSubmit}
      />
    ];
    return (
          <Dialog
            title="Orden del Dia"
            modal={false}
            open={this.props.open}
            contentStyle={modStyle}
            onRequestClose={this.props.close}
            actions={actions}
          >
              <TextField
                name='name_order'
                required
                floatingLabelText="Orden del dia"
                onChange={this.onChange}
              />
          </Dialog>
    );
  }
}

var modStyle={
  width:'25%',
  minWidth: '250px',
}

function mapStateToProps(state, ownProps) {

    return {

    }
}

function mapDispatchToProps(dispatch) {
    return{
        orderActions:bindActionCreators(orderActions,dispatch),
    }
}

NewOrderOfDay = connect(mapStateToProps, mapDispatchToProps)(NewOrderOfDay);

export default NewOrderOfDay;
