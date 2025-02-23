import { div } from "framer-motion/client"
import { ExternalLink } from "lucide-react"


function ReferencePage() {
  const references = [
    { name: "React", description: "JavaScript library for building user interfaces", url: "https://reactjs.org/" },
    { name: "Tailwind CSS", description: "A utility-first CSS framework", url: "https://tailwindcss.com/" },
    { name: "OpenAQ", description: "open airquality API", url: "https://openaq.org/" },
    { name: "FastAPI", description: "a framework for writing web services in python", url: "https://fastapi.tiangolo.com/" },


  ];

  return (
    <div>
        <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 recursive">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-6xl recursive-bold mt-20 font-bold text-black text-center mb-8">References & Credits</h1>

        <div className="mx-auto flex justify-center space-x-4 mb-8">

        </div>

        <div className="bg-[#65372a] shadow overflow-hidden sm:rounded-lg">
          <ul className="divide-y divide-gray-200">
            {references.map((ref, index) => (
              <li key={index} className="px-4 py-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium text-white">{ref.name}</div>
                  <a
                    href={ref.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-white hover:text-white"
                  >
                    Visit <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
                </div>
                <div className="mt-1 text-sm text-white">{ref.description}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>

    </div>
  );
}

export default ReferencePage;
