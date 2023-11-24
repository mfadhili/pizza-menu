import React from 'react';
import ReactDOM from 'react-dom/client'
import './index.css'


const App = () => {
    return (
        <div className="container">
            <Header />
            <Menu />
            <Footer />
        </div>
    );
};

function Header() {
    //const style = {color: "red", fontSize: "48px", textTransform: "uppercase"}
    return (
        <header className="header">
            <h1>Fast React Pizza Co.</h1>
        </header>

    );
}

function Menu() {
    const pizzas = pizzaData;
    const numPizzas = pizzas.length
    return (
        <main className="menu">
            <h2>Our Menu</h2>
            <div>
                {numPizzas > 0 && (
                    <ul className="pizzas">
                        {pizzaData.map(pizza =>
                            (<Pizza pizzaObj={pizza} key={pizza.name}/>))}
                    </ul>
                )}
            </div>
        </main>
    );
}

function Pizza(props) {
    return (
        <li className="pizza">
            <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name}/>
            <div className="">
                <h3>{props.pizzaObj.name}</h3>
                <p>{props.pizzaObj.ingredients}</p>
                <span>{props.pizzaObj.price}</span>
            </div>
        </li>
    );
}

function Footer() {
    const hour = new Date().getHours();
    console.log(hour);
    const openHour = 4;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;
    console.log(isOpen);

    // if (hour >= closeHour || hour <= openHour)
    //     alert(" Sorry we're closed");
    // else
    //     alert("We're currently open!");

    // Conditional rendering
    return (
        <footer className="footer">
            {isOpen && (
                <div className="order">
                    <p>
                        We're are open until {closeHour}:00. Come visit us or order online.
                    </p>
                    <button className="btn">Order</button>
                </div>
            )}
        </footer>
    )
}






// React v18 render
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

/* React before 18
* React.render(<App />, document.getElementById("root")*/

/* Mock Data*/
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