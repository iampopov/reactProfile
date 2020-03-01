import React, { useState } from "react";
import axios from "axios";
import {  Button, Form, FormGroup, Label, Input, Jumbotron } from 'reactstrap';
import { LargeElementWrapper } from "../styles"


function MyForm() {
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null
  });

  const [validate, setValidate] = useState({
    emailState: "",
    messageState: ""
  });

  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg }
    });
    if (ok) {
      form.reset();
    }
  };
  const handleOnSubmit = e => {
    e.preventDefault();
    const form = e.target;
    setServerState({ submitting: true });
    axios({
      method: "post",
      url: "https://formspree.io/xyyjpnqa",
      data: new FormData(form)
    })
      .then(r => {
        handleServerResponse(true, "Thanks!", form);
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error, form);
      });
  };

  const validateForm = (e) => {
    const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let messageState;
    let emailState;
    if (e.target.name === "email") { 
      if (emailRex.test(e.target.value)) {
        emailState = 'has-success'
      } else {
        emailState = 'has-danger'
      }
      setValidate({ ...validate, emailState })
    } else if (e.target.name === "message") {
      if (e.target.value.length > 6) {
        messageState = "has-success"
      } else {
        messageState = "has-danger"
      }
      setValidate({ ...validate, messageState })
    }
    }

  return (
    <LargeElementWrapper>
    <Jumbotron>
      <h5 className="display-3">Intersted to learn more? Contact Me:</h5>
      <hr className="my-2" />
      <Form onSubmit={handleOnSubmit}>
      <FormGroup>
        <Label htmlFor="email">Email:</Label>
        <Input id="email" type="email" name="email" required
        onChange = {validateForm} 
        valid={ validate.emailState === 'has-success' }
        invalid={ validate.emailState === 'has-danger' }
        />
      </FormGroup>
       <FormGroup> 
        <Label htmlFor="message">Message:</Label>
        <Input type="textarea" name="message" id="message"
        onChange = {validateForm} 
        valid={ validate.messageState === 'has-success' }
        invalid={ validate.messageState === 'has-danger' }
        />
      </FormGroup>
        <Button type="submit" disabled={serverState.submitting}>
          Submit
        </Button>
        {serverState.status && (
          <p className={!serverState.status.ok ? "errorMsg" : ""}>
            {serverState.status.msg}
          </p>
        )}
      </Form>
    </Jumbotron>
    </LargeElementWrapper>
  );
};

export default MyForm;