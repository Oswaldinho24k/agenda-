import React from "react";
import {TextField, DatePicker,Checkbox} from 'material-ui';

export const AddNewProjectForm = ({onSubmit, onChange, onDatePickerChange, project: {name_project = ""}, created_date, due_date}) => (
    <form className="form" onSubmit={onSubmit} id="newProForm">
        <TextField
            required
            floatingLabelText="Nombre del proyecto"
            name="name_project"
            value={name_project}
            onChange={onChange}
            fullWidth
        />
        <DatePicker
            required
            floatingLabelText="Fecha de inicio"
            value={created_date}
            onChange={onDatePickerChange("created_date")}
            textFieldStyle={{width: "100%"}}
            style={{width: "100%"}}
            autoOk
            minDate={new Date()}
        />
        <DatePicker
            required
            floatingLabelText="Fecha de vencimiento"
            value={due_date}
            onChange={onDatePickerChange("due_date")}
            textFieldStyle={{width: "100%"}}
            style={{width: "100%"}}
            autoOk
            minDate={created_date}
        />
        <div style={{maxWidth: 250, alignSelf: "left", marginTop: 15}}>
            <Checkbox
                label="Activo"
            />
        </div>


    </form>
);