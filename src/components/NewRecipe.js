import React, {useState, useEffect} from "react";

import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Dropdown  from "react-bootstrap/Dropdown";
import DropdownButton  from "react-bootstrap/DropdownButton";


function NewRecipe(){
    const []

    const [stepsTag, setStepsTag] = useState([
        <InputGroup className="instructions" key="step1">
            <InputGroup.Prepend>
                <InputGroup.Text id="step">1</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
                placeholder="Step"
                aria-label="Step"
                controlId={"step1"}
            />
        </InputGroup>
    ])

    const [ingredientsTag, setIngredientsTag] = useState([
        <Row>
            <Col md>
                <InputGroup className="ingredients" key="ingredient1">
                    <FormControl
                        placeholder="Ingredient"
                        aria-label="Ingredient"
                        controlId="ingredient1"
                    />
                    <InputGroup.Append>
                        <InputGroup.Text id="ingredient">1</InputGroup.Text>
                    </InputGroup.Append>
                </InputGroup>
            </Col>
            <Col md>
                <InputGroup className="ingredients" key="ingredient2">
                    <FormControl
                        placeholder="Ingredient"
                        aria-label="Ingredient"
                        controlId="ingredient2"
                    />
                    <InputGroup.Append>
                        <InputGroup.Text id="ingredient">1</InputGroup.Text>
                    </InputGroup.Append>
                </InputGroup>
            </Col>
            <Col md>
                <InputGroup className="ingredients" key="ingredient3">
                    <FormControl
                        placeholder="Ingredient"
                        aria-label="Ingredient"
                        controlId="ingredient3"
                    />
                    <InputGroup.Append>
                        <DropdownButton id="numOfIngredient" title="1" nemuRole="menu">
                            <Dropdown.Item >1</Dropdown.Item>
                            <Dropdown.Item  onClick={(e) =>{changeValue(e)}}>2</Dropdown.Item>
                            <Dropdown.Item >3</Dropdown.Item>
                        </DropdownButton>
                        {/* <DropdownButton variant="outline-secondary"
                        <InputGroup.Text id="ingredient">1</InputGroup.Text> */}
                    </InputGroup.Append>
                </InputGroup>
            </Col>
        </Row>
    ])


    function handleAddIngredientsButton(){
        const newIngredients = ingredientsTag.concat(
            <InputGroup className="ingredients" key={"ingredient" + ingredientsTag.length + 1}>
                <FormControl
                    placeholder="Ingredient"
                    aria-label="Ingredient"
                    controlId={"ingredient" + ingredientsTag.length + 1}
                />
                <InputGroup.Append>
                    <InputGroup.Text id="ingredient">{ingredientsTag.length + 1}</InputGroup.Text>
                </InputGroup.Append>
            </InputGroup>
        );
        setIngredientsTag(newIngredients);
    }


    function handleAddStepButton(){
        const newStepsTag = stepsTag.concat(
            <InputGroup className="instructions" key={"step" + stepsTag.length + 1}>
                <InputGroup.Prepend>
                    <InputGroup.Text id="step">{stepsTag.length + 1}</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    placeholder="Step"
                    aria-label="Step"
                    controlId={"step" + stepsTag.length + 1}
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
        console.log(e["MenuNameText"].value)
        const newRecipe = {
            "name":e["MenuNameText"].value,
            "cook time":e["CookTimeInt"].value,
            "ServingsInt":e["ServingsInt"].value,
            // "ServingsInt":e["ServingsInt"].value,
            // "ServingsInt":e["ServingsInt"].value,
        }
    }

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

        {ingredientsTag}
            <br></br>
            <Button variant="info" onClick={handleAddIngredientsButton}>
            Add More Ingredients
            </Button>

        {stepsTag}
            <br></br>

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