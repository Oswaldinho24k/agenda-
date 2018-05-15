import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import moment from 'moment'

import TimePickerDialog from 'material-ui/TimePicker';

const AddTask =({handleChange,onSubmit,onDatePickerChange, handleDatePickerEnd, menu, phandleChange, priorityHandle, priority})=>{


    return (
        <form
            className="form"
            onSubmit={onSubmit}
        >

            <TextField
                name='title'
                onChange={handleChange}
                required
                floatingLabelText="Nombre de la Tarea"
            />

            <TextField
                name='text'
                onChange={handleChange}
                required
                floatingLabelText="Descripción"
            />
            <DatePicker
                name='start'
                onChange={onDatePickerChange}
                required
                autoOk={true}
                floatingLabelText="Fecha de inicio"
                minDate={new Date()}

            />
            <DatePicker
                name='end'
                onChange={handleDatePickerEnd}
                required
                autoOk={true}
                floatingLabelText="Fecha de termino"
                minDate={new Date()}
                //locale={moment.locale()}
                //TimePicker={TimePickerDialog}
                datetimeformat={moment().format()}

            />


            <SelectField
                value={priority}
                onChange={phandleChange}
                floatingLabelText="Prioridad"
                style={{textAlign:'start'}}

            >
                {menu.map((data)=>
                    <MenuItem
                        key={data.id}
                        value={data.id}
                        primaryText={data.value}
                        onClick={()=>priorityHandle(data.value)}
                    />
                )}
            </SelectField>


        </form>
    );

}
export default AddTask;
