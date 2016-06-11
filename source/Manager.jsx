import React from 'react';

class Manager extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            liste:[
                {"naziv":"",
                    "video":[]
                }
            ]
        };
    }

    render(){
        return(
            <div>
                <div style="float:left"><Liste></Liste></div>
                <div><Pretraga></Pretraga></div>
                <div style="fload:right"><Pregled></Pregled></div>
            </div>
        );
    }
}

class Pretraga extends React.Component {
    render(){
        return(
            <div>
                tea
            </div>
        );
    }
}

class Liste extends React.Component {
    render() {
        return (
            <div>
            </div>
        );
    }
}

class Pregled extends React.Component {
    render() {
        return (
            <div></div>
        );
    }
}

export default Manager;

