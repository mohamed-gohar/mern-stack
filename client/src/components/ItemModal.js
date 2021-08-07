import React, { useState } from "react";
import { connect } from "react-redux";
import { addItem } from "../redux/actions/itemActions";
import {
  Button,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
} from "reactstrap";

const ItemModal = ({ addItem }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [blur, setBlur] = useState(false);

  const trimedName = name.trim();

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    setBlur(true);
    if (trimedName) {
      addItem({ name });
      toggle();
    }
  };

  return (
    <>
      <Button color="dark" onClick={toggle} style={{ margin: "2rem 0" }}>
        Add Item
      </Button>
      <Modal isOpen={isOpen} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add to shopping list</ModalHeader>
        <ModalBody>
          <Form onSubmit={onSubmitHandler} autoComplete="off">
            <FormGroup>
              <Label for="name">Item:</Label>
              <Input
                type="text"
                name="name"
                id="name"
                value={name}
                placeholder="add shopping item..."
                onChange={(e) => setName(e.target.value)}
                valid={trimedName !== ""}
                onBlur={() => setBlur(true)}
                invalid={blur && trimedName === ""}
              />
              <FormFeedback inValid>add item</FormFeedback>
            </FormGroup>
            <Button color="dark" block>
              Add Item
            </Button>
          </Form>
        </ModalBody>
      </Modal>
    </>
  );
};

export default connect(null, { addItem })(ItemModal);
