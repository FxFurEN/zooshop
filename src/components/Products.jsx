import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { Link } from "react-router-dom";
import { supabase } from "../lib/supabase";

const Products = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [animalTypeFilter, setAnimalTypeFilter] = useState("all");

  let componentMounted = true;

  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    const getUser = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (data) {
        setUser(data.user);
      } else if (error) {
        console.log(error.message);
      }
    };
    getUser();
  }, []);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const { data: products, error } = await supabase.from("products").select("*");

      if (error) {
        console.error("Error fetching products:", error.message);
        setLoading(false);
        return;
      }

      setData(products);
      setLoading(false);
    };

    getProducts();

    return () => {
      componentMounted = false;
    };
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-12 py-5 text-center">
          <Skeleton height={40} width={560} />
        </div>
        {[1, 2, 3, 4, 5].map((item) => (
          <div key={item} className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
            <Skeleton height={592} />
          </div>
        ))}
      </>
    );
  };

  const filteredProducts = data.filter((product) => {
    const categoryMatch = categoryFilter === "all" || product.category_id.toString() === categoryFilter;
    const animalTypeMatch = animalTypeFilter === "all" || product.sing.toString() === animalTypeFilter;
    return categoryMatch && animalTypeMatch;
  });

  const categories = ['Еда', 'Игрушка', 'Лежанки', 'Миски', 'Одежда'];

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons text-center">
          <button className={`btn btn-outline-dark btn-sm m-2 ${animalTypeFilter === "all" ? "active" : ""}`} onClick={() => setAnimalTypeFilter("all")}>
            Все
          </button>
          <button className={`btn btn-outline-dark btn-sm m-2 ${animalTypeFilter === "1" ? "active" : ""}`} onClick={() => setAnimalTypeFilter("1")}>
            Кошки
          </button>
          <button className={`btn btn-outline-dark btn-sm m-2 ${animalTypeFilter === "2" ? "active" : ""}`} onClick={() => setAnimalTypeFilter("2")}>
            Собаки
          </button>
        </div>
        <div className="buttons text-center">
          <button className={`btn btn-outline-dark btn-sm m-2 ${categoryFilter === "all" ? "active" : ""}`} onClick={() => setCategoryFilter("all")}>
            Все категории
          </button>
          {categories.map((category, index) => (
            <button
              key={index}
              className={`btn btn-outline-dark btn-sm m-2 ${categoryFilter === (index + 1).toString() ? "active" : ""}`}
              onClick={() => setCategoryFilter((index + 1).toString())}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="col-12 pb-5">
            <hr />
          </div>
        {filteredProducts.map((product) => (
          <div key={product.id} className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
            <div className="card text-center h-100" key={product.id}>
              <img className="card-img-top p-3" src={product.image_url} alt="Card" height={300} />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item lead">{product.price} тг.</li>
              </ul>
              <div className="card-body">
                {user ? (
                  <>
                    <Link to={"/product/" + product.id} className="btn btn-dark m-1">
                      Заказать сейчас
                    </Link>
                    <button className="btn btn-dark m-1" onClick={() => addProduct(product)}>
                     Добавить в корзину
                    </button>
                  </>
                ) : (
                  <Link to={"/login"} className="btn btn-dark m-1">
                    Войдите чтобы добавить товар в корзину
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </>
    );
  };

  return (
    <>
      <div className="container my-3 py-3">
        <div className="row justify-content-center">{loading ? <Loading /> : <ShowProducts />}</div>
      </div>
    </>
  );
};

export default Products;
