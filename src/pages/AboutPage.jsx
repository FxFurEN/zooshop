import React from 'react'
import { Footer, Navbar } from "../components";

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">О нас</h1>
        <hr />
        <p className="lead text-center">
          Добро пожаловать в наш зоомагазин! Мы стремимся предоставлять лучшие товары и услуги для ваших питомцев. 
          Наша цель - сделать жизнь ваших питомцев здоровой и счастливой. 
          В нашем ассортименте вы найдете всё, что необходимо для ваших пушистых, пернатых и чешуйчатых друзей.
        </p>
      </div>
      <Footer />
    </>
  )
}

export default AboutPage;
