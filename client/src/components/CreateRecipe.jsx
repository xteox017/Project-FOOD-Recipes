import React, {useState, useEffect} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {postRecipe, getDiets} from '../actions/index'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import fondoForm1 from '../assets/fondoForm1.jpg'

// export default function createRecipe(){
//     const dispatch = useDispatch()
//     const diets = useSelector((state) => state.diets)

//     const [input, setInput] = useState({
//         title: "",
//         summary: "",
//         analyzedInstructions: "",
//         dishTypes: [],
//         image: "",
//         readyInMinutes:"",
//         cuisines:[],
//         diets:[],
//     })

//     useEffect(()=>{
//         dispatch(getDiets())
//     },[])


const BodyForm = styled.body`
  display:flex;
  height:100vh;

  justify-content: left;
  align-items:center;
  padding: 10px;
  background: url(${fondoForm1});
  background-size:cover;
  background-position:center center;
  background-attachment:fixed;
    
 
  /* background: linear-gradient(135deg, #71b7e6, #9b59b6); */

`
const Container = styled.div`
  max-width: 700px;
  width:100%;
  background-color:#fff;
  opacity: 0.7;
  padding: 25px 30px;
  border-radius: 5px;
  margin-left:50px;
  


`

const Title = styled.div`
  font-size: 25px;
  font-weight:500;
  position: relative;

  ::before{
    content: " ";
    position: absolute;
    left: 0;
    bottom:0;
    height: 3px;
    width: 30px;
    background:#9b59b6;
  }

`
const Formulario = styled.form`
  display: flex;
  flex-direction: column;
  justify-content:space-between;
  margin:25px;
 
`

const RecipeDetail = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content:space-between;
  margin: 20px 0 12px 0;
`
const Details = styled.label`
font-weight: 500;
margin-bottom: 5px;
display:block;
`
const Dietsditails = styled.div`
  display: block;
`
const Inputbox = styled.div`
  margin-bottom:15px;
  width: calc(100% / 2 -20px);
  display: block;
  

  input{
    height: 45px;
    width:100%;
    outline: none;
    border-radius: 5px;
    border: 1px solid #ccc;
    padding-left: 15px;
    font-size: 16px;
    border-bottom-width: 2px;
    transition: all 0.3s ease;

    &:focus{

    }

    &:valid{
      border-color: #9b59b6;
    }
  }
`

// const Texto = styled.textarea`
//   margin-bottom:15px;
//   width: calc(100% / 2 -20px);
//   display: block;
  

//   input{
//     height: 45px;
//     width:100%;
//     outline: none;
//     border-radius: 5px;
//     border: 1px solid #ccc;
//     padding-left: 15px;
//     font-size: 16px;
//     border-bottom-width: 2px;
//     transition: all 0.3s ease;

    
//     &:valid{
//       border-color: #9b59b6;
//     }
//   }
// `
const Dietstypes = styled.span`
  font-size: 20px;
  font-weight: 500;
  
`

const Types = styled.span`
  
  width:80%;
  justify-content:space-between;
  margin: 14px 0;
  

  /* input{
    height: 18px;
    width:18px;
    background: #d9d9d9;
    border-radius: 50%;
    margin-right:10px; */

`

const ButtonSub = styled.button`
  cursor: pointer;
  font-size: 25px;
  font-weight:400;
  display: flex;
`

const DivButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
function validate(state) {
  let errors = {};
  if (!state.title) {
    errors.title = "Title is required";
  }
  if (!state.summary) {
    errors.summary = "Summary is required";
  }
  if (state.healthScore < 0 || state.healthScore > 100) {
    errors.healthScore = "The score selected must be beetween 0 and 100";
  }
  if (state.spoonacularScore < 0 || state.spoonacularScore > 100) {
    errors.spoonacularScore = "The score selected must be beetween 0 and 100";
  }
  if (!state.steps) {
    errors.steps = "Steps is required";
  }
  return errors;
}


export default function CreateRecipe() {
  const dispatch = useDispatch();
  const history = useHistory();
  const diets = useSelector((state) => state.diets);
  const [errors, setErrors] = useState({});

  const [input, setInput] = useState({
    title: "",
    summary: "",
    spoonacularScore: "",
    healthScore: "",
    image: "",
    analyzedInstructions: "",
    diets: [],
  });
  useEffect(() => {
    dispatch(getDiets());
  }, []);

  function handleInputChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    console.log(input)
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }

  function handleCheck(e) {
    if (e.target.checked) {
      setInput({
        ...input,
        diets: [...input.diets, e.target.value],
      });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (errors.title || errors.summary) {
      return alert("At least title and summary must be completed!");
    }
    if (errors.spoonacularScore || errors.healthScore) {
      return alert("The score selected must be beetween 0 and 100",);
    }
    dispatch(postRecipe(input));
    alert("Recipe Created");
    setInput({
      title: "",
      summary: "",
      spoonacularScore: "",
      healthScore: "",
      image: "",
      analyzedInstructions: "",
      diets: [],
    });
    history.push("/home");
  }

  function handleDelete(el){
      setInput({
          ...input,
          diets: input.diets.filter(d => d !== el)
      })
  }
    return (
      <BodyForm>
        
      
        <Container>


        <Link to='/home'><button>Go back</button></Link>
        <Title> Create your own recipe!</Title>
          
          <Formulario onSubmit={(e) => handleSubmit(e)}>
          <RecipeDetail >
            
            <Inputbox>
              <Details>Title:</Details>
              <input
                type="text"
                name="title"
                value={input.title}
                placeholder="Title"
                onChange={handleInputChange}
              />
            </Inputbox>
            {errors.title && <h5> {errors.title}</h5>}
            
            <Inputbox>
              <Details>Score:</Details>
              <input
                type="number"
                min="0"
                max="100"
                step="1"
                name="spoonacularScore"
                value={input.spoonacularScore}
                placeholder="Score"
                id="spoonacularScore"
                onChange={handleInputChange}
              />
            </Inputbox>
            {errors.spoonacularScore && <h5>{errors.spoonacularScore}</h5>}

            <Inputbox>
              <Details>Health Score:</Details>
              <input
                type="number"
                min="0"
                max="100"
                step="1"
                name="healthScore"
                value={input.healthScore}
                placeholder="Health Score"
                onChange={handleInputChange}
              />
            </Inputbox>
            {errors.healthScore && <h5>{errors.healthScore}</h5>}

            <Inputbox>
              <Details>Summary:</Details>
              <input
                type="text"
                name="summary"
                value={input.summary}
                placeholder="Summary"
                onChange={handleInputChange}
              />
            </Inputbox>
            {errors.summary && <h5>{errors.summary}</h5>}

            <Inputbox>
              <Details>Steps:</Details>
              <input
                type="text"
                name="analyzedInstructions"
                value={input.analyzedInstructions}
                placeholder="Steps"
                onChange={handleInputChange}
              />
            </Inputbox>
              {errors.analyzedInstructions && <h5>{errors.analyzedInstructions}</h5>}
            
            <Inputbox>
              <Details>Image:</Details>
              <input
                type="url"
                name="image"
                value={input.image}
                placeholder="Image url"
                onChange={handleInputChange}
              />
            </Inputbox>
              <Dietstypes> Diets Types</Dietstypes><br />
            <Dietsditails>
              {diets.map((diet) => {
                return (
                  <span key={diet.name}>
                    <input
                      
                      key={diet.id}
                      type="checkbox"
                      value={diet.name}
                      name={diet.name}
                      onChange={(e) => handleCheck(e)}
                    />
                    {diet.name}
                  </span>
                );
              })}
            </Dietsditails>
            
        </RecipeDetail>
        <DivButton>
             <ButtonSub  type="submit">
                CREATE ♥
              </ButtonSub>
        </DivButton>
            
            
      
          </Formulario>
    </Container>
    </BodyForm>    
    )

}

/* {
            <ul><li>{input.diets.map(el=> el + ",")}</li></ul>
            }
            {
                input.diets.map(el =>
                    <div>
                        <li>{el}</li>
                        <button className='botonX' onClick={() =>handleDelete(el)}>X</button>
                    </div>)
            } */