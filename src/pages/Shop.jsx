import React, { useEffect } from "react";
import { useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { Col, Container, Row } from "reactstrap";
import products from "../assets/data/products";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import ProductList from "../components/UI/ProductList";
import "../styles/shop.scss";

const Shop = () => {
  const [productsData, setProductsData] = useState(products);

  const handleFilter = (e) => {
    const filterValue = e.target.value;
    if (filterValue === "sofa") {
      const filteredProducts = products.filter(
        (item) => item.category === "sofa"
      );
      setProductsData(filteredProducts);
    }
    if (filterValue === "mobile") {
      const filteredProducts = products.filter(
        (item) => item.category === "mobile"
      );
      setProductsData(filteredProducts);
    }
    if (filterValue === "chair") {
      const filteredProducts = products.filter(
        (item) => item.category === "chair"
      );
      setProductsData(filteredProducts);
    }
    if (filterValue === "watch") {
      const filteredProducts = products.filter(
        (item) => item.category === "watch"
      );
      setProductsData(filteredProducts);
    }
    if (filterValue === "wireless") {
      const filteredProducts = products.filter(
        (item) => item.category === "wireless"
      );
      setProductsData(filteredProducts);
    }
  };

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    const searchedProducts = products.filter((item) =>
      item.productName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setProductsData(searchedProducts);
  };

  return (
    <>
      <Helmet title="Shopping sehifesi">
        <CommonSection title={"Məhsullar"} />
        <section>
          <Container>
            <Row>
              <Col lg="3" md="6">
                <div className="filter__widget">
                  <select onChange={handleFilter}>
                    <option>Filter By Category</option>
                    <option value="mobile">Mobile</option>
                    <option value="chair">Chair</option>
                    <option value="watch">Watch</option>
                    <option value="wireless">Wireless</option>
                  </select>
                </div>
              </Col>
              <Col lg="6" md="12">
                <div className="search__box">
                  <input
                    type="text"
                    onChange={handleSearch}
                    placeholder="Search...."
                  />
                  <span>
                    <i className="ri-search-line"></i>
                  </span>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section>
          <Container>
            <Row>
              {productsData.length !== 0 ? (
                <ProductList data={productsData} />
              ) : (
                <SkeletonTheme baseColor="#202020" highlightColor="#444">
                  <h1>
                    <Skeleton count={3} />
                  </h1>
                </SkeletonTheme>
              )}
            </Row>
          </Container>
        </section>
      </Helmet>
    </>
  );
};

export default Shop;
