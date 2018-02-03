import React from 'react';
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';
/**
 * An example of rendering multiple Chips from an array of values. Deleting a chip removes it from the array.
 * Note that since no `onClick` property is defined, the Chip can be focused, but does not gain depth
 * while clicked or touched.
 */
export default class ChipList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {chipData: [
      {key: 0, label: 'Angular'},
      {key: 1, label: 'JQuery'},
      {key: 2, label: 'Polymer'},
      {key: 3, label: 'ReactJS'},
      {key: 4, label: 'Polymer'},
      {key: 5, label: 'Polymer'},
      {key: 6, label: 'Polymer'},
      {key: 7, label: 'Polymer'},
      {key: 8, label: 'Polymer'},
      {key: 9, label: 'Polymer'},

    ]};
    this.styles = {
      chip: {
        margin: 4,
      },
      wrapper: {
        display: 'flex',
        flexWrap: 'wrap',
        overflow:'auto',
        maxHeight:'76px'
      },
    };
  }

  handleRequestDelete = (key) => {
    this.chipData = this.state.chipData;
    const chipToDelete = this.chipData.map((chip) => chip.key).indexOf(key);
    this.chipData.splice(chipToDelete, 1);
    this.setState({chipData: this.chipData});
  };

  renderChip(data) {
    return (
      <Chip
        key={data.key}
        onRequestDelete={() => this.handleRequestDelete(data.key)}
        style={this.styles.chip}
        labelStyle={{fontSize:'10px '}}
      >
      <Avatar size={40} src="https://lolstatic-a.akamaihd.net/frontpage/apps/prod/rg-kayn-reveal/es_MX/94dcc05587bfb7cf3b581917f3dd6662df5eb212/assets/img/base-wallpaper.jpg" />
        {data.label}
      </Chip>
    );
  }

  render() {
    return (
      <div style={this.styles.wrapper}>
        {this.state.chipData.map(this.renderChip, this)}
      </div>
    );
  }
}
