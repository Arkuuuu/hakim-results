import { useEffect, useState } from "react"
import { fetchVasanthaSubjects, fetchVasanthaSummary } from "../utils/hakimDB"
import {
  groupBySemester,calculateSGPA,calculateCGPAFromSubjects} from "../utils/gpa"

import vasanthaImg from "../assets/vasantha.jpg"
import StudentPage from "../components/StudentPage"

export default function Vasantha({ onBack, onLogout }: any) {
  const [semesters, setSemesters] = useState<any>({})
  const [summary, setSummary] = useState<any[]>([])
  const [cgpa, setCgpa] = useState(0)

  useEffect(() => {
    async function load() {
      const subjects = await fetchVasanthaSubjects()
      const sum = await fetchVasanthaSummary()

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
      name="Vasantha"
      img={vasanthaImg}
      semesters={semesters}
      summary={summary}
      cgpa={cgpa}
      onBack={onBack}
      onLogout={onLogout}
    />
  )
}
