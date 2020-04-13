import React, { Component} from 'react';

import Add from './Add'

import Dashboard from './Dashboard';

class index extends Component {
    state = {
        showContent: "dashboard"
    }
    showDashboard = () => {
        console.log("showdashboard");
        
        this.setState({"showContent": "dashboard"})
    }
    showAdd = () => {
        console.log("showdashboard");
        
        this.setState({"showContent": "add"})
    }

    render() {
        let menampilkan; console.log(this.state.showContent);
        
        if (this.state.showContent === "dashboard") {
            menampilkan = <Dashboard/>
        } else {
            menampilkan = <Add/>
        }
        return (
            <div>
                <button onClick={this.showDashboard}>Dashboard</button>
                <button onClick={this.showAdd}>Add</button>
                <br/>halo
                {menampilkan}
            </div>
        )
    }
}
export default index;