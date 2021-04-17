import PropTypes from "prop-types";
import { useEffect } from "react";
import { connect } from "react-redux";
import { ListGroup } from "reactstrap";
import { getItems } from "../actions/itemActions";
import ShoppingListItem from "./ShoppingListItem";

const ShoppingList = ({ item: { items }, getItems }) => {
  useEffect(() => {
    getItems();
  }, [getItems]);

  return (
    <ListGroup>
      {items.map(({ _id, name }) => (
        <ShoppingListItem key={_id} id={_id} name={name} />
      ))}
    </ListGroup>
  );
};

ShoppingList.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  item: state.item,
});

export default connect(mapStateToProps, { getItems })(ShoppingList);
