import { useState } from "react";
import { connect } from "react-redux";
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
} from "reactstrap";
import { addItem } from "../actions/itemActions";

const ItemModal = ({ addItem }) => {
  const [modal, setModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
  });

  const toggle = () => setModal(!modal);

  const onChange = (e) => {
    setFormData({
      ...formData,
      name: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addItem(formData.name);
    setFormData({
      ...formData,
      name: "",
    });
  };

  return (
    <div>
      <Button color="dark" className="mb-3" onClick={toggle}>
        Add Item
      </Button>
      <Modal autoFocus={false} isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add To Shopping List</ModalHeader>
        <ModalBody>
          <Form onSubmit={(e) => onSubmit(e)}>
            <FormGroup>
              <Label for="name">Add Shopping Item</Label>
              <Input
                autoFocus
                type="text"
                name="name"
                placeholder="Add Shopping Item"
                value={formData.name}
                onChange={(e) => onChange(e)}
              />
            </FormGroup>
            <Button
              color="dark"
              className="mt-3 d-block"
              style={{ width: "100%" }}
              type="submit"
            >
              Submit
            </Button>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

const mapStateToProps = () => ({});

export default connect(mapStateToProps, { addItem })(ItemModal);
