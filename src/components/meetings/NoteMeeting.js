import React from 'react';
import {Card,CardHeader, CardText} from 'material-ui/Card';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Delete from 'material-ui/svg-icons/action/delete';
import IconButton from 'material-ui/IconButton';
import {GridList, GridTile} from 'material-ui/GridList';

const NoteMeeting = ({noteMe,open,onDeleteNote,isStaff,openNote}) => (
  <div style={{ margin: 'auto'}}>
    <GridList
      cols={4}
      style={style.gridList}
    >
        {noteMe.map(data =>
          <Card key={data.id} style={{backgroundColor:'#FFFFA5'}}>
          <CardHeader
            title={data.autor.user.username}
            avatar={data.autor.avatar}
            textStyle={{paddingRight:'none'}}
            style={style.cardEncabezado}
            titleStyle={{fontSize:'13px'}}
            children={isStaff?<IconButton style={style.iconDelete} onClick={()=>onDeleteNote(data.id)} tooltip="Eliminar nota">
              <Delete color="#c7c7c7" />
            </IconButton>:null}
          />
        <CardText style={style.cardTextito}>
            <div>
              <p style={style.paragraph}>{data.text}</p>
            </div>
          </CardText>
        </Card>)}
  </GridList>
  {isStaff?<div style={style.btn}>
      <FloatingActionButton mini={true} onClick={openNote}>
        <ContentAdd />
      </FloatingActionButton>
    </div>:null}
  </div>
);
const style = {
  cardEncabezado:{
    display:'flex',
    justifyContent:'space-between',
    height:'66px'
  },
  gridList: {
    height:'368px',
    maxHeight:'368px',
    overflowY: 'auto',
    overflowX:'hidden',
    padding:'15px'
  },
  paragraph:{
    textIndent: '50x',
    textAlign: 'justify',
    letterApacing:' 3px'
  },
  cardTextito:{
    display:'flex',
    justifyContent:'space-between',
    overflow:'auto',
    maxHeight:'47px'
  },
  iconDelete:{
    width:'auto',
    height:'auto',
    padding:'none'
  },
  btn:{
    display:'flex',
    backgroundColor:'transparent',
    justifyContent: 'flex-end',
    marginTop: '-50px',
    marginRight: '15px',
  },
};

export default NoteMeeting;
