import React from 'react'
import styled from 'styled-components'
import imagen3 from '../assets/imagen3.jpg'
import SearchBar from './SearchBar'
import video2 from '../assets/video2.mp4'

const Bann = styled.div`
    top: 30px;
    height:40vh;
    
    background-size:cover;
    width:100%;
    margin-bottom: 2rem;
    border-radius: 10px;
    position: relative;

    
    /* background-image: url("../assets/imagen1.jpg") */
  
`
   

const HeroContainer = styled.div`
    position: absolute;
    width:100%;
    height:100%;
    top:0;
    left:0;
    background: rgba(0,0,0,0.3);
    border-radius:10px;
    display: flex;
    align-items:center;
    justify-content:center;



`
const HeroText = styled.div`
    
    font-size: 25px;
    text-align:center;
    color: #fff;

`

const Videox1 = styled.video`
        
        width: 100vw;
        
    `;

    const ContenVideo = styled.div`
        width: 100%;
        height: 100%;
        overflow: hidden;
        position: relative;
        display: inline-block;
    `
// style="background:imagen1.jpg no-repeat;height:imageheight px;width:imagewidth px"

export default function Banner() {
    return (
        <Bann>
            <ContenVideo>
                <Videox1 muted autoPlay loop>
                    {/* <source src={video1} type="video/mp4"/> */}
                    <source src={video2} type="video/mp4"/>
                </Videox1>
            </ContenVideo>
            
            <HeroContainer>
                <HeroText>
                    <h1>Recipe's World</h1>
                    <h4>no food, no good!!</h4>
                    <SearchBar/>

                </HeroText>

            </HeroContainer>
            
        </Bann>
    )
}
