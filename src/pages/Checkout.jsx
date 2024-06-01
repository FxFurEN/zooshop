import React, { useState } from "react";
import { Footer, Navbar } from "../components";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { supabase } from "../lib/supabase";
import { notification } from 'antd';

const Checkout = () => {
  const state = useSelector((state) => state.handleCart);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    address: "",
    address2: "",
    city: "",
    zip: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase.from("orders").insert(formData);
      if (error) {
        throw error;
      }
      console.log(data);
      notification.success({
        message: 'Заказ оформлен',
        description: 'Ваш заказ успешно оформлен.',
      });
    } catch (error) {
      console.error(error.message);
      notification.error({
        message: 'Ошибка',
        description: 'Не удалось оформить ваш заказ. Пожалуйста, попробуйте еще раз.',
      });
    }
  };

  const EmptyCart = () => {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 py-5 bg-light text-center">
            <h4 className="p-3 display-5">Нет товаров в корзине</h4>
            <Link to="/" className="btn btn-outline-dark mx-4">
              <i className="fa fa-arrow-left"></i> Продолжить покупки
            </Link>
          </div>
        </div>
      </div>
    );
  };


  const ShowCheckout = () => {
    let subtotal = 0;
    let shipping = 30.0;
    let totalItems = 0;
    state.map((item) => {
      return (subtotal += item.price * item.qty);
    });

    state.map((item) => {
      return (totalItems += item.qty);
    });
    return (
      <>
        <div className="container py-5">
          <div className="row my-4">
            <div className="col-md-5 col-lg-4 order-md-last">
              <div className="card mb-4">
                <div className="card-header py-3 bg-light">
                  <h5 className="mb-0">Сводка заказов</h5>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      Товары ({totalItems})<span>{Math.round(subtotal)} тг.</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                      Доставка
                      <span>{shipping} тг.</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                      <div>
                        <strong>Итого</strong>
                      </div>
                      <span>
                        <strong>{Math.round(subtotal + shipping)} тг.</strong>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-7 col-lg-8">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h4 className="mb-0">Расчетный адрес</h4>
                </div>
                <div className="card-body">
                  <form className="needs-validation" onSubmit={handleSubmit} noValidate>
                    <div className="row g-3">
                      <div className="col-sm-6 my-1">
                        <label htmlFor="firstname" className="form-label">
                          Имя
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="firstname"
                          name="firstname"
                          placeholder=""
                          value={formData.firstname}
                          onChange={handleChange}
                          required
                        />
                        <div className="invalid-feedback">
                          Необходимо ввести правильное имя.
                        </div>
                      </div>

                      <div className="col-sm-6 my-1">
                        <label htmlFor="lastname" className="form-label">
                          Фамилия
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="lastname"
                          name="lastname"
                          placeholder=""
                          value={formData.lastname}
                          onChange={handleChange}
                          required
                        />
                        <div className="invalid-feedback">
                          Необходимо ввести правильную фамилию.
                        </div>
                      </div>

                      <div className="col-12 my-1">
                        <label htmlFor="email" className="form-label">
                          Почта
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          placeholder="you@example.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                        <div className="invalid-feedback">
                          Пожалуйста, введите действительный адрес электронной почты для получения обновлений о доставке.
                        </div>
                      </div>

                      <div className="col-12 my-1">
                        <label htmlFor="address" className="form-label">
                          Адресс
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="address"
                          name="address"
                          placeholder="1234 Main St"
                          value={formData.address}
                          onChange={handleChange}
                          required
                        />
                        <div className="invalid-feedback">
                          Пожалуйста, введите адрес доставки.
                        </div>
                      </div>

                      <div className="col-12">
                        <label htmlFor="address2" className="form-label">
                          Адресс 2{" "}
                          <span className="text-muted">(Опцианально)</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="address2"
                          name="address2"
                          placeholder="Apartment or suite"
                          value={formData.address2}
                          onChange={handleChange}
                          />
                          </div>
                          <div className="col-md-4 my-1">
                            <label htmlFor="city" className="form-label">
                              Город
                            </label>
                            <br />
                            <select
                              className="form-select"
                              id="city"
                              name="city"
                              value={formData.city}
                              onChange={handleChange}
                              required
                            >
                              <option value="">Выберите...</option>
                              <option>Уральск</option>
                            </select>
                            <div className="invalid-feedback">Пожалуйста, укажите действительный город.</div>
                          </div>
    
                          <div className="col-md-3 my-1">
                            <label htmlFor="zip" className="form-label">
                              Почтовый индекс
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="zip"
                              name="zip"
                              placeholder=""
                              value={formData.zip}
                              onChange={handleChange}
                              required
                            />
                            <div className="invalid-feedback">Почтовый индекс обязателен.</div>
                          </div>
                        </div>
    
                        <hr className="my-4" />
    
                        <button className="w-100 btn btn-primary " type="submit">
                          Продолжить заказ
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      };
    
      return (
        <>
          <Navbar />
          <div className="container my-3 py-3">
            <h1 className="text-center">Оформление заказа</h1>
            <hr />
            {state.length ? <ShowCheckout /> : <EmptyCart />}
          </div>
          <Footer />
        </>
      );
    };
    
    export default Checkout;
