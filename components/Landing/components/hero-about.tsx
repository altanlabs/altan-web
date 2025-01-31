import Particles from './particles'
import Highlighter, { HighlighterItem } from './highlighter'

export default function HeroAbout() {
  const locations = [
    {
      name: "Spain",
      address: "Pg. de Joan de Borbó, 99, Barcelona, 08039, Spain",
      mapsUrl: "https://maps.app.goo.gl/TKhegNL3TaLGkiYa7"
    },
    {
      name: "Germany",
      address: "Altan UG, Bildungscampus 1, 74076 Heilbronn, Germany",
      mapsUrl: "https://maps.app.goo.gl/BbkD7ouEij4ESxFW6"
    },
    {
      name: "United States",
      address: "2055 Limestone Rd, Wilmington, Delaware 19808",
      mapsUrl: "https://maps.app.goo.gl/qs5ZPqoAyqoAzPkH6"
    },
  ];

  return (
    <section className="relative">

      {/* Radial gradient */}
      <div className="absolute flex items-center justify-center top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-[800px] aspect-square" aria-hidden="true">
        <div className="absolute inset-0 translate-z-0 bg-purple-500 rounded-full blur-[120px] opacity-30"></div>
        <div className="absolute w-64 h-64 translate-z-0 bg-purple-400 rounded-full blur-[80px] opacity-70"></div>
      </div>

      {/* Particles animation */}
      <Particles className="absolute inset-10 h-250 -z-99" quantity={10} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-10 md:pt-40">

          {/* Hero content */}
          <div className="text-center">
            <div className="inline-flex font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-3">The folks behind the product</div>
            <h1 className="h1 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-6">About us</h1>
          </div>

          {/* Locations grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {locations.map((location, index) => (
              <div key={index} className="relative p-6 bg-slate-900 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <Particles className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out" quantity={3} />
                <div className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/3 aspect-square" aria-hidden="true">
                  <div className="absolute inset-0 translate-z-0 rounded-full bg-slate-800 group-hover:bg-purple-500 transition-colors duration-500 ease-in-out blur-[60px]" />
                </div>
                <div className="flex flex-col h-full">
                  <h2 className="text-xl font-bold text-white">{location.name}</h2>
                  <p className="mt-2 text-slate-400">{location.address}</p>
                  <div className="text-right">
                    <a href={location.mapsUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-slate-300 hover:text-white inline-flex items-center transition duration-150 ease-in-out group">
                      View on Map <span className="tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
                    </a>
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

    </section>
  )
}