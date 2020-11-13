import './App.css';
import GetData from "./container/PropData";
import Components from "./container/PropUser";
import React from 'react';

function App() {
    return (
        <div className="App">
            <Components.SearchBar/>
            <Components.UserInformation/>
            <Components.ListUser/>
            <GetData/>
        </div>
    );
}

export default App;
