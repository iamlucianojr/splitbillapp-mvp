import React, { Component } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as OrderActions from "./store/actions/orders";

class Home extends Component {
  state = {
    consumer: "",
    item: {
      text: "",
      price: ""
    }
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.addConsumer(this.state.consumer);

    this.setState({ consumer: "" });
  };

  handleSubmitItem = event => {
    event.preventDefault();

    this.props.addItem({
      text: this.state.item.text,
      price: this.state.item.price
    });

    this.setState({ item: { text: "", price: "" } });
  };

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={e => this.setState({ consumer: e.target.value })}
            value={this.state.consumer}
          />
          <button type="submit">Add Consumer</button>
        </form>
        <ul>
          {this.props.consumers.map(consumer => <li key={consumer.id}>{consumer.name}</li>)}
        </ul>

        <form onSubmit={this.handleSubmitItem}>
          <input
            type="text"
            onChange={e => this.setState({ item: {
              text: e.target.value,
              price: this.state.item.price
            }})}
            value={this.state.item.text}
          />

          <input
            type="text"
            onChange={e => this.setState({ item: {
              text: this.state.item.text,
              price: e.target.value
            }})}
            value={this.state.item.price}
          />

          <button type="submit">Add Item</button>
        </form>
        <ul>
          {this.props.items.map(item => <li key={item.id}>{item.text} - $ {item.price}</li>)}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  consumers: state.consumers,
  items: state.items
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(OrderActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
