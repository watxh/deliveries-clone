import React from 'react';
import styled, {css} from "styled-components";
import Boxbar from "./Boxbar";

const Dotmainsquare = styled.div `
    box-sizing: border-box;
    border-radius:10px;
    border-style:dashed;
    border-width:5px;
    border-color:rgba(255,255,255,0.8);
    width:82%;
    height:20%;
    background-color:rgba(0,0,0,0.12);
    position:absolute;
    left:9%;
    top:19%;
    top:160px;
    ${({size}) => size && css`
        top: ${size*180+160}px;
    `};

    transition:background-color 1s;
    &:hover{
        background-color:rgba(0,0,0,0.22);
        cursor:pointer;
    }
`;

const Dottext = styled.div `
    text-align:center;
    font-size:1.4rem;
    font-weight:900;
    color:rgba(255,255,255,0.8);
    position:relative;
    top:38%;
`;

function Plusboxbar(props) {
    return(
        <div>
            <Dotmainsquare size={props.boxnum}>
                <Dottext>
                    새로운 택배 추가하기
                </Dottext>
            </Dotmainsquare>
        </div>
    );
}

export default Plusboxbar;