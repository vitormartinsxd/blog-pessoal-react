// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// importando seu CSS
import "./Carrossel.css";

// import required modules
import { Pagination, Navigation } from "swiper";

function Carrossel() {

    var items = [
        { img: "https://cdn.pixabay.com/photo/2020/11/27/22/07/naruto-5783102_960_720.png" },
        { img: "https://cdn.pixabay.com/photo/2020/11/27/22/07/naruto-5783103_960_720.png" },
        { img: "https://cdn.pixabay.com/photo/2020/08/10/23/35/character-5478933_960_720.png" }
    ]

    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >

                {
                    items.map((item) => (
                        <SwiperSlide>
                            <img src={item.img} alt="Imagem" />
                        </SwiperSlide>
                    ))
                }

                {/* 
                    Funções Nominais: function (){}
                    Arrow Function: () => {}
                
                */}

            </Swiper>
        </>
    )
}

export default Carrossel