import React, { useEffect } from 'react'
import {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRecipes, filterRecipesByDiets, filterScore, orderByName } from '../actions';
import { Link } from 'react-router-dom';
import Cards from './Cards';
import Paged from './Paged';
import SearchBar from './SearchBar';
import styled from 'styled-components'
import Navbar from './Navbar';
import Footer from './Footer';
import Banner from './Banner';
import loader from '../assets/loader.gif'


const Container = styled.div`

    height: 100vh;
    display: grid;
    grid-gap: 3px;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: auto auto auto auto auto auto;
    grid-template-areas: 
        "N N N N N N N N N N N N"
        "B B B B B B B B B B B B"
        "P P P P P P P P P P P P"
        ". F R R R R R R R R R ."
        "FO FO FO FO FO FO FO FO FO FO FO FO"
        ;

`
const NavbarHome = styled.div`
    grid-area: N;
    
    padding-bottom:20px;

`
const BannerHome = styled.div`
    grid-area: B;
    

`
const Filtros = styled.div`
    padding: 1em;
    grid-area: F;
    border-bottom: 5vh solid $color;

    /* text-align:center;
  background:mix($color,#fff,10%);
  min-height:95vh;
  margin:0;
  padding:0;
  border-bottom: 5vh solid $color;
  font-family: "Myriad Pro","Arial",sans;
  font-size:24px; */
`
const RecipeContainer = styled.div`
    padding: 1em;
    grid-area: R;
    display: flex;
    justify-content: center;
    align-items: center;

`
const PagedHome = styled.div`
    grid-area: P;
    background-color: #fff;
    
`
const FooterHome = styled.div`
    grid-area: FO;
    
`

const Divpre = styled.div`
    height: auto;
`;



// const Paged = styled.div`
//     grid-area: Paged;
//     background-color: var(--quaternary-color);

// `


export default function Home(){
    const dispatch = useDispatch()


    const allRecipes = useSelector((state) => state.recipes)
    const [orden, setOrden] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const [recipesPerPage, setRecipesPerPage] = useState(9)
    const indexOfLastRecipe = currentPage * recipesPerPage
    const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage
    const currentRecipes = allRecipes.slice(indexOfFirstRecipe, indexOfLastRecipe)
    

    const paged = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    useEffect(()=>{
        dispatch(getRecipes())
    },[dispatch])


    function handleClick(e){
        e.preventDefault();
        dispatch(getRecipes());
    }

    function handleFilterDiets(e){
        e.preventDefault();
        dispatch(filterRecipesByDiets(e.target.value))
        setCurrentPage(1)
    }
    
    function handleFilterScore(e){
        dispatch(filterScore(e.target.value))
    }
    function handleFilterScore(e) {
        e.preventDefault();
        dispatch(filterScore(e.target.value))
        setCurrentPage(1)
        setOrden(`Ordenado ${e.target.value}`)
    };

    function handleSort(e){
        e.preventDefault();
        dispatch(orderByName(e.target.value))
        setCurrentPage(1);
        setOrden(`Ordenado ${e.target.value}`)
    }

    // function handleFilterCreated(e){
    //     dispatch(filterRecipeCreated(e.target.value))
    // }
    
    return (
        <Container>
            <NavbarHome>
                <Navbar/>
            </NavbarHome>
            <BannerHome>
                <Banner/>
            </BannerHome>            
                <Filtros>    
                    
                        <select onChange={(e) => {handleSort(e)}}>
                            <option value="asc">A - Z</option>
                            <option value="des">Z - A</option>
                        </select>                        
                                

                    <select onChange={(e) => {handleFilterDiets(e)}}>
                        <option value="all">All</option>
                        <option value="paleolithic">Paleo</option>
                        <option value="vegan">Vegan</option>
                        <option value="dairy free">Dairy free</option>
                        <option value="primal">Primal</option>
                        <option value="pescatarian">Pescatarian</option>
                        <option value="whole 30">Whole 30</option>
                        <option value="vegetarian">Vegetarian</option>
                        <option value="fodmap friendly">Low foodmap</option>
                        <option value="gluten free">Gluten free</option>
                        <option value="ketogenic">Ketogenic</option>
                        <option value="lacto ovo vegetarian">Lacto ovo vegetarian</option>                
                    </select>

                    <select onChange={(e) =>    {handleFilterScore(e)}}>
                        <option value="asc">"[0 - 100]"</option>
                        <option value="button">"[100 - 0]"</option>
                    </select>
                </Filtros>
            <PagedHome>
                <Paged
                recipesPerPage = {recipesPerPage}
                allRecipes={allRecipes.length}
                paged = {paged}
                />
            </PagedHome>
                {/* <select onChange={e => handleFilterCreated(e)}>
                    <option value="all">All</option>
                    <option value="created">Created Recipes</option>
                    <option value="api">Recipes Cataloge</option>
                </select> */}
            {/* {
                currentRecipes?.map(c=>{
                    return (
                        <Fragment>
                        <Link to={"/home/" + c.id}>
                        <Card image={c.image} title={c.title} diets={c.diets.name} spoonacularScore={c.spoonacularScore} key={c.id} />
                        </Link>
                        </Fragment>
                        )
                    })
                } */}
            <RecipeContainer>
                {
                    (!currentRecipes.length)
                    ? <img src="https://cdn.dribbble.com/users/645440/screenshots/3266490/loader-2_food.gif" alt="Loading..." />
                    : <Divpre id='divpre'></Divpre>
                }
                <Cards currentRecipes={currentRecipes}/>
                

                    

                

            </RecipeContainer>
            <FooterHome>
                <Footer/>

            </FooterHome>
      </Container>  
    )
}

// {
//                 (!currentRecipes.length)
//                     ? <img src={loader} alt='Cargando...' />
//                     : <Divpre id='divpre'>
//                         <DivVideoHome>
//                             <Video muted autoPlay loop>
//                                 <source src={video1} type="video/mp4"/>
//                             </Video>
//                             <DivVideoColor>
//                                 <H1Banner>Discover our <Span>Recipes</Span></H1Banner>
//                             </DivVideoColor>
//                         </DivVideoHome>
//                         {/* <H1>Recipes</H1> */}
//                         <Body>
//                             <Filter setCurrentPage={setCurrentPage} setOrder={setOrder}/>
//                             <Cards currentRecipes={currentRecipes}/>
//                         </Body>
//                         <Paged 
//                             recipePerPage={recipePerPage}
//                             recipes={recipes.length}
//                             paged={paged}
//                             currentPage={currentPage}
//                         />
//                     </Divpre> 
//             }
// "https://monophy.com/media/Jt5i0W3Jgh77czf3F6/monophy.gif"