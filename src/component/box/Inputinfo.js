import React, { Component } from 'react';
import styled from "styled-components";

const Filldisplay = styled.div `
    width:100%;
    height:100%;
    background-color:rgba(0,0,0,0.7);
    position:fixed;
    left:0px;
    top:0px;
`;

const Inputbox = styled.div `
    border-radius:8px;
    width:400px;
    height:200px;
    background-color:white;
    position:fixed;

    top:0px;
    bottom:0px;
    left:0px;
    right:0px;
    margin-top:auto;
    margin-bottom:auto;
    margin-left:auto;
    margin-right:auto;
`;

const Plusboxbutton = styled.div `
    border-style:outset;
    box-sizing: border-box;
    border-width:2px;
    background-color:rgb(38,38,38);
    width:360px;
    height:38px;
    position:relative;
    left:5%;
    top:9rem;
`;

const Plustext = styled.div `
    font-weight:800;
    color:white;
    position:relative;
    left:41%;
    top:18%;
`;

function Inputinfo(props) {
        return(
            <div>
                <Filldisplay/>
                <Inputbox>
                    <Plusboxbutton onClick={props.infor}>
                        <Plustext>추가하기</Plustext>
                    </Plusboxbutton>
                </Inputbox>
            </div>
        );
}
export default Inputinfo;