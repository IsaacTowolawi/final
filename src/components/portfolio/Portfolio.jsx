import React, { useState } from "react";
import "./portfolio.css";
import CloseIcon from "@mui/icons-material/Close";
import Img1 from "../../assets/img/img1.png";
import Img2 from "../../assets/img/img2.png";
import Img3 from "../../assets/img/img3.png";
import Img4 from "../../assets/img/img4.jpg";
import Img5 from "../../assets/img/img5.jpg";
import Img6 from "../../assets/img/img6.png";
import Img7 from "../../assets/img/img7.png";
import Img8 from "../../assets/img/img8.png";
import Img9 from "../../assets/img/img9.jpg";
import Img10 from "../../assets/img/img10.jpg";
import Img11 from "../../assets/img/img11.jpg";
import Img12 from "../../assets/img/img12.jpg";
import Img13 from "../../assets/img/img13.jpg";
import Img14 from "../../assets/img/img14.jpg";
import Img15 from "../../assets/img/img15.jpg";
import Img16 from "../../assets/img/img16.jpg";
import Img17 from "../../assets/img/img17.jpg";

const Portfolio = () => {
  let data = [
    {
      id: 1,
      imgSrc: Img1,
    },
    {
      id: 2,
      imgSrc: Img2,
    },
    {
      id: 3,
      imgSrc: Img3,
    },
    {
      id: 4,
      imgSrc: Img4,
    },
    {
      id: 5,
      imgSrc: Img5,
    },
    {
      id: 6,
      imgSrc: Img6,
    },
    {
      id: 7,
      imgSrc: Img7,
    },
    {
      id: 8,
      imgSrc: Img8,
    },
    {
      id: 9,
      imgSrc: Img9,
    },
    {
      id: 10,
      imgSrc: Img10,
    },
    {
      id: 11,
      imgSrc: Img11,
    },
    {
      id: 12,
      imgSrc: Img12,
    },
    {
      id: 13,
      imgSrc: Img13,
    },
    {
      id: 14,
      imgSrc: Img14,
    },
    {
      id: 15,
      imgSrc: Img15,
    },
    {
      id: 16,
      imgSrc: Img16,
    },
    {
      id: 17,
      imgSrc: Img17,
    },
  ];

  const [model, setModel] = useState(false);
  const [tempimgSrc, setimgSrc] = useState("");
  const getImg = (imgSrc) => {
    setimgSrc(imgSrc);
    setModel(true);
  };
  return (
    <>
      <h1 className="portHeader"></h1>
      <div className={model ? "model open" : "model"}>
        <img src={tempimgSrc} alt="" />
        <CloseIcon onClick={() => setModel(false)} />
      </div>

      <div className="portfolio">
        {data.map((item, index) => {
          return (
            <div
              className="pics"
              key={index}
              onClick={() => getImg(item.imgSrc)}
            >
              <img
                className="pic"
                src={item.imgSrc}
                alt=""
                style={{ width: "100" }}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Portfolio;
