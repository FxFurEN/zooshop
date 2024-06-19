import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { supabase } from "../lib/supabase";
import { notification, Form, Input, Button, Select, Card, Divider } from 'antd';
import MaskedInput from 'antd-mask-input';
import { Footer, Navbar } from "../components";

const { Option } = Select;

const Checkout = () => {
  const state = useSelector((state) => state.handleCart);
  const [form] = Form.useForm();

  // Кастомный валидатор для номера карточки
  const validateCardNumber = (_, value) => {
    const rawValue = value.replace(/-/g, ''); // Удаляем все дефисы из значения
    const isDigitsOnly = /^\d+$/.test(rawValue); // Проверяем, состоит ли строка только из цифр
    if (!isDigitsOnly || rawValue.length !== 16) {
      return Promise.reject(new Error('Пожалуйста, введите полный номер карточки.'));
    }
    return Promise.resolve();
  };
  

  const handleSubmit = async (values) => {
    try {
      const { data, error } = await supabase.from("orders").insert(values);
      if (error) {
        throw error;
      }
      console.log(data);
      notification.success({
        message: 'Заказ оформлен',
        description: 'Ваш заказ успешно оформлен.',
      });
      window.location.reload();
    } catch (error) {
      console.error(error.message);
      notification.error({
        message: 'Ошибка',
        description: 'Не удалось оформить ваш заказ. Пожалуйста, попробуйте еще раз.',
      });
    }
  };

  const EmptyCart = () => (
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

  const ShowCheckout = () => { 
    let totalItems = 0;
    let subtotal = 0;
    state.forEach((item) => {
      totalItems += item.qty;
      subtotal += item.price * item.qty;
    });

    let shipping = subtotal * 0.1; 
    shipping += 30; 

    return (
      <div className="container py-5">
        <div className="row my-4">
          <div className="col-md-5 col-lg-4 order-md-last">
            <Card title="Сводка заказов" bordered={false}>
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                  Товары ({totalItems})<span>{Math.round(subtotal)} тг.</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                  Доставка
                  <span>{Math.round(shipping)} тг.</span>
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
            </Card>
          </div>
          <div className="col-md-7 col-lg-8">
            <Card title="Расчетный адрес" bordered={false}>
              <Form
                form={form}
                layout="vertical"
                onFinish={handleSubmit}
              >
                <Form.Item
                  name="firstname"
                  label="Имя"
                  rules={[{ required: true, message: 'Необходимо ввести правильное имя.' }]}
                >
                  <Input placeholder="Введите ваше имя" />
                </Form.Item>

                <Form.Item
                  name="lastname"
                  label="Фамилия"
                  rules={[{ required: true, message: 'Необходимо ввести правильную фамилию.' }]}
                >
                  <Input placeholder="Введите вашу фамилию" />
                </Form.Item>

                <Form.Item
                  name="email"
                  label="Почта"
                  rules={[{ required: true, type: 'email', message: 'Пожалуйста, введите действительный адрес электронной почты.' }]}
                >
                  <Input placeholder="you@example.com" />
                </Form.Item>

                <Form.Item
                  name="address"
                  label="Адрес"
                  rules={[{ required: true, message: 'Пожалуйста, введите адрес доставки.' }]}
                >
                  <Input placeholder="1234 Main St" />
                </Form.Item>

                <Form.Item
                  name="address2"
                  label="Адрес 2 (Опционально)"
                >
                  <Input placeholder="Apartment or suite" />
                </Form.Item>

                <Form.Item
                  name="city"
                  label="Город"
                  rules={[{ required: true, message: 'Пожалуйста, укажите действительный город.' }]}
                >
                  <Select placeholder="Выберите город">
                    <Option value="Уральск">Уральск</Option>
                  </Select>
                </Form.Item>

                <Form.Item
                  name="zip"
                  label="Почтовый индекс"
                  rules={[{ required: true, message: 'Почтовый индекс обязателен.' }]}
                >
                  <Input placeholder="Введите почтовый индекс" />
                </Form.Item>

                <Form.Item
                  name="cardNumber"
                  label="Номер карточки"
                  rules={[
                    { required: true, message: 'Необходимо ввести номер карточки.' },
                    { validator: validateCardNumber }, // Используем кастомный валидатор
                  ]}
                >
                  <MaskedInput mask="0000-0000-0000-0000" placeholder="Введите номер карточки" />
                </Form.Item>

                <Divider />

                <Form.Item>
                  <Button type="primary" htmlType="submit" block>
                    Продолжить заказ
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          </div>
        </div>
      </div>
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
