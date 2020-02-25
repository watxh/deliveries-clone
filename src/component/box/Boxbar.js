import React, { Component } from 'react';
import styled, {css} from "styled-components";
import Allboxbar from "./Allboxbar";

import cj from "../../assets/kr.cj.png"
import lotte from "../../assets/kr.lotte.png"

const Mainsquare = styled.div `
    border-radius:10px;
    width:82%;
    height:22%;
    background-color:white;
    position:absolute;
    left:9%;
    top:160px;
    ${({size}) => size && css`
        top: ${size*180 + 160}px;
    `};
`;

const Delcompany = styled.img `
    width:8%;
    height:auto;
    position:relative;
    left:2rem;
    top:1.5rem;
`;

class Boxbar extends Component {
    render()
    {
        return(
            <div>
                {this.props.infor.Delinfor.map(info => {
                    if(!info.Rid)
                    {
                        return (
                            <Mainsquare key = {info.id} size={info.id}>
                            <Delcompany key={info.id} src={info.image}></Delcompany>
                            </Mainsquare>
                        )
                    }
                })}
            </div>
        );
    }
}

export default Boxbar;