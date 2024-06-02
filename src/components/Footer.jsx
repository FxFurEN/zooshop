import React from "react";
import { Row, Col, Typography, Space } from "antd";
import {
  FacebookOutlined,
  InstagramOutlined,
  WhatsAppOutlined,
} from '@ant-design/icons';

const { Text, Title } = Typography;

const Footer = () => {
  return (
    <footer className="footer text-center py-5" style={{ backgroundColor: "#f0f0f0" }}>
      <div className="container">
        <Row gutter={[16, 16]} justify="center">
          <Col xs={24} sm={12} md={6}>
            <Title level={5}>О компании</Title>
            <Text>Мы предоставляем лучшие товары для вас. Наша цель - ваше удовлетворение.</Text>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Title level={5}>Контакты</Title>
            <Space direction="vertical">
              <Text>Адрес: проспект Достык-Дружбы 160, Уральск, Казахстан</Text>
              <Text>Телефон: +7 7112 30 70 06</Text>
              <Text>Email: zooshop_america@gmail.com</Text>
            </Space>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Title level={5}>Навигация</Title>
            <Space direction="vertical">
              <Text><a href="/">Главная</a></Text>
              <Text><a href="/shop">Магазин</a></Text>
              <Text><a href="/about">О нас</a></Text>
              <Text><a href="/contact">Контакты</a></Text>
            </Space>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Title level={5}>Следите за нами</Title>
            <Space>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <WhatsAppOutlined style={{ fontSize: '24px', color: '#00acee' }} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <InstagramOutlined style={{ fontSize: '24px', color: '#C13584' }} />
              </a>
            </Space>
          </Col>
        </Row>
        <Row justify="center" style={{ marginTop: "40px" }}>
          <Col>
            <Text type="secondary">© 2024 America. All rights reserved.</Text>
          </Col>
        </Row>
      </div>
    </footer>
  );
};

export default Footer;
