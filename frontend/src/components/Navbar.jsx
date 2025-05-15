import React from "react";

const Navbar = () => {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-[999]"
      style={{ boxSizing: "border-box" }}
    >
      <div
        className="pointer-events-auto relative z-[1] mx-auto flex h-[60px] w-full items-center justify-between px-6"
        style={{ boxSizing: "border-box" }}
      >
        <a
          href="/"
          aria-current="page"
          className="relative z-[99] block max-w-full overflow-hidden"
          style={{
            height: "25.2px",
            color: "rgb(247, 246, 240)",
            textDecoration: "none",
            transitionProperty: "none",
            backgroundColor: "rgba(0, 0, 0, 0)",
            cursor: "none",
            boxSizing: "border-box",
          }}
        >
          <img
            src="https://cdn.prod.website-files.com/6376abd96f4edb85290432dd/6376abd96f4edbdec0043319_logo-noow.svg"
            loading="lazy"
            alt=""
            style={{
              width: "auto",
              height: "19.2px",
              marginTop: "-2px",
              maxWidth: "100%",
              display: "inline-block",
              verticalAlign: "middle",
              boxSizing: "border-box",
              border: "0px none rgb(247, 246, 240)",
            }}
          />
        </a>

        <div className="flex" style={{ boxSizing: "border-box" }}>
          <div className="p-3" style={{ boxSizing: "border-box" }}>
            <a
              href="/work"
              className="inline-block max-w-full overflow-hidden"
              style={{
                height: "27.6px",
                transition: "0.32s",
                color: "rgb(247, 246, 240)",
                textDecoration: "none",
                transitionProperty: "all",
                backgroundColor: "rgba(0, 0, 0, 0)",
                cursor: "none",
                boxSizing: "border-box",
              }}
            >
              <div
                style={{
                  transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                  transformStyle: "preserve-3d",
                  boxSizing: "border-box",
                }}
              >
                work
              </div>
              <div
                style={{
                  transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                  transformStyle: "preserve-3d",
                  boxSizing: "border-box",
                }}
              >
                work
              </div>
            </a>
          </div>

          <div className="p-3" style={{ boxSizing: "border-box" }}>
            <a
              href="/about"
              className="inline-block max-w-full overflow-hidden"
              style={{
                height: "27.6px",
                transition: "0.32s",
                color: "rgb(247, 246, 240)",
                textDecoration: "none",
                transitionProperty: "all",
                backgroundColor: "rgba(0, 0, 0, 0)",
                cursor: "none",
                boxSizing: "border-box",
              }}
            >
              <div
                style={{
                  transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                  transformStyle: "preserve-3d",
                  boxSizing: "border-box",
                }}
              >
                about
              </div>
              <div
                style={{
                  transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                  transformStyle: "preserve-3d",
                  boxSizing: "border-box",
                }}
              >
                about
              </div>
            </a>
          </div>

          <div className="mr-[-12px] p-3" style={{ boxSizing: "border-box" }}>
            <a
              href="/contact"
              className="inline-block max-w-full overflow-hidden"
              style={{
                height: "27.6px",
                transition: "0.32s",
                color: "rgb(247, 246, 240)",
                textDecoration: "none",
                transitionProperty: "all",
                backgroundColor: "rgba(0, 0, 0, 0)",
                cursor: "none",
                boxSizing: "border-box",
              }}
            >
              <div
                style={{
                  transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                  transformStyle: "preserve-3d",
                  boxSizing: "border-box",
                }}
              >
                contact
              </div>
              <div
                style={{
                  transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                  transformStyle: "preserve-3d",
                  boxSizing: "border-box",
                }}
              >
                contact
              </div>
            </a>
          </div>
        </div>

        <div
          className="relative z-[99] hidden cursor-pointer"
          style={{ boxSizing: "border-box" }}
        >
          <div
            className="flex h-6 flex-col items-center overflow-hidden"
            style={{ boxSizing: "border-box" }}
          >
            <div
              style={{
                transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
                boxSizing: "border-box",
              }}
            >
              menu
            </div>
            <div
              style={{
                transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
                boxSizing: "border-box",
              }}
            >
              close
            </div>
          </div>
        </div>
      </div>

      <div
        className="pointer-events-none absolute inset-0 z-0 select-none"
        style={{ height: "776px", boxSizing: "border-box" }}
      >
        <div
          className="absolute inset-x-0 top-0 h-[60px] w-screen bg-[#131313]"
          style={{ boxSizing: "border-box" }}
        ></div>
        <div
          className="absolute inset-x-0 top-[60px]"
          style={{ boxSizing: "border-box" }}
        >
          <img
            src="https://cdn.prod.website-files.com/6376abd96f4edb85290432dd/6376abd96f4edbd77e04332c_top-left.svg"
            loading="lazy"
            alt=""
            className="absolute left-0 top-0 block h-[72px] w-24 max-w-none select-none"
            style={{
              verticalAlign: "middle",
              boxSizing: "border-box",
              border: "0px none rgb(245, 245, 245)",
            }}
          />
          <img
            src="https://cdn.prod.website-files.com/6376abd96f4edb85290432dd/6376abd96f4edbad7004332a_top-right.svg"
            loading="lazy"
            alt=""
            className="absolute right-0 top-0 block h-[72px] w-24 max-w-none select-none"
            style={{
              verticalAlign: "middle",
              boxSizing: "border-box",
              border: "0px none rgb(245, 245, 245)",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;