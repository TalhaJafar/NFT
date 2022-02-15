import "./index.css";
import { BsTwitter } from "react-icons/bs";

const images = [
  {
    url: require("../../../assests/cartoon_02.png"),
  },
  {
    url: require("../../../assests/cartoon_01.png"),
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
    <section className="follow_section">
      <div className="row-nav">
        <div className="logo-otr">
          <img src={require("../../../assests/bread_head.png")} />
        </div>
        <div className="action-otr">
          <button className="follow_twitter">
            <span>
              <BsTwitter />
            </span>
            Twitter
          </button>
          <button className="follow_mint"> Mint Now</button>
        </div>
      </div>
      <div className="row hero-row">
        <div className="col-lg-6 hero-content-otr">
          <div className="hero-heading">COLLECT BREAD HEADS <br/> ON NFT</div>

          <div className="hero-desc">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </div>

          <button className="follow_twitter_blue">
            <span>
              <BsTwitter />
            </span>
            Twitter
          </button>
        </div>
        <div className="col-lg-6 col-img-otr">
          <div className="col-img-inr">
            {images.map((item) => {
              return <img className="hero-img" src={item.url}/>;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
