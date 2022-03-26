import React from "react";
import './Questions.css'

const Questions = () => {
  return (
    <div className="questions-container">
        <div className="questions">
            <h2>How React Works?</h2>
            <p>React is a Javascript library.It has a structure and the data flow has clearly defined rule.Each code perform on its own inside component.Every component are separated from another but communicate with each other to make application work.We can set data dynamically in react.It's more easy to write code and give best performance from plain JS code.<br/>
            Each react component output is given in JSX format which stand for Javascript XML and that allows write html in react.</p>
        </div>
        <div className="questions">
            <h2>Difference Between Props and State?</h2>
            <p>
                props are read only <br/>
                where,state is both read and write<br/><br/>

                props changes can be synchronously <br/>
                but state changes can be asynchronously<br/><br/>

                props can not be modified <br/>
                in other word,state can be modified using this.setState. 
            </p>
        </div>
    </div>
  );
};

export default Questions;
