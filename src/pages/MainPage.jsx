import React from "react";
import "../components/style.css";

const MainPage = ({ data }) => {
  return (
    <div className="main__container">
      <div className="err">
        <div className="first__block">
          <main>
            <div className="over__section1">
              <section className="main__section1">
                <div className="inner">
                  <h1>We Are Hexashop</h1>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing
                    <br /> and typesetting industry.
                  </p>
                  <button className="button1">Purchase Now</button>
                </div>
              </section>
            </div>

            <div className="div__map">
              {data.map((item, i) => (
              
                  <section
                    style={{
                      background: `url(${item.image})`,
                      width: "295px",
                      height: "271.5px",
                    }}
                    key={i}
                  >
                    <h2
                      style={{
                        fontfamily: "Inter",
                        fontstyle: "normal",
                        fontweight: "700",
                        fontsize: "25px",
                        lineheight: "30px",
                        color: "#FFFFFF",
                        textAlign: "center",
                      }}
                    >
                      {item.title}
                    </h2>
                    <p
                      style={{
                        fontfamily: "Inter sans-serif",
                        fontstyle: "normal",
                        fontweight: "400",
                        fontsize: "18px",
                        lineheight: "22px",
                        color: "#FFFFFF",
                        textAlign: "center",
                      }}
                    >
                      {item.description}
                    </p>
                    <button className="button2">Discover More</button>
                  </section>
       
              ))}
              <div />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
