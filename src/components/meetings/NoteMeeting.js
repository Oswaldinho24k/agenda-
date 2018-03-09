import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const NoteMeeting = ({noteMe,open}) => (
  <div>
    {noteMe.map((data , i)=>
    <Card key={i}>
      <CardHeader
        title={data.autor.user.username}
        subtitle="asdas"
        actAsExpander={true}
        avatar={data.autor.avatar}
        showExpandableButton={true}
      />
      <CardText expandable={true}>
        {data.text}
      </CardText>
    </Card>)}
    <div style={style.btn}>
      <FloatingActionButton mini={true} onClick={open}>
        <ContentAdd />
      </FloatingActionButton>
    </div>
  </div>
);
const style = {
  btn:{
    bottom:'1px',
    textAlign:'end'
  },
};

export default NoteMeeting;
