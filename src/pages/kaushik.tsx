import { useEffect, useState } from "react"
import { fetchKaushikSubjects, fetchKaushikSummary } from "../utils/hakimDB"
import { groupBySemester, calculateSGPA, calculateCGPAFromSubjects} from "../utils/gpa"

import kaushikImg from "../assets/kaushik.jpg"
import StudentPage from "../components/StudentPage"

export default function Kaushik({ onBack, onLogout }: any) {
  const [semesters, setSemesters] = useState<any>({})
  const [summary, setSummary] = useState<any[]>([])
  const [cgpa, setCgpa] = useState(0)

  useEffect(() => {
    async function load() {
      const subjects = await fetchKaushikSubjects()
      const sum = await fetchKaushikSummary()

      const grouped = groupBySemester(subjects)
      const sgpas = Object.values(grouped).map((subs: any) =>
        calculateSGPA(subs)
      )

      setSemesters(grouped)
      setSummary(sum)
      setCgpa(calculateCGPAFromSubjects(grouped))
    }

    load()
  }, [])

  return (
    <StudentPage
      name="Kaushik"
      img={kaushikImg}
      semesters={semesters}
      summary={summary}
      cgpa={cgpa}
      onBack={onBack}
      onLogout={onLogout}
    />
  )
}
