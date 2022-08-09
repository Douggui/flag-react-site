import axios from "axios";
import React from "react";
import Logo from "../components/Logo";
import Nav from "../components/Navigation";





const News = () => {

    const getData = () => {
        axios.get('3003').then((res) => console.log(res));
    }

    getData();
    return (
        <div className="news-container">
            <Nav />
            <Logo />
            <h1>News</h1>
            <form >
                <input type="text" placeholder="Nom" />
                <textarea placeholder="Message"></textarea>
                <input type="submit" value="Envoyer" onClick={(e) => { this.addBook(e) }} />
                <ul>

                </ul>
            </form>

        </div>

    )


}



export default News