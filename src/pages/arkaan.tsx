import { useEffect, useState } from "react"
import { fetchArkaanSubjects, fetchArkaanSummary } from "../utils/hakimDB"
import {groupBySemester,calculateSGPA,calculateCGPAFromSubjects} from "../utils/gpa"


import arkaanImg from "../assets/arkaan.jpg"
import StudentPage from "../components/StudentPage"

export default function Arkaan({ onBack, onLogout }: any) {
  const [semesters, setSemesters] = useState<any>({})
  const [summary, setSummary] = useState<any[]>([])
  const [cgpa, setCgpa] = useState(0)

  useEffect(() => {
    async function load() {
      const subjects = await fetchArkaanSubjects()
      const sum = await fetchArkaanSummary()

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
      name="Arkaan"
      img={arkaanImg}
      semesters={semesters}
      summary={summary}
      cgpa={cgpa}
      onBack={onBack}
      onLogout={onLogout}
    />
  )
}
