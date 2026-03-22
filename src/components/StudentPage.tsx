import { calculateSGPA } from "../utils/gpa"

export default function StudentPage({
  name,
  img,
  semesters,
  summary,
  cgpa,
  onBack,
  onLogout
}: any) {

  // safe number formatter
  const format = (v: any) => {
    const n = Number(v)
    return isNaN(n) ? "0.00" : n.toFixed(2)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#020617] to-[#0b1120] text-white px-6 py-10">

      {/* Top Buttons */}
      <div className="flex gap-3 mb-6">
        <button
          onClick={onBack}
          className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 hover:bg-white/20 transition"
        >
          ← Back
        </button>

        <button
          onClick={onLogout}
          className="px-4 py-2 rounded-lg bg-red-500/20 border border-red-400/30 hover:bg-red-500/30 transition"
        >
          Logout
        </button>
      </div>

      {/* Profile */}
      <div className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl p-6 flex items-center gap-6 mb-10">
        <img
          src={img}
          alt={name}
          className="w-20 h-20 rounded-full object-cover border border-white/20"
        />

        <div>
          <h1 className="text-3xl font-semibold">{name}</h1>
          <p className="text-white/60">CGPA: {format(cgpa)}</p>
        </div>

        {summary?.[0]?.["All Results"] && (
          <a
            href={summary[0]["All Results"]}
            target="_blank"
            rel="noreferrer"
            className="ml-auto px-4 py-2 rounded-lg bg-blue-500/20 border border-blue-400/30 hover:bg-blue-500/30 transition"
          >
            📦 All Results
          </a>
        )}
      </div>

      {/* Semesters */}
      {Object.entries(semesters || {}).map(([sem, subs]: any) => {
        const sgpa = calculateSGPA(subs)

        // FIX: normalize semester match
        const semSummary = summary?.find(
          (s: any) => Number(s.Semester) === Number(sem)
        )

        // FIX: normalize supply links
        const supplies =
          semSummary?.Supplies?.toString()
            .split(",")
            .map((l: string) => l.trim())
            .filter(Boolean) || []

        return (
          <div
            key={sem}
            className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl p-6 mb-8"
          >
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <h2 className="text-xl font-semibold">
                Semester {sem}
              </h2>

              <div className="px-3 py-1 rounded-lg bg-white/10 border border-white/20">
                SGPA: {format(sgpa)}
              </div>

              {semSummary && (
                <div className="px-3 py-1 rounded-lg bg-white/10 border border-white/20">
                  {semSummary.Percentage ?? "In Progress"}%
                </div>
              )}

              {(semSummary?.Pdf || supplies.length > 0) && (
                <div className="flex gap-3 ml-auto flex-wrap">
                  {semSummary?.Pdf && (
                    <a
                      href={semSummary.Pdf}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3 py-1 rounded-md bg-blue-500/20 border border-blue-400/30 hover:bg-blue-500/30 transition text-sm"
                    >
                      Regular
                    </a>
                  )}

                  {supplies.map((link: string, i: number) => (
                    <a
                      key={i}
                      href={link}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3 py-1 rounded-md bg-amber-500/20 border border-amber-400/30 hover:bg-amber-500/30 transition text-sm"
                    >
                      Supply {i + 1}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="text-white/60 border-b border-white/10">
                  <tr>
                    <th className="text-left py-2">Subject</th>
                    <th>Type</th>
                    <th>Credits</th>
                    <th>Grade</th>
                    <th>Result</th>
                  </tr>
                </thead>

                <tbody>
                  {subs.map((s: any, i: number) => (
                    <tr
                      key={i}
                      className="border-b border-white/5 hover:bg-white/5 transition"
                    >
                      <td className="py-2">{s["Subject Name"]}</td>
                      <td className="text-center">{s.Type}</td>
                      <td className="text-center">{s.Credits}</td>
                      <td className="text-center">{s.Grade}</td>
                      <td className="text-center">{s.Result}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )
      })}
    </div>
  )
}
