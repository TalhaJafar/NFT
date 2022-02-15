import "./index.css";
const Index = () => {
  return (
    <section id="about" className="about_section">
      <img className="wheat-img" src={require("../../../assests/Wheat.png")} />
      <div className="row row-about">
        <div className="col-lg-5">
          <div className="about_card">
            <img
              className="about-img"
              src={require("../../../assests/cartoon_01.png")}
            />
            <div className="card-content">
              <div className="about-card-heading">Mage Head Boss </div>
              <div className="mint-otr">
                <span className="mint-text">#45</span>
                <button className="mint-btn">Mint Now</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="about-tag">About</div>
          <div className="about-heading">WHAT IS BREAD HEADS</div>
          <div className="about-desc">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled
          </div>
          <div className="bread-btn">
            <button className="buy_bread_heads">Buy Bread Heads</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
