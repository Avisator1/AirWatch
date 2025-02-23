
function About() {
  return (
    <div className="flex flex-col recursive items-center justify-center mt-10 lg:mt-20">
      <div className="text-center px-4">
        <h1 className="text-4xl recursive-bold md:text-8xl font-bold lg:max-w-4xl mx-auto mt-18 text-[#00022b] mb-6">
          Tech Stack
        </h1>

        <p className="text-lg lg:text-xl text-center">We used OpenAQ and FastAPI for the Backend</p>
        <p className="text-lg lg:text-xl text-center">We used React + TailwindCSS for the Frontend</p>

        <div className="flex items-center max-w-xl justify-center mt-10">
            <img className="h-32 items-center" src="https://openaq.org/uploads/openaq-logo_huba84cf4cccb5e50005b00b4f3bd91b8d_10990_350x0_resize_q65_h1_box_3.webp" />
        </div>
    </div>
    </div>
  )
}

export default About