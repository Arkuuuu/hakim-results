import harithaImg from "../assets/haritha.jpeg"
import arkaanImg from "../assets/arkaan.jpg"

export default function Home({ onSelect }: any) {
  const friends = [
    { name: "Haritha", key: "haritha", img: harithaImg },
    { name: "Arkaan", key: "arkaan", img: arkaanImg },
    { name: "Kaushik", key: "kaushik" },
    { name: "Imran", key: "imran" },
    { name: "Mohansai", key: "mohansai" },
    { name: "Vasantha", key: "vasantha" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#020617] to-[#0b1120] text-white flex flex-col items-center px-6 py-16">
      
      {/* Header */}
      <div className="text-center mb-14 animate-fade">
        <h1 className="text-5xl font-semibold tracking-wide bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
          HAKIM
        </h1>
        <p className="text-white/60 mt-2">Friends Academic Dashboard</p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 w-full max-w-6xl">
        {friends.map((f, i) => (
          <div
            key={i}
            onClick={() => onSelect(f.key)}
            className="card-premium card-glow group cursor-pointer rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl p-6 flex flex-col items-center"
          >
            {/* Avatar */}
            <div className="w-24 h-24 rounded-full overflow-hidden border border-white/20 flex items-center justify-center text-xl text-white/70 img-hover">
              {f.img ? (
                <img
                  src={f.img}
                  alt={f.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                f.name[0]
              )}
            </div>

            {/* Name */}
            <div className="mt-4 text-white/80 group-hover:text-white transition">
              {f.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
