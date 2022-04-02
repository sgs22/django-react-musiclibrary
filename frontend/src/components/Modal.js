import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

export default class CustomModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: this.props.activeItem,
    };
  }

  handleChange = (e) => {
    let { name, value } = e.target;

    if (e.target.type === "checkbox") {
      value = e.target.checked;
    }

    const activeItem = { ...this.state.activeItem, [name]: value };

    this.setState({ activeItem });
  };

  render() {
    const { toggle, onSave } = this.props;

    return (
      <Modal isOpen={true} toggle={toggle}>
        <ModalHeader toggle={toggle}>Song Item</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="title">Song Title</Label>
              <Input
                type="text"
                id="title"
                name="title"
                value={this.state.activeItem.title}
                onChange={this.handleChange}
                placeholder="Enter Song Title"
              />
            </FormGroup>
            <FormGroup>
              <Label for="artist">Artist</Label>
              <Input
                type="text"
                id="artist"
                name="artist"
                value={this.state.activeItem.artist}
                onChange={this.handleChange}
                placeholder="Enter Song Artist"
              />
            </FormGroup>
            <FormGroup>
              <Label for="genre">Genre</Label>
              <Input
                type="text"
                id="genre"
                name="genre"
                value={this.state.activeItem.genre}
                onChange={this.handleChange}
                placeholder="Enter Song Genre"
              />
            </FormGroup>
            <FormGroup>
              <Label for="length">Length</Label>
              <Input
                type="number"
                id="length"
                name="length"
                value={this.state.activeItem.length}
                onChange={this.handleChange}
                placeholder="Enter Song Length (Seconds)"
              />
            </FormGroup>
            <FormGroup>
              <Label for="year">Year</Label>
              <Input
                type="date"
                id="year"
                name="year"
                value={this.state.activeItem.year}
                onChange={this.handleChange}
                placeholder="Enter Song Year"
              />
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input
                  type="checkbox"
                  name="active"
                  checked={this.state.activeItem.active}
                  onChange={this.handleChange}
                />
                Active
              </Label>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button
            color="success"
            onClick={() => onSave(this.state.activeItem)}
          >
            Save
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}