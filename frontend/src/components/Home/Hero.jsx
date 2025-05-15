import React from "react";
import gagan from "../../assets/gagan.png";

const Hero = () => {
  return (
    <main className="block opacity-100" style={{ boxSizing: "border-box" }}>
      <div
        className="relative flex justify-center overflow-visible pb-24 pt-0"
        style={{ boxSizing: "border-box" }}
      >
        <div
          className="mx-auto flex max-w-none justify-center transition-all duration-200"
          style={{ boxSizing: "border-box", width: "94vw" }}
        >
          <div
            className="absolute inset-y-0 left-0 overflow-hidden transition-all duration-200"
            style={{
              transform: "matrix(1, 0, 0, 1, 0, 1.58803)",
              transformStyle: "preserve-3d",
              willChange: "transform",
              boxSizing: "border-box",
            }}
          >
            <div
              className="relative overflow-hidden rounded-2xl"
              style={{
                maskImage: "-webkit-radial-gradient(center, rgb(255, 255, 255), rgb(0, 0, 0)",
                boxSizing: "border-box",
                zIndex: 0,
              }}
            >
              <div
                className="pointer-events-none absolute inset-x-0 bottom-[-2px] z-[1] h-[480px] bg-gradient-to-t from-[#131313] to-transparent"
                style={{ boxSizing: "border-box" }}
              ></div>
              <div
                className="relative overflow-hidden rounded-2xl"
                style={{
                  width: "48vw",
                  minWidth: "288px",
                  maxWidth: "768px",
                  height: "698.4px",
                  minHeight: "480px",
                  color: "rgb(255, 255, 255)",
                  boxSizing: "border-box",
                }}
              >
                {/* Replaced video with image */}
                <img
                  src={gagan}
                  alt="Hero background"
                  style={{
                    objectFit: "cover",
                    zIndex: -100,
                    backgroundPosition: "50% 50%",
                    backgroundSize: "cover",
                    width: "100%",
                    height: "698.4px",
                    margin: "auto",
                    position: "absolute",
                    inset: "0", // Changed from "-698.4px -737.275px" to "0" to fill container
                    boxSizing: "border-box",
                    verticalAlign: "baseline",
                    display: "block",
                  }}
                />
              </div>
            </div>
          </div>

          <div
            className="relative z-[2] flex h-[768px] min-h-[768px] max-h-[1200px] w-full items-center justify-center pointer-events-none"
            style={{ boxSizing: "border-box" }}
          >
            <div
              className="pointer-events-auto relative text-left"
              style={{ boxSizing: "border-box" }}
            >
              <h1
                className="m-0 text-[184.32px] leading-[165.888px] font-normal"
                style={{ boxSizing: "border-box" }}
              >
                we create
                <br style={{ boxSizing: "border-box" }} />
                <span
                  className="font-ivypresto italic font-light"
                  style={{ boxSizing: "border-box" }}
                >
                  thumb-stopping
                  <br style={{ boxSizing: "border-box" }} />
                </span>
                visuals
              </h1>
            </div>

            <div
              className="pointer-events-auto absolute inset-x-0 bottom-0 flex w-full items-center justify-between border-t border-[#363636] px-3 py-3"
              style={{ boxSizing: "border-box" }}
            >
              <a
                href="/case/brouwerij-t-ij-gouden-ij-campagne"
                className="block max-w-full overflow-hidden"
                style={{
                  color: "rgb(247, 246, 240)",
                  textDecoration: "none",
                  transitionProperty: "none",
                  backgroundColor: "rgba(0, 0, 0, 0)",
                  cursor: "none",
                  boxSizing: "border-box",
                }}
              >
                <div
                  className="font-ivypresto italic text-[#838383] text-[16.8px] font-light"
                  style={{ boxSizing: "border-box" }}
                >
                  our latest project
                </div>
                <div style={{ color: "rgb(203, 203, 203)", boxSizing: "border-box" }}>
                  brouwerij t' ij
                </div>
              </a>

              <div
                className="relative flex w-60 items-center justify-center overflow-hidden"
                style={{ boxSizing: "border-box" }}
              >
                <div
                  className="flex items-center justify-center gap-6"
                  style={{
                    transform: "matrix(1, 0, 0, 1, 36.5169, 0)",
                    transformStyle: "preserve-3d",
                    willChange: "transform",
                    boxSizing: "border-box",
                  }}
                >
                  <div
                    className="w-px bg-[#363636]"
                    style={{ height: "3px", boxSizing: "border-box" }}
                  ></div>
                  <div
                    className="w-px bg-[#363636]"
                    style={{ height: "6px", boxSizing: "border-box" }}
                  ></div>
                  <div
                    className="w-px bg-[#363636]"
                    style={{ height: "9.6px", boxSizing: "border-box" }}
                  ></div>
                  <div
                    className="w-px bg-[#363636]"
                    style={{ height: "12px", boxSizing: "border-box" }}
                  ></div>
                  <div
                    className="w-px bg-[#363636]"
                    style={{ height: "15px", boxSizing: "border-box" }}
                  ></div>
                  <div
                    className="w-px bg-[#363636]"
                    style={{ height: "12px", boxSizing: "border-box" }}
                  ></div>
                  <div
                    className="w-px bg-[#363636]"
                    style={{ height: "9.6px", boxSizing: "border-box" }}
                  ></div>
                  <div
                    className="w-px bg-[#363636]"
                    style={{ height: "6px", boxSizing: "border-box" }}
                  ></div>
                  <div
                    className="w-px bg-[#363636]"
                    style={{ height: "3px", boxSizing: "border-box" }}
                  ></div>
                </div>
              </div>

              <a
                href="/about"
                className="flex max-w-full gap-3 overflow-hidden"
                style={{
                  color: "rgb(247, 246, 240)",
                  textDecoration: "none",
                  transitionProperty: "none",
                  backgroundColor: "rgba(0, 0, 0, 0)",
                  cursor: "none",
                  boxSizing: "border-box",
                }}
              >
                <div
                  className="text-[16.8px] text-[#838383]"
                  style={{ boxSizing: "border-box" }}
                >
                  creative production
                  <br style={{ boxSizing: "border-box" }} />
                  studio based in{" "}
                  <span
                    className="font-ivypresto italic font-light"
                    style={{ boxSizing: "border-box" }}
                  >
                    amsterdam
                  </span>
                </div>
              </a>
            </div>

            <div
              className="absolute right-4 top-4 flex items-center gap-3"
              style={{ boxSizing: "border-box" }}
            >
              <a
                href="#"
                className="block h-3 w-4 rounded-full bg-[#00ff0b] opacity-[0.10348]"
                style={{
                  willChange: "opacity",
                  color: "rgb(247, 246, 240)",
                  textDecoration: "none",
                  transitionProperty: "none",
                  maxWidth: "100%",
                  cursor: "none",
                  boxSizing: "border-box",
                }}
              ></a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;