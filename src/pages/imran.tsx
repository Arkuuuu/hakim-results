import { useEffect, useState } from "react"
import { fetchImranSubjects, fetchImranSummary } from "../utils/hakimDB"
import {groupBySemester,calculateSGPA,calculateCGPAFromSubjects} from "../utils/gpa"

import imranImg from "../assets/imran.jpg"
import StudentPage from "../components/StudentPage"

export default function Imran({ onBack, onLogout }: any) {
  const [semesters, setSemesters] = useState<any>({})
  const [summary, setSummary] = useState<any[]>([])
  const [cgpa, setCgpa] = useState(0)

  useEffect(() => {
    async function load() {
      const subjects = await fetchImranSubjects()
      const sum = await fetchImranSummary()

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
      name="Imran"
      img={imranImg}
      semesters={semesters}
      summary={summary}
      cgpa={cgpa}
      onBack={onBack}
      onLogout={onLogout}
    />
  )
}
