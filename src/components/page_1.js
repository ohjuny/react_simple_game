import React, { useState, useContext, useRef } from 'react';
import { Button, Form, Alert } from 'react-bootstrap';

import { Context } from '../context';

const Page1 = () => {
  const textInput = useRef();
  const context = useContext(Context);
  const [error, setError] = useState([false, ''])

  const validateInput = (value) => {
    if (value === '') {
      setError([true, 'Input was empty :('])
      return false;
    }
    if (value.length <= 2) {
      setError([true, 'Input was too short :('])
      return false
    }
    setError([false, ''])
    return true
  }

  const submitHandler = (e) => {
    e.preventDefault();
    const value = textInput.current.value;
    const valid = validateInput(value)

    if (valid) {
      textInput.current.value = ''
      context.addPlayer(value)
    }
  }

  console.log(context) // debugging

  return (
    <>
      <Form onSubmit={ submitHandler } className="mt-4">
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Add player name"
            name="player"
            ref={ textInput }
          />
        </Form.Group>

        { error[0] ?
        <Alert variant="danger">{ error[1]} </Alert>
        : null }

        <Button className="miami" variant="primary" type="submit">
          Add player
        </Button>
      </Form>
      { context.state.players.length > 0 ?
      <>
        <hr/>
        <ul className="list-group">
          { context.state.players.map((item, index) => (
            <li key={ index } className="list-group-item d-flex
            justify-content-between align-items-center list-group-item-action">
              { item }
              <span onClick={ () => {context.removePlayer(index)} } className="badge badge-danger">
                X
              </span>
            </li>
          )) }
        </ul>
      </>
      : null }

      { context.state.players.length > 0 ?
      <div onClick={ () => {context.nextPage()} } className="action-button">
        NEXT
      </div>
      : null}
    </>
  )
}

export default Page1;