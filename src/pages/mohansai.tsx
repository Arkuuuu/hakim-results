import { useEffect, useState } from "react"
import { fetchMohansaiSubjects, fetchMohansaiSummary } from "../utils/hakimDB"
import { groupBySemester,calculateSGPA,calculateCGPAFromSubjects} from "../utils/gpa"

import mohansaiImg from "../assets/mohansai.jpg"
import StudentPage from "../components/StudentPage"

export default function Mohansai({ onBack, onLogout }: any) {
  const [semesters, setSemesters] = useState<any>({})
  const [summary, setSummary] = useState<any[]>([])
  const [cgpa, setCgpa] = useState(0)

  useEffect(() => {
    async function load() {
      const subjects = await fetchMohansaiSubjects()
      const sum = await fetchMohansaiSummary()

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
      name="Mohansai"
      img={mohansaiImg}
      semesters={semesters}
      summary={summary}
      cgpa={cgpa}
      onBack={onBack}
      onLogout={onLogout}
    />
  )
}
