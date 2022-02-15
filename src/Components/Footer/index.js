import "./index.css";
import { BsTwitter } from "react-icons/bs";

const Index = () => {
  const links = [
    {
      label: "About Us ",
      sectionId: "about",
    },
    {
      label: "Team ",
      sectionId: "team",
    },
    {
      label: "FAQ",
      sectionId: "faq",
    },
    {
      label: "Contact",
      sectionId: "contact",
    },
  ];

  const scroll = (id) => {
    const titleElement = document.getElementById(id);
    titleElement.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section className="footer_bg">
      <footer>
        <div className="cursor_pointer" onClick={() => scroll("main_header")}>
          <img src={require("../../assests/bread_head.png")} />
        </div>

        <ul className="footer-ul">
          {links.map((item, index) => {
            return (
              <li
                className="footer-li"
                onClick={() => scroll(item.sectionId)}
                selected={item.sectionId.selected}
              >
                <a className="footer-linkk" key={index}>
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="twitter_icon">
          {/* <span className="d-flex align-items-center"> */}
          <BsTwitter color="#fff" size={"25px"} />
          {/* </span> */}
          {/* <img src={require("../../assests/bread_head.png")} /> */}
        </div>
      </footer>
    </section>
  );
};

export default Index;
