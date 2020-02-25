import React from 'react';
import styled from "styled-components";

const Maintext = styled.div `
        font-size:2.3rem;
        font-weight:900;
        position:absolute;
        left:9rem;
        top:2.5rem;
        color:rgb(212,5,17);
    `;

const Subtext = styled.div `
    font-size:1.2rem;
    font-weight:400;
    position:absolute;
    left:9rem;
    top:6rem;
    color:rgb(212,5,17);
`;

function Topbar() {
    return(
        <div>
            <Maintext>당신의 모든 배송</Maintext>   
            <Subtext>시킨 물건이 어디쯤 왔는지 한꺼번에 확인해 보세요.</Subtext>
        </div>
    );
}

export default Topbar;