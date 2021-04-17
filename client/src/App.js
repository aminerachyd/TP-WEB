import { Provider } from "react-redux";
import { Container } from "reactstrap";
import AppNavBar from "./components/AppNavBar";
import ItemModal from "./components/ItemModal";
import ShoppingList from "./components/ShoppingList";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <AppNavBar />
        <Container>
          <ItemModal />
          <ShoppingList />
        </Container>
      </div>
    </Provider>
  );
};

export default App;
