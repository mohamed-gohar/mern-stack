import React, { Component } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Button, ListGroup, ListGroupItem, Spinner } from "reactstrap";
import { connect } from "react-redux";
import { getItems, deleteItem } from "../redux/actions/itemActions";
import PropTypes from "prop-types";

class ShoppingList extends Component {
  componentDidMount() {
    this.props.getItems();
  }

  render() {
    const { items, isLoading } = this.props.item;
    if (isLoading) {
      return (
        <div className="text-center">
          <Spinner type="grow" color="success" />
        </div>
      );
    } else {
      return (
        <ListGroup>
          <TransitionGroup className="shopping-list">
            {items.map(({ _id, name }) => (
              <CSSTransition timeout={350} classNames="fade" key={_id}>
                <ListGroupItem>
                  <Button
                    className="remove-btn"
                    color="danger"
                    size="sm"
                    onClick={() => {
                      this.props.deleteItem(_id);
                    }}
                  >
                    &times;
                  </Button>
                  {name}
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      );
    }
  }
}

ShoppingList.protoType = {
  getItems: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  item: state.item,
});

export default connect(mapStateToProps, { getItems, deleteItem })(ShoppingList);
