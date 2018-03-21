import React from 'react';
import {Card, CardTitle} from 'material-ui';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn
} from 'material-ui';
import {RowBody} from './RowBody';

export const ProjectTable = ({projects = [], selectedRows}) => (
    <div className="box_cardTable">
        <Card className="cardConteidoTable">
            <CardTitle title="Proyectos"/>
            <Table
                fixedHeader
                multiSelectable
            >
                <TableHeader
                    enableSelectAll
                >
                    <TableRow>
                        <TableHeaderColumn>Nombre</TableHeaderColumn>
                        <TableHeaderColumn>Inicio</TableHeaderColumn>
                        <TableHeaderColumn>Fecha de vencimiento</TableHeaderColumn>
                        <TableHeaderColumn>Concluido</TableHeaderColumn>
                        <TableHeaderColumn>Detalle</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        projects.length > 0 ?
                            projects.map( (project, index) => (
                                    <RowBody
                                        key={index}
                                        data={project}
                                        selectedRows={selectedRows}
                                        {...this.props}
                                    />
                                )
                            ):
                            <TableRow selectable={false}>
                                <TableRowColumn colSpan="5">No existen proyectos</TableRowColumn>
                            </TableRow>
                    }
                </TableBody>
            </Table>
        </Card>
    </div>
);
