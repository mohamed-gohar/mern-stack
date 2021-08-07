import React from "react";
import "./App.css";
import AppNavbar from "./components/AppNavbar";
import ShoppingList from "./components/ShoppingList";
import { Provider } from "react-redux";
import store from "./redux/store";
import ItemModal from "./components/ItemModal";
import { Container } from "reactstrap";
import Toast from "./components/toast";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header>
          <AppNavbar />
        </header>
        <main>
          <Container>
            <ItemModal />
            <ShoppingList />
            <Toast />
          </Container>
        </main>
      </div>
    </Provider>
  );
}

export default App;
