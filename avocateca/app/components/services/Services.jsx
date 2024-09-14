"use client"
// import { motion } from 'framer-motion'
import Card from '@/app/components/general/Card.jsx'
import  Slider  from "react-slick";
import "@/node_modules/slick-carousel/slick/slick-theme.css";
import "@/node_modules/slick-carousel/slick/slick.css";

const Services = () => {

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          autoplay: true,
          autoplaySpeed: 2000,
        }
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          autoplay: true,
          autoplaySpeed: 2000,
        }
      },
    ]
  };

  return (
    <div className='overflow-hidden bg-light-background-color'>

        <div className='flex justify-center items-center w-full flex-col text-wrap align-middle text-center gap-3 p-10'>
          <h2 className='font-martel font-bold text-[30px] md:text-[40px] text-dark-background-color 2xl:text-[50px] 3xl:text-[60px]'>Pentru <span className='text-primary-color'>Specializarea</span> noastră</h2>
          <p className='font-serif md:text-sm text-second-text-color 2xl:text-2xl 3xl:text-3xl'>Serviciile noastre includ și nu se limitează la</p>
        </div>

        <div>
          <Slider {...settings} className='flex justify-center items-center gap-6'>

            <div className='p-10'>
              <Card text={"Legate de trafic"} iconPath={"/service4.jpg"} color="light-background-color" textColor={"text-color"} type={3}/>
            </div>

            <div className='p-10'>
              <Card text={"Fraudă sau induce în eroare"} iconPath={"/service1.jpg"} color="light-background-color" textColor={"text-color"} type={3}/>
            </div>

            <div className='p-10'>
              <Card text={"Vătămări corporale"} iconPath={"/injury.jpg"} color="light-background-color" textColor={"text-color"} type={3}/>
            </div>

            <div className='p-10'>
              <Card text={"Cauțiuni sau mandate"} iconPath={"/service2.jpg"} color="light-background-color" textColor={"text-color"} type={3}/>
            </div>

            <div className='p-10'>
              <Card text={"Federale privind drogurile"} iconPath={"/service3.jpg"} color="light-background-color" textColor={"text-color"} type={3}/>
            </div>

            <div className='p-10'>
              <Card text={"Furt"} iconPath={"/theft.jpg"} color="light-background-color" textColor={"text-color"} type={3}/>
            </div>

          </Slider>
      </div>

    </div>
  );
}

export default Services
