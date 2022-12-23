import React, { useEffect, useState } from "react";
import NewsCard from "./News-Card";
import ErrorPage from "../ErrorFound/ErrorPage";
import Loader from "../Loader";
import Carousal from "../carousal/Carosal";

export default function News({ country, category, title }) {
  const [newsData, setNewsData] = useState([]);
  const [totalArticles, setTotalArticles] = useState(0);
  const [page, setPage] = useState(1);
  const [load, setLoad] = useState(false);
  const [dataFetched, setDataFetched] = useState(true);

  document.title = `${title}-NEWSWORLD!`;

  useEffect(() => {
    (async () => {
      setLoad(true);
      window.scrollTo(0, 0);
      let data = await fetch(
        `https://newsapi.org/v2/top-headlines?&country=${country}&category=${category}&apiKey=5c77f1bfb01248ec8519e9d6c096a3ba&page=${page}&pageSize=12`
      );
      let res = await data.json();
      if (res.status !== "ok") setDataFetched(false);
      else if (res.status === "ok") setDataFetched(true);
      setLoad(false);
      setTotalArticles(res.totalResults);
      // console.log(res.totalResults);
      setNewsData(res.articles);
    })();
  }, [page, country]);

  return (
    <>
      {!dataFetched ? (
        <div className="container my-3"><ErrorPage className="text-center" style={{ marginTop: "90px" }} /></div>
      ) : (
        <div className="container my-2" style={{ border: "1px solid white" }}>
          <h1 style={{ marginTop: "90px", color: "white", width: "auto" }}>
            NEWS WORLD! - {title}
          </h1>
          {load && <Loader />}

          <Carousal setNewsData={newsData} />

          <div className="row">
            {newsData.map((news) => (


              <div key={news.url} className="col md-4  d-flex justify-content-center">
                <NewsCard
                  title={news.title ? news.title.slice(0, 40) : ""}
                  description={
                    news.description ? news.description.slice(0, 70) : ""
                  }
                  imageUrl={
                    !news.urlToImage
                      ? "https://tse2.mm.bing.net/th?id=OIP.Zv6FHN0b822DALpTkwp_KQHaEG&pid=Api&P=0"
                      : news.urlToImage
                  }
                  newsUrl={news.url}
                  author={news.author}
                  date={news.publishedAt}
                />
              </div>

            ))}
          </div>
          <div className="container d-flex justify-content-between">
            <button
              disabled={page <= 1 ? true : false}
              type="button"
              onClick={() => setPage(page - 1)}
              className="btn btn-warning my-3"
              id="btn-prev"
            >
              &larr; Previous
            </button>
            <button
              disabled={page >= Math.ceil(totalArticles / 9) ? true : false}
              type="button"
              onClick={() => setPage(page + 1)}
              className="btn btn-warning my-3"
              id="btn-next"
            >
              Next &rarr;
            </button>
          </div>
        </div>
      )}
    </>
  );
}
