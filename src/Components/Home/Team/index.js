import "./index.css";

const data = [
  {
    image_url: require("../../../assests/Image_placeholder.png"),
    handler: "@evankadat",
    designation: "marketing manager",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
  },
  {
    image_url: require("../../../assests/Image_placeholder.png"),
    handler: "@evankadat",
    designation: "marketing manager",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
  },
  {
    image_url: require("../../../assests/Image_placeholder.png"),
    handler: "@evankadat",
    designation: "marketing manager",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
  },
  {
    image_url: require("../../../assests/Image_placeholder.png"),
    handler: "@evankadat",
    designation: "marketing manager",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
  },
  {
    image_url: require("../../../assests/Image_placeholder.png"),
    handler: "@evankadat",
    designation: "marketing manager",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
  },
  {
    image_url: require("../../../assests/Image_placeholder.png"),
    handler: "@evankadat",
    designation: "marketing manager",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
  },
  {
    image_url: require("../../../assests/Image_placeholder.png"),
    handler: "@evankadat",
    designation: "marketing manager",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
  },
  {
    image_url: require("../../../assests/Image_placeholder.png"),
    handler: "@evankadat",
    designation: "marketing manager",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
  },
];

const Index = () => {
  return (
    <section id="team" className="team_section">
      <img className="wheat-img" src={require("../../../assests/Wheat.png")} />
      <div className="team-inr">
        <div className="team-heading">Our Team </div>

        <div className="row row-team">
          {data.map((item, index) => {
            return (
              <div
                key={index}
                className="col-lg-3 col-md-4 col-sm-6 mb-5 col-team-otr"
              >
                <img src={item.image_url} />
                <div className="team-twiter-linkk">{item.handler}</div>
                <div className="team-dsignation">{item.designation}</div>
                <div className="team-desc">{item.description}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Index;
