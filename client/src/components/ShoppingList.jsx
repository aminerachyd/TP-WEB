import { useState } from "react";
import { Button, Container, ListGroup } from "reactstrap";
import { v4 as uuid } from "uuid";
import ShoppingListItem from "./ShoppingListItem";

const ShoppingList = () => {
  /**
   * Le state pour ce composant
   * Contient un stockage des items
   */
  const [state, setState] = useState({
    items: [
      { id: uuid(), name: "Eggs" },
      { id: uuid(), name: "Milk" },
      { id: uuid(), name: "Steak" },
      { id: uuid(), name: "Water" },
    ],
  });

  /**
   * Fonction pour retirer un item du state
   */
  const removeItem = (id) => {
    setState({
      items: state.items.filter((item) => item.id !== id),
    });
  };

  return (
    <Container>
      <Button
        color="dark"
        className="mb-2"
        onClick={() => {
          const name = prompt("Enter item");
          if (name) {
            setState({
              items: [
                ...state.items,
                {
                  id: uuid(),
                  name,
                },
              ],
            });
          }
        }}
      >
        Add Item
      </Button>
      <ListGroup>
        {state.items.map(({ id, name }) => (
          <ShoppingListItem
            key={id}
            id={id}
            name={name}
            removeItem={removeItem}
          />
        ))}
      </ListGroup>
    </Container>
  );
};

export default ShoppingList;
