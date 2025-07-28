import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  /* const HeaderStyle = {
    color: "red",
    fontSize: "48px",
    textTransform: "uppercase",
  }*/
  const style = {};
  return (
    <header className="header">
      <h1 style={style}> Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const Pizzas = pizzaData;
  //const Pizzas = [];
  const NumPizza = Pizzas.length;
  return (
    <main className="menu">
      <h2>Our menu</h2>
      {NumPizza > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. ALL
            from our stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {Pizzas.map((pizza) => (
              <Pizza pizzaobj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu please come back latar:)</p>
      )}

      {/* <Pizza
        name="Pizza Spinaci"  
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas\spinaci.jpg"
        price={12}
      />
      <Pizza
        name="Pizza Margherita"
        ingredients="Tomato and mozarella"
        photoName="pizzas/margherita.jpg"
        price={10}
      /> */}
    </main>
  );
}
function Pizza({ pizzaobj }) {
  console.log(pizzaobj);

  //if (pizzaobj.soldOut) return null;

  return (
    <li className={`pizza ${pizzaobj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaobj.photoName} alt={pizzaobj.name} />
      <div>
        <h2>{pizzaobj.name}</h2>
        <p>{pizzaobj.ingredients}</p>
        <span>{pizzaobj.soldOut ? "SOLD OUT" : `$${pizzaobj.price}`}</span>

        {/* {pizzaobj.soldOut ? (
          <span>SOLD OUT</span>
        ) : (
          <span>{pizzaobj.price}</span>
        )} */}
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  /* if (hour >= openHour && hour <= closeHour) alert("We're currently opem!");
  else alert("Sorry We're closed");
*/
  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHours={closeHour} openHours={openHour} />
      ) : (
        <p>
          We're happy to wellcome between {openHour}:00 and {closeHour}:00{" "}
        </p>
      )}
    </footer>
  );

  //return React.createElement("Footer", null, "We're currently open!" )
}

function Order({ closeHours, openHours }) {
  return (
    <div className="order">
      <p>
        we're open from {openHours}:00, to {closeHours}:00, come visit us or
        order online .
      </p>
      <button className="btn">Order Now</button>
    </div>
  );
}
//react v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
