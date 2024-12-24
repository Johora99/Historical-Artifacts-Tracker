import React from 'react'

export default function UpComingArtifacts() {
  const artifacts = [
    {
      id: 1,
      name: "Ancient Vase",
      description: "A beautiful vase from the Ming dynasty.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_OsB9OZFdttDfHrCvKPSraiAIVovLQatYpA&s",
    },
    {
      id: 2,
      name: "Golden Coin",
      description: "A rare coin from the Roman Empire.",
      image:
        "https://www.lib.utexas.edu/sites/default/files/2023-02/hummingbird-bowl.jpeg",
    },
    {
      id: 3,
      name: "Vintage Compass",
      description: "A navigation tool from the 18th century.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsGi2vxkK7QTM4mD8KE_Bo1Ud-sH6Rfnr0X414duxawgsZ8PPSc1L1zgVajmILAA4ZStk&usqp=CAU",
    },
  ];
  return (
    <section className="bg-gradient-to-b from-gray-50 to-gray-200 py-12">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          Our Artifacts Collection
        </h2>
        <p className="text-gray-600 mb-12">
          Discover the unique artifacts preserved from various parts of history.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artifacts.map((artifact) => (
            <div
              key={artifact.id}
              className="relative bg-white shadow-lg rounded-xl overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:ring-4 hover:ring-purple-300"
            >
              <div className="relative group">
                <img
                  src={artifact.image}
                  alt={artifact.name}
                  className="w-full h-56 object-cover rounded-t-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-xl font-semibold mb-2">
                    {artifact.name}
                  </p>
                  <p className="text-gray-300 text-sm">Click to explore more</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800">
                  {artifact.name}
                </h3>
                <p className="text-gray-600 mt-2">{artifact.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
