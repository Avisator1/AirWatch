function Gases() {
    const gases = [
      { 
        name: "CO", 
        color: "rgba(75, 192, 192, 1)", 
        description: "Carbon Monoxide prevents blood from carrying oxygen, which can cause headaches, dizziness, and even death at high levels."
      },
      { 
        name: "NO", 
        color: "rgba(54, 162, 235, 1)", 
        description: "Nitric Oxide can form harmful compounds that contribute to air pollution and smog."
      },
      { 
        name: "NO2", 
        color: "rgba(255, 206, 86, 1)", 
        description: "Nitrogen Dioxide irritates the lungs, can worsen asthma, and may damage lung tissue over time."
      },
      { 
        name: "O3", 
        color: "rgba(255, 99, 132, 1)", 
        description: "Ground-level Ozone can make breathing difficult, cause throat irritation, and trigger asthma attacks."
      },
      { 
        name: "PM10", 
        color: "rgba(153, 102, 255, 1)", 
        description: "PM10 particles can enter the lungs and lead to irritation, coughing, and breathing problems."
      },
      { 
        name: "PM2.5", 
        color: "rgba(255, 159, 64, 1)", 
        description: "Fine PM2.5 particles can get deep into the lungs, increasing the risk of heart and lung diseases."
      },
      { 
        name: "Relative Humidity", 
        color: "rgba(201, 203, 207, 1)", 
        description: "Too high or too low humidity can make the air feel uncomfortable and may worsen respiratory issues."
      },
      { 
        name: "SO2", 
        color: "rgba(100, 100, 100, 1)", 
        description: "Sulfur Dioxide can irritate the airways, making it hard to breathe and potentially causing long-term lung problems."
      },
      { 
        name: "Temperature", 
        color: "rgba(0, 0, 0, 1)", 
        description: "Extreme temperatures, whether too hot or too cold, can stress the body and lead to heatstroke or hypothermia."
      },
      { 
        name: "UM003", 
        color: "rgba(100, 100, 255, 1)", 
        description: "High levels of ultrafine particles (UM003) may irritate the lungs and cause other health issues when inhaled."
      },
    ];
  
    return (
      <div className="min-h-screen py-12 recursive px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-6xl font-bold recursive-bold max-w-xl mx-auto text-black text-center mb-8 mt-20">
            Gases and Their Negative Effects
          </h1>
          <div className="shadow overflow-hidden sm:rounded-lg text-white">
            <ul className="divide-y divide-gray-200">
              {gases.map((gas, index) => (
                <li key={index} className="px-4 py-4 sm:px-6 " style={{backgroundColor: gas.color, opacity: 0.90}} >
                  <div className="text-sm font-medium z-10 ">
                    {gas.name}
                  </div>
                  <div className="mt-1 text-sm z-10">
                    {gas.description}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
  
  export default Gases;
  