import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { Link } from "react-router-dom";
import { supabase } from "../lib/supabase";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  let componentMounted = true;

  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product))
  }

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
      const { data: products, error } = await supabase.from('products').select('*');

      if (error) {
        console.error('Error fetching products:', error.message);
        setLoading(false);
        return;
      }

      setData(products);
      setFilter(products);
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
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
      </>
    );
  };

  const filterProduct = (categoryId) => {
    const updatedList = data.filter((item) => item.category_id === parseInt(categoryId));
    setFilter(updatedList);
  };
  
  const ShowProducts = () => {
    return (
      <>
        <div className="buttons text-center py-5">
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => setFilter(data)}>All</button>
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("1")}>
            Еда
          </button>
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("2")}>
            Игрушка
          </button>
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("3")}>
          Лежанки
          </button>
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("4")}>
          Миски
          </button>
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("5")}>
          Одежда
          </button>
        </div>

        {filter.map((product) => {
          return (
            <div id={product.id} key={product.id} className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
              <div className="card text-center h-100" key={product.id}>
                <img
                  className="card-img-top p-3"
                  src={product.image_url} 
                  alt="Card"
                  height={300}
                />
                <div className="card-body">
                  <h5 className="card-title">
                    {product.name}
                  </h5>
                  <p className="card-text">
                    {product.description}
                  </p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item lead">{product.price} тг.</li>
                </ul>
                <div className="card-body">
                  {user ? (
                    <>
                      <Link to={"/product/" + product.id} className="btn btn-dark m-1">
                        Buy Now
                      </Link>
                      <button className="btn btn-dark m-1" onClick={() => addProduct(product)}>
                        Add to Cart
                      </button>
                    </>
                  ) : (
                    <>
                      <Link to={"/login"} className="btn btn-dark m-1">
                        Войдите чтобы добавить товар в корзину
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  };
  return (
    <>
      <div className="container my-3 py-3">
        <div className="row">
          <div className="col-12">
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </>
  );
};

export default Products;
