import React from 'react';
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';
export default class ChipList extends React.Component {

  constructor(props) {
    super(props);
    this.styles = {
      chip: {
        margin: 4,
      },
      wrapper: {
        display: 'flex',
        flexWrap: 'wrap',
        overflow:'auto',
        maxHeight:'70px'
      },
    };
  }



  renderChip(data) {

    return (
      <Chip
        key={data.id}
        onRequestDelete={() => this.props.deleteEmployees(data)}
        style={this.styles.chip}
        labelStyle={{fontSize:'10px '}}
      >
      <Avatar src={data.avatar} />
        {data.user.username}
      </Chip>
    );
  }

  render() {
    const {employessListAdd}=this.props;
    return (
      <div style={this.styles.wrapper}>
        {employessListAdd.map(this.renderChip, this)}
      </div>
    );
  }
}
