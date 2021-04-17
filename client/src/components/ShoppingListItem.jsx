import { Button, ListGroupItem } from "reactstrap";

import { deleteItem } from "../actions/itemActions";
import { connect } from "react-redux";

const ShoppingListItem = ({ id, name, deleteItem }) => {
  return (
    <ListGroupItem>
      <Button
        className="btn btn-danger mr-3"
        onClick={() => {
          deleteItem(id);
        }}
      >
        &times;
      </Button>
      {name}
    </ListGroupItem>
  );
};

const mapStateToProps = (state) => ({ item: state.item });

export default connect(mapStateToProps, { deleteItem })(ShoppingListItem);
