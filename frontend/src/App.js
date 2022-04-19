import React, { Component } from "react";
import Modal from "./components/Modal";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewActive: false,
      songList: [],
      modal: false,
      activeItem: {
        title: "",
        genre: "",
        length: "",
        year: "",
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

  createItem = () => {
    const item = { title: "", artist: "", active: true };

    this.setState({ activeItem: item, modal: !this.state.modal });
  };

  editItem = (item) => {
    this.setState({ activeItem: item, modal: !this.state.modal });
  };

  displayCompleted = (status) => {
    if (status) {
      return this.setState({ viewActive: true });
    }

    return this.setState({ viewActive: false });
  };

  renderTabList = () => {
    return (
      <div className="nav nav-tabs">
        <span
          style={{cursor:"pointer"}}
          onClick={() => this.displayCompleted(true)}
          className={this.state.viewActive ? "nav-link active" : "nav-link"}
        >
          Active
        </span>
        <span
          style={{cursor:"pointer"}}
          onClick={() => this.displayCompleted(false)}
          className={this.state.viewActive ? "nav-link" : "nav-link active"}
        >
          Inactive
        </span>
      </div>
    );
  };

  renderItems = () => {
    const { viewActive } = this.state;
    const btnstyle = {
      marginRight: "10px"
    };
    const newItems = this.state.songList.filter(
      (item) => item.active === viewActive
    );

    return newItems.map((item) => (
      <li
        key={item.id}
        className="list-group-item d-flex justify-content-between align-items-center"
      >
        <span
          className={`song-title mr-2 ${
            this.state.viewActive ? "completed-song" : ""
          }`}
          title={item.title}
        >
          {item.title}
        </span>
        <span>
          <button 
            style={{marginRight:"10px"}}
            className="btn btn-secondary"
            onClick={() => this.editItem(item)}
          >
            Edit
          </button>
          <button 
            className="btn btn-danger"
            onClick={() => this.handleDelete(item)}
          >
            Delete
          </button>
        </span>
      </li>
    ));
  };

  render() {
    return (
      <main className="container">
        <h1 className="text-white text-uppercase text-center my-4">Music Library app</h1>
        <div className="row">
          <div className="col-md-6 col-sm-10 mx-auto p-0">
            <div className="card p-3">
              <div className="mb-4">
                <button
                  className="btn-margin btn btn-primary"
                  onClick={this.createItem}
                >
                  Add Song
                </button>
              </div>
              {this.renderTabList()}
              <ul className="list-group list-group-flush border-top-0">
                {this.renderItems()}
              </ul>
            </div>
          </div>
        </div>
        {this.state.modal ? (
          <Modal
            activeItem={this.state.activeItem}
            toggle={this.toggle}
            onSave={this.handleSubmit}
          />
        ) : null}
      </main>
    );
  }
}

export default App;