import React from 'react';
import youtube from 'youtube-api-search'

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
                <div style={{"float":"left"}}><Liste></Liste></div>
                <div><Pretraga></Pretraga></div>
                <div style={{"float":"right"}}><Pregled></Pregled></div>
            </div>
        );
    }
}

class Pretraga extends React.Component {
    render(){
        return(
            <div>
                <input type="text" placeholder="Unesi pojam" id="pojam"></input>
                <button type="submit" onClick={()=>youtube({key:'AIzaSyBCkKcHzYrylChRNEGr-ElNgI7jOuIeo7A',term:document.getElementById('pojam').value},(videos)=>{
               videos.map(function(video){
                console.log(video.snippet.title);



                    })})}>Pretraga</button>

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

