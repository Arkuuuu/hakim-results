import { useEffect, useState } from "react"
import { fetchHarithaSubjects, fetchHarithaSummary } from "../utils/hakimDB"
import {groupBySemester, calculateSGPA,calculateCGPAFromSubjects} from "../utils/gpa"

import harithaImg from "../assets/haritha.jpeg"
import StudentPage from "../components/StudentPage"

export default function Haritha({ onBack, onLogout }: any) {
  const [semesters, setSemesters] = useState<any>({})
  const [summary, setSummary] = useState<any[]>([])
  const [cgpa, setCgpa] = useState(0)

  useEffect(() => {
    async function load() {
      const subjects = await fetchHarithaSubjects()
      const sum = await fetchHarithaSummary()

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
      name="Haritha"
      img={harithaImg}
      semesters={semesters}
      summary={summary}
      cgpa={cgpa}
      onBack={onBack}
      onLogout={onLogout}
    />
  )
}
