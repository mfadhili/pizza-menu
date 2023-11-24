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
     const numPizzas = pizzas.length;
    // const numPizzas = [];
    return (
        <main className="menu">
            <h2>Our Menu</h2>
                {numPizzas > 0 ? (
                    <ul className="pizzas">
                        {pizzaData.map(pizza =>
                            (<Pizza pizzaObj={pizza} key={pizza.name}/>))
                        }
                    </ul>
                ): <p>We're still working working in our menu. Please come back later :)</p>}
        </main>
    );
}

function Pizza(props) {
    console.log(props);

    if (props.pizzaObj.soldOut)
        return null


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
    const closeHour = 19;
    const isOpen = hour >= openHour && hour <= closeHour;
    console.log(isOpen);

    // if (hour >= closeHour || hour <= openHour)
    //     alert(" Sorry we're closed");
    // else
    //     alert("We're currently open!");

    // Conditional rendering

    /* if multiple return of components*/
    /*if (!isOpen)
        return (
            <p>
                CLOSED. We're happy to welcome you between {openHour}:00 and {closeHour}:00.
            </p>
        );*/

    return (
        <footer className="footer">
            {isOpen ? (
                <Order closeHour={closeHour}/>
            ): (
                <p>
                    We're happy to welcome you between {openHour}:00 and {closeHour}:00.
                </p>)}
        </footer>
    )
}

function Order(props) {
    return (
        <div className="order">
            <p>
                We're are open until {props.closeHour}:00. Come visit us or order online.
            </p>
            <button className="btn">Order</button>
        </div>
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