import React from "react";
import ReactDOM from "react-dom";
import { Button } from 'elemental'
import CSSTransitionGroup from 'react-addons-css-transition-group';
import App from './App';
import './index.css';
var createReactClass = require('create-react-class');


var TASKS = [];

function addTask(task) {
    TASKS.push(task);
};

var Task = createReactClass({
    render: function() {
        return (
            <div> </div>
        );
    }
});

var CONTACTS = [
    {
        id: 1,
        name: "Darth",
        phoneNumber: "+791735159"
    },
    {
        id: 2,
        name: "Darth GAGGAGAG",
        phoneNumber: "+7917351531663169"
    },
    {
        id: 3,
        name: "AHHH",
        phoneNumber: "+7917351155159"
    }
]

var Contact = createReactClass ({
    render: function() {
        return (
        <li>  
            <div className = "contact-name"> {this.props.name} </div>
            <div> {this.props.phoneNumber} </div>
        </li>
        );
    }
});

var ContactLsist = createReactClass({
    render: function() {
        return (
            <div>
                <ul>
                    {
                        CONTACTS.map(function(el) {
                            return <Contact key={el.id} name={el.name} phoneNumber={el.phoneNumber} />;
                        })
                    }
                </ul>
                <Button
  onPress={addTask("HUIEPATALO")}
  title="Learn More"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>
            </div>
        );
    }
});

ReactDOM.render(
    <ContactLsist />,
    document.getElementById("root")
);
