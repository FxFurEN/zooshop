import React from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar, Product, Footer } from '../components';
import { Row, Col } from 'antd';
import { Card } from 'antd';

const Home = () => {
  const location = useLocation();

  if (location.pathname === '/product') {
    return (
      <>
        <Navbar />
        <Product />
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="container my-5 py-5">
        <Row gutter={[16, 16]}>
          <Col xs={24} md={12}>
            <CatInfo />
          </Col>
          <Col xs={24} md={12}>
            <DogInfo />
          </Col>
        </Row>
      </div>
      <Footer />
    </>
  );
};

export default Home;

const CatInfo = () => {
  const catImages = [
    'https://cdn.pixabay.com/photo/2016/02/10/16/37/cat-1192026_1280.jpg',
    'https://cdn.pixabay.com/photo/2015/03/27/13/16/cat-694730_1280.jpg',
    'https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_1280.jpg',
  ];

  return (
    <Card title="Информация о кошках" bordered={false}>
      <Row gutter={[16, 16]} align="middle">
        <Col xs={24} sm={8}>
          <img src={catImages[0]} alt="Cat" style={{ width: '100%' }} />
        </Col>
        <Col xs={24} sm={16}>
          <Card title="Советы по уходу за кошками" bordered={false}>
            <ul>
              <li>Кормите кошек качественным кормом, соответствующим их возрасту и состоянию здоровья.</li>
              <li>Не перекармливайте кошек, следите за их весом и состоянием.</li>
              <li>Обеспечьте кошкам доступ к чистой воде.</li>
              <li>Регулярно чистите кошачий туалет и меняйте наполнитель.</li>
              <li>Обеспечьте кошке игрушки и когтеточки для активности и ухода за когтями.</li>
              <li>Регулярно посещайте ветеринара для профилактических осмотров и вакцинаций.</li>
            </ul>
          </Card>
        </Col>
      </Row>
      <Row gutter={[16, 16]} align="middle" style={{ marginTop: '16px' }}>
        <Col xs={24} sm={8}>
          <img src={catImages[1]} alt="Cat" style={{ width: '100%' }} />
        </Col>
        <Col xs={24} sm={16}>
          <Card title="Забавные факты о кошках" bordered={false}>
            <ul>
              <li>Кошки имеют по пять пальцев на передних лапах, но только по четыре на задних.</li>
              <li>Кошки тратят примерно 70% своей жизни на сон.</li>
              <li>Кошки могут издавать более 100 различных звуков.</li>
              <li>Кошки обожают высоту и часто забираются на высокие места.</li>
              <li>Кошки имеют уникальные узоры на носу, аналогичные отпечаткам пальцев у людей.</li>
            </ul>
          </Card>
        </Col>
      </Row>
      <Row gutter={[16, 16]} align="middle" style={{ marginTop: '16px' }}>
        <Col xs={24} sm={8}>
          <img src={catImages[2]} alt="Cat" style={{ width: '100%' }} />
        </Col>
        <Col xs={24} sm={16}>
          <Card title="Здоровье кошек" bordered={false}>
            <ul>
              <li>Кошки чувствительны к изменениям в рационе и быстро могут набрать лишний вес.</li>
              <li>Важно регулярно проверять зубы кошек и производить профилактическую чистку.</li>
              <li>Кошки нуждаются в достаточном количестве физической активности для поддержания здоровья.</li>
            </ul>
          </Card>
        </Col>
      </Row>
    </Card>
  );
};

const DogInfo = () => {
  const dogImages = [
    'https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGRvZ3xlbnwwfHx8fDE2ODcyODg4MTY&ixlib=rb-4.0.3&q=80&w=400',
    'https://images.unsplash.com/photo-1507146426996-ef05306b995a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDIwfHxkb2d8ZW58MHx8fHwxNjg3Mjg4ODQz&ixlib=rb-4.0.3&q=80&w=400',
    'https://images.unsplash.com/photo-1560807707-8cc77767d783?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDN8fGRvZ3xlbnwwfHx8fDE2ODcyODg4ODQ&ixlib=rb-4.0.3&q=80&w=400'
  ];

  return (
    <Card title="Информация о собаках" bordered={false}>
      <Row gutter={[16, 16]} align="middle">
        <Col xs={24} sm={8}>
          <img src={dogImages[0]} alt="Dog" style={{ width: '100%' }} />
        </Col>
        <Col xs={24} sm={16}>
          <Card title="Советы по уходу за собаками" bordered={false}>
            <ul>
              <li>Кормите собак сбалансированным кормом, соответствующим их возрасту, размеру и активности.</li>
              <li>Не перекармливайте собак, следите за их весом и состоянием.</li>
              <li>Обеспечьте собакам доступ к чистой воде.</li>
              <li>Регулярно выгуливайте собак и обеспечивайте им достаточную физическую активность.</li>
              <li>Ухаживайте за шерстью собак, чистите уши и зубы.</li>
              <li>Регулярно посещайте ветеринара для профилактических осмотров и вакцинаций.</li>
            </ul>
          </Card>
        </Col>
      </Row>
      <Row gutter={[16, 16]} align="middle" style={{ marginTop: '16px' }}>
        <Col xs={24} sm={8}>
          <img src={dogImages[1]} alt="Dog" style={{ width: '100%' }} />
        </Col>
        <Col xs={24} sm={16}>
          <Card title="Забавные факты о собаках" bordered={false}>
            <ul>
              <li>Нос у каждой собаки уникален, как отпечаток пальца у человека.</li>
              <li>Собаки могут понимать до 250 слов и жестов.</li>
              <li>У собак есть специальные железы в лапах, которые выделяют уникальный запах, помогающий им метить территорию.</li>
              <li>Собаки могут различать цвета, но видят мир в оттенках синего и желтого.</li>
              <li>Собаки обладают отличным обонянием, которое в 40 раз сильнее, чем у человека.</li>
            </ul>
          </Card>
        </Col>
      </Row>
      <Row gutter={[16, 16]} align="middle" style={{ marginTop: '16px' }}>
        <Col xs={24} sm={8}>
          <img src={dogImages[2]} alt="Dog" style={{ width: '100%' }} />
        </Col>
        <Col xs={24} sm={16}>
          <Card title="Здоровье собак" bordered={false}>
            <ul>
              <li>Собаки нуждаются в регулярных физических нагрузках для поддержания здоровья и хорошего настроения.</li>
              <li>Важно следить за чистотой и состоянием ушей и зубов у собак.</li>
              <li>Собаки чувствительны к изменениям погоды и могут требовать дополнительного ухода в холодное или жаркое время года.</li>
            </ul>
          </Card>
        </Col>
      </Row>
  </Card>
);
};
