import React, {Component} from 'react';
import {Card,CardMedia,CardTitle} from 'material-ui/Card';

class InfoContainer extends Component {
    render() {
        return (
            <div id="todo" >

                <div className="fl_lg">

                    <Card id="car">
                        <CardMedia
                          overlay={<CardTitle title="Gracias por registrarte" subtitle="Ovetrlay subtitle" />}
                        >
                          <img src="https://irp-cdn.multiscreensite.com/3217540c/dms3rep/multi/teamwork-activity-team-building.png" alt="" />
                        </CardMedia>
                    </Card>
                </div>

            </div>
            );
        }
    }

export default InfoContainer;
