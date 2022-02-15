import "./index.css";

const Index = () => {
  return (
    <section id="faq" className="faqs_section">
      <img className="wheat-img" src={require("../../../assests/Wheat.png")} />
      <div className="row row-custom">
        <div className="col-lg-5">
          <h2 className="faq-heading">Frequently Asked Questions</h2>
        </div>

        <div className="col-lg-7">
          <div id="accordion">
            <div class="card">
              <div class="card-header">
                <a class="card-link" data-toggle="collapse" href="#collapseOne">
                  WHAT IS BREAD HEADS?
                </a>
              </div>
              <div
                id="collapseOne"
                class="collapse show"
                data-parent="#accordion"
              >
                <div class="card-body">Lorem ipsum..</div>
              </div>
            </div>

            <div class="card">
              <div class="card-header">
                <a
                  class="collapsed card-link"
                  data-toggle="collapse"
                  href="#collapseTwo"
                >
                  WHAT IS BREAD HEADS?
                </a>
              </div>
              <div id="collapseTwo" class="collapse" data-parent="#accordion">
                <div class="card-body">Lorem ipsum..</div>
              </div>
            </div>

            <div class="card">
              <div class="card-header">
                <a
                  class="collapsed card-link"
                  data-toggle="collapse"
                  href="#collapseThree"
                >
                  WHAT IS BREAD HEADS?
                </a>
              </div>
              <div id="collapseThree" class="collapse" data-parent="#accordion">
                <div class="card-body">Lorem ipsum..</div>
              </div>
            </div>
            <div class="card">
              <div class="card-header">
                <a
                  class="collapsed card-link"
                  data-toggle="collapse"
                  href="#collapseFour"
                >
                  WHAT IS BREAD HEADS?
                </a>
              </div>
              <div id="collapseFour" class="collapse" data-parent="#accordion">
                <div class="card-body">Lorem ipsum..</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
