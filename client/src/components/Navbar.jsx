import React from 'react'
import styled from 'styled-components'
import logo from '../assets/recipe-icon-png-8.jpg'
import { Link, NavLink } from 'react-router-dom';
import { getRecipes } from '../actions';
import { useDispatch, useSelector } from 'react-redux';


const Container = styled.div`
    /* width: 100%;
    height:70px;
    background-color: #23394d;
    align-items:center; */
    background-color: #23394d;
    font-size: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  box-shadow: 0 0 3px rgba(255, 255, 255, 0.52);
  padding: 0 1rem;
  text-align: center;
`;

const Wrapper = styled.div`
    width: 100%auto;
    max-width:1300px;
    height: 100%auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin:auto;
    /* align-items:center; */



`;

const LogoContainer = styled.div`
    margin-left: 0.5rem;
    display: flex;
    justify-content:left;
    align-items: center;
    font-size: 1.5rem;
    font-family: sans-serif;

    p{
        &:nth-child(2){
            color: #64b2ff;
        }
        &:nth-child(3){
            font-size:1.5rem;
            font-weight:500;
            color: #e07924;
        }
    }


`;

const Menu = styled.ul`
    height: 100%;
    display: flex;
    justify-content: space-between;
    list-style: none;


`;

const MenuItem = styled.li`
    height:100%;
    align-items:center;
    display:flex;
    

`;

const MenuItemLink = styled(Link)`
    display:flex;
    justify-content:center;
    align-items:center;
    height: 100%;
    padding: 0.5rem 2.5rem;
    color: #64b2ff;
    font-family:sans-serif;
    font-size: 1rem;
    font-weight: 300;
    cursor:pointer;
    transition: 0.5s all ease;

    &:hover{
        color: #fff;
        background-color: #e0792a;
        transition: 0.5s all ease;
    }


`;
const Links = styled(NavLink)`
    display:flex;
    justify-content:center;
    align-items:center;
    height: 100%;
    padding: 0.5rem 2.5rem;
    color: #64b2ff;
    font-family:sans-serif;
    font-size: 1rem;
    font-weight: 300;
    cursor:pointer;
    transition: 0.5s all ease;

    &:hover{
        color: #fff;
        background-color: #e0792a;
        transition: 0.5s all ease;
    }


`;



export default function Navbar() {
    const dispatch = useDispatch()
    
    function handleClick(e){
        e.preventDefault();
        dispatch(getRecipes());
    }
    return (
        <Container>
            <Wrapper>
                <LogoContainer>
                    <img src={logo} alt="Icono representativo" width="85px"/>
                    <p>Recipes's World</p>
                    <p>No food, no good!</p>
                </LogoContainer>
                <Menu>
                    <MenuItem>
                        <MenuItemLink onClick={(e)=>{handleClick(e)}}>
                            RECIPES
                        </MenuItemLink>
                    
                    </MenuItem>
                    
                    
                    <MenuItem>
                        <Links to='/recipe'>
                            CREATE RECIPE
                        </Links>
                    
                    </MenuItem>


                </Menu>
            </Wrapper>
            
        </Container>
    )
}





// import React, {useEffect} from 'react'
// import styled from 'styled-components'
// import { Link, NavLink} from 'react-router-dom';
// import SearchBar from './SearchBar';
// import { useDispatch } from 'react-redux';
// import { getRecipes } from '../actions';


// const Navi = styled.nav`
//     display: flex;
//     flex-direction: row;
//     justify-content: space-around;
//     align-items: center;
//     background-color: #141414;
//     height: 120px;
//     width: 100%;
// `;

// const Titulo = styled.div`
//     width: 33%;
//     height: 100%;
//     display: flex;
//     justify-content: center;
//     align-items: center;
// `;

// const H2 = styled(Link)`
//     color: #f07b3f;
//     font-family: 'Raleway';
//     font-size: 60px;
//     font-weight: 100;
//     margin: 0;
//     padding: 0;
//     text-decoration: none;
// `;

// const H3 = styled(Link)`
//     color: #f07b3f;
//     font-family: 'Raleway';
//     font-size: 60px;
//     font-weight: 900;
//     margin: 0;
//     padding: 0;
//     text-decoration: none;
// `;

// const DivButtons = styled.div`
//     width: 33%;
//     height: 100%;
//     display: flex;
//     align-items: center;
//     justify-content: center;
// `;

// const DivHome = styled.div`
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     margin: 30px;
// `;

// const DivCreate = styled.div`
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     margin: 30px;
// `;

// const Links = styled(NavLink)`
//     margin-right: 30px;
//     text-decoration: none;
//     color: #f07b3f;
//     padding: 7px;
//     font-family: 'Raleway';
//     font-size: 1.2em;
//     &:hover{
//         border: 2px #f07b3f solid;
//         border-top: none;
//         border-left: none;
//         border-right: none;
//         padding-bottom: 5px;
//     }
//     &.active{
//         border: 2px #f07b3f solid;
//         border-top: none;
//         border-left: none;
//         border-right: none;
//         padding-bottom: 5px;
//     }
// `;



// export default function Navbar() {

//     const dispatch = useDispatch();

//     const allRecipes = () => {
//         dispatch(getRecipes())
//     return (
//           <Navi>
//             <Titulo>
//                 <H2 to='/'>FOOD</H2>
//                 <H3 to='/'>APP</H3>
//             </Titulo>
//             <DivButtons>
//                 <DivHome>
//                     <img src={recipes} alt="" width='20px' height='20px' />
//                     <Links to='/home' activeClassName='active' onClick={allRecipes}>Recipes</Links>
//                 </DivHome>
//                 <DivCreate>
//                     <img src={create} alt="" width='20px' height='20px' />
//                     <Links to='/create' activeClassName='active'>Create</Links>
//                 </DivCreate>
//                 {/* <DivHome>
//                     <img src={favorite} alt="" width='20px' height='20px' />
//                     <Links to='/favorite' activeClassName='active'>Favorites</Links>
//                 </DivHome> */}
//             </DivButtons>
//             <SearchBar />
//         </Navi>
//     )
// }}
