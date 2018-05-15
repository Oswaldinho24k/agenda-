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

  handleRequestDelete = (id) => {
    this.chipData = this.props.employessListAdd;
    const chipToDelete = this.chipData.map((chip) => chip.id).indexOf(id);
    this.chipData.splice(chipToDelete, 1);
    this.setState({chipData: this.chipData});
  };

  renderChip(data) {

    return (
      <Chip
        key={data.id}
        onRequestDelete={() => this.handleRequestDelete(data.id)}
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
