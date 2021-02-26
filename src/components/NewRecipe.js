import React, {useState} from "react";
import db from "../services/firebase";

import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

import CreatableSelect from 'react-select/creatable';


function NewRecipe({setAddedRecipe}){
    const [ingredients, setIngredients] = useState([]);
    const [inputButtonText, setInputButtonText] = useState("Enter the Number of Ingredients");
    const [submited, setSubmited] = useState(false);

    const food =[
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ];

    const [ingredientsNumTag, setIngredientsNumTag] = useState([]);

    const [stepsTag, setStepsTag] = useState([
        <InputGroup className="instructions" key="step1">
            <InputGroup.Prepend>
                <InputGroup.Text id="step">1</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
                placeholder="Step"
                aria-label="Step"
                id={"step1"}
            />
        </InputGroup>
    ])


    function handleFoodChange(newValue, actionMeta){
        // console.group('Value Changed A');
        // console.log(newValue);
        // console.log(`action A: ${actionMeta.action}`);
        // console.groupEnd();
        if (actionMeta.action === "select-option" 
            || actionMeta.action === "create-option" 
            || actionMeta.action === "remove-value"){
            setIngredients(newValue);
            return;
        }
    };


    function toggleIngredientsInputed(){
        if(inputButtonText === "Enter the Number of Ingredients"){
            const newIngredientsNumTag = [];

            for (let i = 0; i < ingredients.length; i++){
                newIngredientsNumTag.push(
                    <InputGroup className="ingredient" key={"ingredients" + i } >
                        <InputGroup.Prepend>
                            <InputGroup.Text id="ingredient">{ingredients[i].value}</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            placeholder="Amount"
                            aria-label={ingredients[i].value}
                            id={"ingredients" + i }
                        />
                    </InputGroup>
                )
            }
            setIngredientsNumTag(newIngredientsNumTag);

            return setInputButtonText("Go Back to Inputing Ingredients");
        } 
        return setInputButtonText("Enter the Number of Ingredients");
    }



    function handleAddStepButton(){
        const newStepsTag = stepsTag.concat(
            <InputGroup className="instructions" key={"step" + (stepsTag.length + 1)}>
                <InputGroup.Prepend>
                    <InputGroup.Text id="step">{stepsTag.length + 1}</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    placeholder="Step"
                    aria-label="Step"
                    id={"step" + (stepsTag.length + 1)}
                />
            </InputGroup>
        );
        setStepsTag(newStepsTag);
    }

    // function handleDeleteStepButton(){
    //     const newSteps = steps.slice(0, -1)
    //     setSteps(newSteps);
    // }

    function handleSubmit(event){
        event.preventDefault();
        const e = event.target

        const ingredientsData = {};
        for (let i = 0; i < ingredients.length; i++){
            ingredientsData[ingredients[i].value] = parseInt(e["ingredients" + i].value);
        }

        const stepsData = {};
        for (let i = 0; i < stepsTag.length; i++){
            stepsData[i+1] = e["step" + (i+1)].value;
        }
        
        const newRecipe = {
            "name":e["MenuNameText"].value,
            "cook time":parseInt(e["CookTimeInt"].value),
            "servings":parseInt(e["ServingsInt"].value),
            "ingredients": ingredientsData,
            "instructions":stepsData,
            "comment": e["CommentsTextArea"].value
        }
        db.ref("recipes/" + e["MenuNameText"].value).set(newRecipe);
        setSubmited(true);
        setAddedRecipe(true);
    }

    if(submited) return(
        <><h1 id="submited">Submited!</h1>
            <Button variant="info" onClick={()=>{setSubmited(false)}}>
            Make another recipe
            </Button>
        </>
    )

    return (
    <div className="NewRecipe">
        <Form onSubmit={handleSubmit}>
            <Row>
                <Col md>
                    <Form.Group controlId="MenuNameText">
                        <Form.Label>Menu Name</Form.Label>
                        <Form.Control type="text" placeholder="Menu Name" />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group as={Col} controlId="CookTimeInt">
                        <Form.Label>Cook Time</Form.Label>
                        <Form.Control type="int" placeholder="Cook Time" />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group as={Col} controlId="ServingsInt">
                        <Form.Label>Servings</Form.Label>
                        <Form.Control as="select" >
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                        </Form.Control>
                    </Form.Group>
                </Col>
            </Row>
            {inputButtonText === "Enter the Number of Ingredients"?
                <CreatableSelect
                    defaultValue={ingredients}
                    id="food_select"
                    isMulti
                    isClearable
                    onChange={handleFoodChange}
                    options={food}
                    placeholder="Select Ingredients"
                />
    
            : ingredientsNumTag }


                <Button variant="info" onClick={toggleIngredientsInputed}>
                    {inputButtonText}
                </Button><br></br><br></br>

            {stepsTag}

            <Button variant="info" onClick={handleAddStepButton}>
            Add a Step 
            </Button><br></br><br></br>
            {/* <Button variant="info" onClick={handleDeleteStepButton}>
            Delete a Step 
            </Button> */}


            <Form.Group controlId="CommentsTextArea">
                <Form.Label>Comments</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    </div>)
}

  
export default NewRecipe;