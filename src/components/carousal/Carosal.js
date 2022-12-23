import Slider from "react-slick";
import "./Carousal.css"
export default function Carosal({ setNewsData }) {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        cssEase: "linear"
    }
    return (
        <>
            <div className="w-90 p-4">
                <Slider {...settings} >

                    {setNewsData.map((news) => (
                        <a key={news.url} href={news.url} target="_blank" rel="noreferrer">
                            <div  className="slider-content">

                                <div className="img">
                                    <img className="crousal-img"
                                        src={!news.urlToImage
                                            ? "https://tse2.mm.bing.net/th?id=OIP.Zv6FHN0b822DALpTkwp_KQHaEG&pid=Api&P=0"
                                            : news.urlToImage
                                        } alt="News World!" />
                                </div>

                                <div className="news-data">
                                    <div className="title">
                                        <p>{news.title ? news.title.slice(0, 70) : ""}</p>
                                    </div>
                                    <div className="desc">
                                        <p>{news.description ? news.description.slice(0, 100) : ""}...</p>
                                    </div>


                                </div>

                            </div>
                        </a>
                    ))}

                </Slider>
            </div>
        </>
    )
}
