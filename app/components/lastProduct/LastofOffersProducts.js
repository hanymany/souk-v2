"use client"
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Container, Row } from "react-bootstrap";
import styles from "@/app/page.module.css";
import { getSearchResult } from "@/store/ShopSlice";
import Link from "next/link";
import { Subcategories, catDetails, getBranchesProducts, getMostViewed } from "@/store/CategoriesSlice";
import { getOffers } from "@/store/OfferSlice";
import Image from "next/image";
import testImage from '/public/images/HomeHeader.png'
import Slider from "react-slick";
const LastofOffersProducts = () => {
  const dispatch = useDispatch();
  const { lastOfferArr } = useSelector((state) => state.OfferSlice);
  const { LastProductArr } = useSelector(
    (state) => state.ShopSlice
  );


  const [isLoading, setIsLoading] = useState(false);

  const { MostViewedArr } = useSelector((state) => state.CategoriesSlice);
  useEffect(() => {
    setIsLoading(true);
    dispatch(getMostViewed()).then(() => {
      setIsLoading(false);
    });
  }, [dispatch])

  const OfferSlick =
    MostViewedArr &&
    MostViewedArr.offers.slice(11, 15).map((ele, idx) => {
      const pathName = ele.name.replace(/\s/g, " ").substring(0, 20) + '...';
      const imageID = ele.images[0];
      return (
        <Link key={ele.id} href={`/product/${ele.id}/${ele.name.replace(/\s/g, "-")}`}   >
          <div className="  card_lasted">
            <Image src={`https://souq.deltawy.com/imag?id=${imageID}`} alt={pathName} width={250} height={250} />
            <div className="div" >
              <h1 >{pathName}</h1>
              <p>{ele.catName}</p>
              <Link key={ele.id} href={`/matgar/${ele.matgarId}/${ele.matgarName.replace(/\s/g, "-")}`} className="card_lasted_img_logo">
                <Image src={`https://souq.deltawy.com/imag?id=${ele.matgarLogo}`} alt={pathName} width={40} height={40} />
              </Link>
            </div>
          </div>
        </Link>
      );
    });



  const ShopData =
    MostViewedArr &&
    MostViewedArr.offers.slice(5, 9).map((ele, idx) => {
      const pathName = ele.name.replace(/\s/g, " ").substring(0, 20) + '...';
      const imageID = ele.images[0];
      return (
        <Link key={ele.id} href={`/product/${ele.id}/${ele.name.replace(/\s/g, "-")}`}   >
          <div className="  card_lasted">
            <Image src={`https://souq.deltawy.com/imag?id=${imageID}`} alt={pathName} width={250} height={250} />
            <div className="div" >
              <h1 >{pathName}</h1>
              <p>{ele.catName}</p>
              <Link key={ele.id} href={`/matgar/${ele.matgarId}/${ele.matgarName.replace(/\s/g, "-")}`} className="card_lasted_img_logo">
                <Image src={`https://souq.deltawy.com/imag?id=${ele.matgarLogo}`} alt={pathName} width={40} height={40} />
              </Link>
            </div>
          </div>
        </Link>
      );
    });



  const Mostview =
    MostViewedArr &&
    MostViewedArr.offers.slice(0, 4).map((ele, idx) => {
      const pathName = ele.name.replace(/\s/g, " ").substring(0, 20) + '...';
      const imageID = ele.images[0];
      return (
        <Link key={ele.id} href={`/product/${ele.id}/${ele.name.replace(/\s/g, "-")}`}   >
          <div className="  card_lasted">
            <Image src={`https://souq.deltawy.com/imag?id=${imageID}`} alt={pathName} width={250} height={250} />
            <div className="div" >
              <h1 >{pathName}</h1>
              <p>{ele.catName}</p>
              <Link key={ele.id} href={`/matgar/${ele.matgarId}/${ele.matgarName.replace(/\s/g, "-")}`} className="card_lasted_img_logo">
                <Image src={`https://souq.deltawy.com/imag?id=${ele.matgarLogo}`} alt={pathName} width={40} height={40} />
              </Link>
            </div>
          </div>
        </Link>
      );
    });

  const settings = {
    dots: false,
    infinite: true,

    slidesToScroll: 1,
    centerPadding: "60px",
    speed: 200,
    // autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    swipeToSlide: true,
    initialSlide: 0,
    rtl: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={styles.LastofOffersProducts}>
      <Container>

        <div className="content_d">
          <Row>
            <Col xs={4} md={4}>
              <h2 className={styles.LastHeading} id="lab_last">اخر المنتجات</h2>

            </Col>
            <Col xs={4} md={4}>
              <h2 className={styles.LastHeading} id="lab_last"> الاكثر مشاهدة</h2>

            </Col>
            <Col xs={4} md={4}>
              <h2 className={styles.LastHeading} id="lab_last"> المضاف حديثا</h2>
            </Col>
          </Row>
        </div>
        <Row>

          <Col xs={12} md={4}>
            <div id="lab_last">
             {ShopData}
            </div>
            <div className="phone_cars">
              <h2 className="phone_carsh2">اخر المنتجات</h2>
             
                <Slider {...settings}>{ShopData}</Slider>
            </div>
          </Col>
          <Col xs={12} md={4}>
            <div id="lab_last">
                {OfferSlick}
            </div>
            <div className="phone_cars">
              <h2 className="phone_carsh2"> الاكثر مشاهدة</h2>
                <Slider {...settings}>{OfferSlick}</Slider>
            </div>
          </Col>
          <Col xs={12} md={4}>
            <div id="lab_last">
                {Mostview}
            </div>
            <div className="phone_cars">
              <h2 className="phone_carsh2"> المضاف حديثا</h2>
                <Slider {...settings}>{Mostview}</Slider>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LastofOffersProducts;
