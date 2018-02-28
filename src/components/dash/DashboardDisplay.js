import React from 'react';
import './Dashboard.css';
import {Card, CardTitle} from 'material-ui/Card';

export const DashboardDisplay = ()=>{
    return(
        <div className="cardConte">
            <CardTitle title="Resumen" />
            <div className="flex">
                <Card className="notas">

                </Card>
                <Card className="calendar">

                </Card>
            </div>
        </div>
    );

};


