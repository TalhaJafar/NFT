import "./index.css";
import { BsTwitter } from "react-icons/bs";

const images = [
  {
    url: require("../../../assests/cartoon_01.png"),
  },
  {
    url: require("../../../assests/cartoon_02.png"),
  },
  {
    url: require("../../../assests/cartoon_01.png"),
  },
  {
    url: require("../../../assests/cartoon_03.png"),
  },
];
const Index = () => {
  return (
    <section id="contact" className="joinGang_section">
      <img className="wheat-img" src={require("../../../assests/Wheat.png")} />
      <div className="joingang-heading">Let's Join the Gang</div>

      <div className="joingang-btn-otr">
        <button className="twitter-btn">
          <span>
            <BsTwitter />
          </span>
          Twitter
        </button>
      </div>

      <div className="row row-joingang">
        {images.map((item, index) => {
          return (
            <div
              key={index}
              className="col-lg-3 col-md-4 col-sm-6 joingang-col"
            >
              <img className="joingang-img" key={index} src={item.url} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Index;
