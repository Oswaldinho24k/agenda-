import React from 'react';
import {Card,CardHeader, CardText} from 'material-ui/Card';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Delete from 'material-ui/svg-icons/action/delete';
import IconButton from 'material-ui/IconButton';

const NoteMeeting = ({noteMe,open,onDelete,isStaff}) => (
  <div style={{maxWidth: 380, maxHeight: 320, margin: 'auto'}}>
    <div style={{maxHeight:290,overflow:'auto',}}>
      {noteMe.map(data =>
      <Card key={data.id}>
        <CardHeader
          title={data.autor.user.username}
          actAsExpander={true}
          avatar={data.autor.avatar}
          showExpandableButton={true}
          style={{display:'flex'}}
        />
      <CardText expandable={true} style={{display:'flex',justifyContent:'space-between'}}>
          <div style={{marginLeft:'30px',paddingRight:30}}>
            <p>{data.text}</p>
          </div>
          {isStaff?<IconButton onClick={()=>onDelete(data.id)} tooltip="Eliminar nota">
            <Delete color="#c7c7c7" />
          </IconButton>:null}
        </CardText>
      </Card>)}
    </div>

    {isStaff?<div style={style.btn}>
      <FloatingActionButton mini={true} onClick={open}>
        <ContentAdd />
      </FloatingActionButton>
    </div>:null}
  </div>
);
const style = {
  btn:{
    display:'flex',
    justifyContent: 'flex-end',
    marginTop: '-28px',
    marginRight: '15px',
  },
};

export default NoteMeeting;
