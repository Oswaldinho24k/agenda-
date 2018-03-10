import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';


const RegisterComponents =({onChange,onSubmit,cancel,value,selectChange})=>{

  return (

        <form
          className="form"
          onSubmit={onSubmit}
          >
          <TextField
              floatingLabelText="Nombre de usuario"
              name="username"
              required
              onChange={onChange}
            />
            <TextField
                floatingLabelText="Email"
                name="email"
                required
                onChange={onChange}
                type="email"
              />
              <SelectField
                floatingLabelText="Categoria"
                value={value}
                onChange={selectChange}
                floatingLabelFixed={true}
              >
                <MenuItem value={1} primaryText="Usuario" />
                <MenuItem value={2} primaryText="Project-Manager" />
                <MenuItem value={3} primaryText="Administrador" />
              </SelectField>
             <div className="btnMod">
               <FlatButton
                 label="Cancelar"
                 primary={true}
                 onClick={cancel}
               />
               <FlatButton
                 label="Crear"
                 primary={true}
                 type='submit'
               />
             </div>
         </form>
  );

}

export default RegisterComponents;
