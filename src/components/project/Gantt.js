/*global gantt*/
import React, { Component } from 'react';
import 'dhtmlx-gantt';
import 'dhtmlx-gantt/codebase/locale/locale_es';
import 'dhtmlx-gantt/codebase/dhtmlxgantt.css';

export default class Gantt extends Component {
    componentDidMount() {
        gantt.init(this.ganttContainer);
        gantt.parse(this.props.tasks);
    }

    render() {
        return (
            <div
                ref={(input) => { this.ganttContainer = input }}
                style={{width: '100%', height: '100%'}}
            >
            <div id="my-form">
             <label for="description">Task text
              <input type="text" name="description" value="" />
             </label>
             <input type="button" name="save" value="Save" />
             <input type="button" name="close" value="Close" />
             <input type="button" name="delete" value="Delete"/>
            </div>

          </div>
        );
    }
}
