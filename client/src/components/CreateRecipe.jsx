import React, {useState, useEffect} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {postRecipe, getDiets} from '../actions/index'
import { useDispatch, useSelector } from 'react-redux'
import styles from './CreateRecipe.module.css'

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

function validate(state) {
  let errors = {};
  if (!state.title) {
    errors.title = "Title is required";
  }
  if (!state.summary) {
    errors.summary = "Summary is required";
  }
  if (state.healthScore < 0 || state.healthScore > 100) {
    errors.healthScore = "Choose a scoreHealth between 0 and 100";
  }
  if (state.spoonacularScore < 0 || state.spoonacularScore > 100) {
    errors.spoonacularScore = "Your punctuation must be between 0 and 100";
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
      return alert("llena todos los campos");
    }
    dispatch(postRecipe(input));
    alert("Recipe Create");
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
        <div className={styles.all}>
      <div className={styles.ack}>
        <Link to='/home'><button className={styles.boton}>Go back</button></Link>
        <div className={styles.container}>
          <p>CREAT YOUR OWN RECIPE...</p>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className={styles.boxis}>
              <label>Title:</label>
              <input
                type="text"
                name="title"
                value={input.title}
                placeholder="Title"
                onChange={handleInputChange}
              />
            </div>
            {errors.title && <h5> {errors.title}</h5>}
            <div className={styles.boxis}>
              <label>SpoonacularScore:</label>
              <input
                type="number"
                name="spoonacularScore"
                value={input.spoonacularScore}
                placeholder="spoonacularScore"
                onChange={handleInputChange}
              />
            </div>
            {errors.spoonacularScore && <h5>{errors.spoonacularScore}</h5>}
            <div className={styles.boxis}>
              <label>HealthScore:</label>
              <input
                type="number"
                name="healthScore"
                value={input.HealthScore}
                placeholder="HealthScore"
                onChange={handleInputChange}
              />
            </div>
            {errors.HealthScore && <h5>{errors.HealthScore}</h5>}
            <div className={styles.boxis}>
              <label>Summary:</label>
              <input
                type="text"
                name="summary"
                value={input.summary}
                placeholder="Summary"
                onChange={handleInputChange}
              />
            </div>
            {errors.Summary && <h5>{errors.Summary}</h5>}
            <div className={styles.boxis}>
              <label>Steps:</label>
              <input
                type="text"
                name="analyzedInstructions"
                value={input.analyzedInstructions}
                placeholder="steps"
                onChange={handleInputChange}
              />
              {errors.analyzedInstructions && <h5>{errors.analyzedInstructions}</h5>}
            </div>
            <div className={styles.boxis}>
              <label>Image:</label>
              <input
                type="url"
                name="image"
                value={input.image}
                placeholder="image url"
                onChange={handleInputChange}
              />
            </div>
            <div className={styles.check}>
              {diets.map((diet) => {
                return (
                  <span key={diet.name}>
                    <input
                      className={styles.in}
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
            </div>
            {
            <ul><li>{input.diets.map(el=> el + ",")}</li></ul>
            }
            {
                input.diets.map(el =>
                    <div className='divDiet'>
                        <p>{el}</p>
                        <button className='botonX' onClick={() =>handleDelete(el)}>X</button>
                    </div>)
            }
            <div>
              <button className={styles.boton} type="submit">
                CREATE ♥
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
        
    )

}