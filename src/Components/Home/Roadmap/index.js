import "./index.css";
const Index = () => {
  return (
    <section className="roadMap_section">
      <img className="wheat-img" src={require("../../../assests/Wheat.png")}/>
      <div className="roadmap-inr">
        <div className="rodmap-heading">ROADEMAP</div>
        <div className="row row-roadmap">
          <div className="col-lg-3 col-md-4 col-sm-6 col-roadmap-otr">
            <img src={require("../../../assests/phase1.png")} />
            <div className="roadmap-card-heading">Phase 01</div>
            <div className="roadmap-desc">Mint Distibution of Bread Heads</div>
            <img className="roadmap-arrow" src={require("../../../assests/roadmap-arrow.png")} />
          </div>

          <div className="col-lg-3 col-md-4 col-sm-6 col-roadmap-otr">
            <img src={require("../../../assests/phase2.png")} />
            <div className="roadmap-card-heading">Phase 02</div>
            <div className="roadmap-desc">
              50% Merch activated 5- minute short developed .Bread Heads world
              expands
            </div>
            <img className="roadmap-arrow" src={require("../../../assests/roadmap-arrow.png")} />
          </div>

          <div className="col-lg-3 col-md-4 col-sm-6 col-roadmap-otr">
            <img src={require("../../../assests/phase3.png")} />
            <div className="roadmap-card-heading">Phase 03</div>
            <div className="roadmap-desc">
              col-3% Season 2 begins. Multiple Retreats, Events, and Conferences
              with promonetn NFT/web3 leaders
            </div>
            <img className="roadmap-arrow" src={require("../../../assests/roadmap-arrow.png")} />
          </div>

          <div className="col-lg-3 col-md-4 col-sm-6 col-roadmap-otr">
            <img src={require("../../../assests/phase4.png")} />
            <div className="roadmap-card-heading">Phase 04</div>
            <div className="roadmap-desc">
              75% Ongoing webcomic.Exclusive hang-out events for owmers
              (IRL/Digital)
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
