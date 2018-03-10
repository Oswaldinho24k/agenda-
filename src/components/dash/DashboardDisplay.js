import React from 'react';
import './Dashboard.css';
import {Card, CardTitle} from 'material-ui/Card';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Done from 'material-ui/svg-icons/content/add';
import Calendar from '../calendar/Calendar';

export const DashboardDisplay = ()=>{
    return(
        <div className="dash">
            <h2>Resumen</h2>
            <div className="flex">
                <div className="notas">
                    <h3>Jueves, 1 de Marzo</h3>
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
                            <button className="boton">
                                <ContentAdd />
                            </button>

                        </span>
                    </div>
                    <div className="noti fl">
                        <p>Llevar documentos a la junta</p><Done color="#bababa" />
                    </div>
                </div>
                <div className="calendar">
                    <Calendar/>
                </div>
            </div>
            <div className="flex">
                <div className="proyectos" style={{margin:"30px 10px 0 0"}}>
                    <div style={{display:"flex", alignItems:"center", borderBottom: "1px solid #eee",  height:"30px"}}>
                        <Calendar color="#40bca5" />
                        <h4>Proyectos</h4>
                    </div>
                </div>
                <div className="tareas"  style={{margin:"30px 0 0 10px"}}>
                    <div style={{display:"flex", alignItems:"center", borderBottom: "1px solid #eee", height:"30px"}}>
                        <Calendar color="#63a2f1"/>
                        <h4>Tareas</h4>
                    </div>
                </div>
            </div>
        </div>
    );

};


