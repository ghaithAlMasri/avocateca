"use client"
import  Slider  from "react-slick";
import "@/node_modules/slick-carousel/slick/slick-theme.css";
import "@/node_modules/slick-carousel/slick/slick.css";
import {motion} from 'framer-motion'
import { useState, useEffect } from 'react';

const Certificates = () => {
const [width, setWidth] = useState(undefined);

function handleWindowSizeChange() {
    setWidth(window.innerWidth);
}

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

  const settings = {
    dots: width < 800 ? false : true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    customPaging: (i) => (
        <div
            style={{
                width: "7px",
                height: "7px",
                color: "#D0A144",
                background: "#D0A144",
                marginTop: "25px",
                borderRadius: "100%",
                transition: "all",
            }}

        />
      )
  };



  const bigBoxClasses = 'p-10 gap-5 w-full flex justify-center items-center mt-6 bg-white shadow-sm border border-slate-200 rounded-lg hover:border-slate-300 hover:shadow-md transition-all cursor-pointer'

  const mainTestClasses = 'font-["Playfair Display"] sm:text-xl text-sm italic text-wrap'

  const authorClasses = 'sm:text-sm text-xs'

  return (
    <motion.div 
    className="flex justify-center items-center flex-col relative pb-20 p-8 h-fit md:h-96 bg-light-background-color md:gap-8 gap-0 border"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 1 }}
    >
      
    <div className='w-full p-8 flex-col gap-10 z-10'>

            <Slider {...settings} className='flex justify-center items-center'>

              <div className={bigBoxClasses}>
                  <div className={mainTestClasses}>"D-na Avocat Manuela Florea a fost un sprijin esențial în cazurile noastre, demonstrând profesionalism, cunoaștere profundă a legii și comunicare clară. O recomand cu încredere pentru asistență în drept civil."</div>
                  <div className={authorClasses}>Simiz Dorel Boris, director general la Pandora Prod SRL</div>
              </div>

              <div className={bigBoxClasses}>
                  <div className={mainTestClasses}>"Vă mulțumesc pentru profesionalismul de care ați dat dovadă și pentru onorariul convenabil. Am fost foarte mulțumit de serviciile oferite."</div>
                  <div className={authorClasses}>Ludeascu Iulian Virgiliu Teodor</div>
              </div>

              <div className={bigBoxClasses}>
                  <div className={mainTestClasses}>"Am colaborat cu Cabinetul de Avocat Florea Manuela pentru înființarea firmei mele și am fost impresionat de profesionalismul și atenția la detalii. Serviciile oferite au fost impecabile, de la consultanță până la depunerea documentelor. Recomand cu căldură pentru oricine caută soluții juridice de calitate."</div>
                  <div className={authorClasses}>Toth Arthur Mircea</div>
              </div>

              <div className={bigBoxClasses}>
                  <div className={mainTestClasses}>"Experiența noastră cu d-na Avocat Manuela Florea a fost excelentă. Implicată și bine pregătită, ne-a oferit soluții avantajoase pentru fiecare problemă. O recomandăm cu căldură."</div>
                  <div className={authorClasses}>Irina Fînacă-Director Centrul de Copii I-Children's Therapy București</div>
              </div>

              <div className={bigBoxClasses}>
                  <div className={mainTestClasses}>"Am colaborat cu d-na Avocat Florea Manuela într-un caz complex de accident auto și am fost extrem de mulțumit. Profesionalismul, cunoștințele și dedicarea sa au fost impresionante, obținând despăgubiri maxime. Recomand cu încredere serviciile sale pentru oricine are nevoie de un avocat de încredere și profesionist."</div>
                  <div className={authorClasses}>Cristea Bogdan Constantin</div>
              </div>

              <div className={bigBoxClasses}>
                <div className={mainTestClasses}>
                    "Este o fire bătăioasă, știe să își susțină cauza și duce la îndeplinire angajamentele făcute. O recomand!"
                </div>
                <div className={authorClasses}>Ionascu Alin Claudiu</div>
            </div>

            <div className={bigBoxClasses}>
                <div className={mainTestClasses}>
                    "Manuela este una dintre cele mai profesioniste și responsabile persoane cu care am lucrat vreodată. O recomand cu toată încrederea!"
                </div>
                <div className={authorClasses}>Ciprian Gavriliu - freelancer & artist</div>
            </div>

            <div className={bigBoxClasses}>
                <div className={mainTestClasses}>
                    "O colaborare frumoasă de mai mulți ani în care cabinetul ne-a sprijinit în toate demersurile la Registrul Comerțului!"
                </div>
                <div className={authorClasses}>Radu Florentina, asociat unic și administrator la Duculica SRL</div>
            </div>

            <div className={bigBoxClasses}>
                <div className={mainTestClasses}>
                    "Am colaborat pentru mai multe formalități și proiecte. Serviciile oferite de doamna avocat au fost mereu prompte și de înaltă calitate."
                </div>
                <div className={authorClasses}>Petrea Ionut, asociat unic și administrator la NUCICA SRL</div>
            </div>

            <div className={bigBoxClasses}>
                <div className={mainTestClasses}>
                    "Doamna avocat m-a sprijinit într-un proces dificil și am reușit să câștigăm drepturile mele. Recomand cu încredere!"
                </div>
                <div className={authorClasses}>Cautis Alin Dragos</div>
            </div>

            <div className={bigBoxClasses}>
                <div className={mainTestClasses}>
                    "Un avocat de excepție pe drept civil. Datorită experienței sale am câștigat un proces care părea imposibil. Recomand cu toată încrederea!"
                </div>
                <div className={authorClasses}>Nacu Ionut Catalin</div>
            </div>

            <div className={bigBoxClasses}>
                <div className={mainTestClasses}>
                    "Apreciez abilitățile și răbdarea doamnei avocat Florea Manuela. Un avocat profesionist, dedicat clienților!"
                </div>
                <div className={authorClasses}>Tudorancea Ion</div>
            </div>

            <div className={bigBoxClasses}>
                <div className={mainTestClasses}>
                    "Florea Manuela este o avocată excelentă cu un deosebit spirit al dreptății. Recomand cu încredere!"
                </div>
                <div className={authorClasses}>Mocanu Petruta</div>
            </div>

            <div className={bigBoxClasses}>
                <div className={mainTestClasses}>
                    "Servicii excelente! Sunt foarte mulțumit!"
                </div>
                <div className={authorClasses}>Grosu Vasile</div>
            </div>

            <div className={bigBoxClasses}>
                <div className={mainTestClasses}>
                    "Doamna avocat este corectă și apără dreptatea. Am avut o colaborare foarte bună după un accident auto. Mulțumesc!"
                </div>
                <div className={authorClasses}>Asanache Daniela</div>
            </div>

            <div className={bigBoxClasses}>
                <div className={mainTestClasses}>
                    "Profesionalism, corectitudine și promptitudine greu de găsit. Mulțumesc pentru sprijin și recomand cu toată căldura!"
                </div>
                <div className={authorClasses}>Mihaela Cernea</div>
            </div>

            <div className={bigBoxClasses}>
                <div className={mainTestClasses}>
                    "Sunt un client vechi și foarte mulțumit. O recomand tuturor celor care au nevoie de un avocat de încredere!"
                </div>
                <div className={authorClasses}>Tecucianu Maricel</div>
            </div>

            <div className={bigBoxClasses}>
                <div className={mainTestClasses}>
                    "Un avocat profesionist, dedicat clienților. Mulțumesc pentru tot! Recomand cu drag!"
                </div>
                <div className={authorClasses}>Ciurea Mariana</div>
            </div>

            <div className={bigBoxClasses}>
                <div className={mainTestClasses}>
                    "Profesionalism, implicare și îndrumare corectă. Mulțumesc pentru ajutorul oferit!"
                </div>
                <div className={authorClasses}>Moisii Marius Vasile</div>
            </div>

            <div className={bigBoxClasses}>
                <div className={mainTestClasses}>
                    "Am avut nevoie urgent de un avocat pentru copii și am apelat la doamna Florea Manuela. Sunt foarte mulțumit de ajutorul primit!"
                </div>
                <div className={authorClasses}>Soare Constantin Adrian</div>
            </div>

            <div className={bigBoxClasses}>
                <div className={mainTestClasses}>
                    "Singurul avocat care a vrut să-mi preia cazul și l-a rezolvat cu succes. Mulțumesc din suflet!"
                </div>
                <div className={authorClasses}>Pantus Ionut</div>
            </div>

            <div className={bigBoxClasses}>
                <div className={mainTestClasses}>
                    "Sunt foarte mulțumit de serviciile oferite și de comunicarea constantă. Mulțumesc pentru ajutor!"
                </div>
                <div className={authorClasses}>Rogoz Ionut</div>
            </div>

            <div className={bigBoxClasses}>
                <div className={mainTestClasses}>
                    "Seriozitate, profesionalism și promptitudine. Recomand 100%!"
                </div>
                <div className={authorClasses}>Serban George Marian</div>
            </div>

            <div className={bigBoxClasses}>
                <div className={mainTestClasses}>
                    "O colaborare excelentă pentru o speță complexă de vânzare-cumpărare. Consultanță promptă și eficientă!"
                </div>
                <div className={authorClasses}>Podina Nicoleta</div>
            </div>

            <div className={bigBoxClasses}>
                <div className={mainTestClasses}>
                    "Doamna avocat Florea Manuela este o profesionistă de încredere. Am fost complet mulțumită de serviciile oferite și recomand cu toată căldura!"
                </div>
                <div className={authorClasses}>GINA FÜTTERER, GERMANY</div>
            </div>


            </Slider>

        <div 
        className='flex justify-center md:justify-around items-center w-full h-fit rounded-sm p-8 flex-col md:flex-row gap-8 bg-background-gradient-3 mt-10' 
        >
            <h3 className='text-white font-martel font-bold text-center text-xl w-full md:w-[45%] 3xl:text-2xl'>Experți profesioniști certificați la dispoziția dumneavoastră</h3>
            <a href='#contact' className='bg-primary-color border border-primary-color text-light-text-color font-martel font-normal text-sm leading-7 px-4 py-2 rounded-md transition-all hover:opacity-80 duration-300 hover:scale-95 ease-in-out 3xl:text-2xl'> Contactați-ne </a>
        </div>
    </div>

    
    <div className='absolute bottom-0 left-0 bg-dark-background-color w-full h-24 rounded-none'/>  
    </motion.div>
  )
}

export default Certificates
