import './App.css';
import React, { Component } from 'react'
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewActive: true,
      songList: [],
      modal: false,
      activeItem: {
        title: "",
        artist: "",
        active: false,
      },
    };
  }

  componentDidMount() {
    this.refreshList();
  }

  refreshList = () => {
    axios
      .get("/api/songs/")
      .then((res) => this.setState({ songList: res.data }))
      .catch((err) => console.log(err));
  };

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };

  handleSubmit = (item) => {
    this.toggle();

    if (item.id) {
      axios
        .put(`/api/songs/${item.id}/`, item)
        .then((res) => this.refreshList());
      return;
    }
    axios
      .post("/api/songs/", item)
      .then((res) => this.refreshList());
  };

  handleDelete = (item) => {
    axios
      .delete(`/api/songs/${item.id}/`)
      .then((res) => this.refreshList());
  };
}

export default App;
