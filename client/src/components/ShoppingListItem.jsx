import { Button, ListGroupItem } from "reactstrap";

const ShoppingListItem = ({ id, name, removeItem }) => {
  return (
    <ListGroupItem>
      <Button
        className="btn btn-danger mr-3"
        onClick={() => {
          removeItem(id);
        }}
      >
        &times;
      </Button>
      {name}
    </ListGroupItem>
  );
};

export default ShoppingListItem;
