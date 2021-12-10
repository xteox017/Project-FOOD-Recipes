import React from 'react'
import styled from 'styled-components'

const PageFooter = styled.span`
    height:4rem;
    background-color: #23394d;
    color: #fff;
    display:flex;
    align-items:center;
    justify-content: center;

    p{
        margin-bottom:0;
    }

`;

const FooterLogo =styled.span`
    color: #e07924;


`

export default function Footer() {
    return (
        <PageFooter>
            <p>
                &copy; <span id="date">2021</span>
                <FooterLogo >Recipes's World</FooterLogo>
            </p>
        </PageFooter>
    )
}
