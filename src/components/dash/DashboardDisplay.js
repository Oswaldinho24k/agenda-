import React from 'react';
import './Dashboard.css';
import {Card, CardTitle} from 'material-ui/Card';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Done from 'material-ui/svg-icons/content/add';
import Calendar from '../calendar/Calendar2';
import moment from 'moment'
import '../../../node_modules/moment/locale/es'
import Edit from 'material-ui/svg-icons/content/create';
import {List, ListItem} from 'material-ui/List';

export const DashboardDisplay = ({date,open,fastnote,viewNote})=>{
    return(
        <div className="dash">
            <h2>Resumen</h2>
            <div className="flex">
                <div className="notas">
                    <h3>{moment(date).format('dddd, LL')}</h3>
                    <div style={{margin:"3px 0 20px 0"}}>
                        <span className="rev">0 Task</span>
                        <span className="rev">0 Meetings</span>
                    </div>
                    <div className="noti">
                        <span>
                            <div style={{display:"flex", alignItems:"center"}}>
                                <div className="circle"></div>
                                <h4>Notas</h4>
                            </div>
                            <button className="boton" onClick={open}>
                                <ContentAdd />
                            </button>

                        </span>
                    </div>
                    <div className="noti fl" >
                      <List>
                        {fastnote.map(data =>
                         <ListItem
                        key={data.id}
                        style={{textAlign:'start'}}
                        primaryText={<p className="fastnote">{data.text}</p>}
                        secondaryText={moment(data.created).format('YYYY-MM-DD')}
                        onClick={()=>viewNote(data)}
                        rightIcon={<Edit color="#bababa"/>}

                        />)}
                    </List>
                    </div>
                </div>
                <div className="calendar">
                    <Calendar/>
                </div>
            </div>
            <div className="flex">
                <div className="proyectos" style={{margin:"30px 10px 0 0"}}>
                    <div style={{display:"flex", alignItems:"center", borderBottom: "1px solid #eee",  height:"30px"}}>

                        <h4>Proyectos</h4>
                    </div>
                </div>
                <div className="tareas"  style={{margin:"30px 0 0 10px"}}>
                    <div style={{display:"flex", alignItems:"center", borderBottom: "1px solid #eee", height:"30px"}}>

                        <h4>Tareas</h4>
                    </div>
                </div>
            </div>
        </div>
    );

};
