import React, { Component } from 'react';
import styled from "styled-components";

import Boxbar from "./Boxbar"
import Plusboxbar from "./Plusboxbar"
import Inputinfo from "./Inputinfo"

class Allboxbar extends Component {
    
    state = {
        Isinputtime:0,
        boxnum:0,
        Rid:0,
        Delinfor:[
        ]
    }

    plusboxinput = () => {
        this.setState({
            Isinputtime:this.state.Isinputtime+1
        });
    }

    plusbox = () => {
        this.setState({
            Isinputtime:this.state.Isinputtime-1,
            boxnum:this.state.boxnum+1,
            Delinfor:this.state.Delinfor.concat({id:this.state.Rid++})
        });
    }

    box = () => {
        console.log(this.state.Isinputtime);
        if(this.state.Isinputtime === 1) {
            console.log("In");
            return(
                <Inputinfo infor = {this.plusbox}></Inputinfo>
            )
        }
    }

    render(){
        return(
            <div>
                <Boxbar infor = {this.state}/>
                <div onClick={this.plusboxinput}>
                    <Plusboxbar boxnum={this.state.boxnum}></Plusboxbar>
                </div>
                {this.box()}
            </div>
        );
    }
}


export default Allboxbar;