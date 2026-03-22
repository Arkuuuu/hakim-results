// 🎓 JNTUA Grade → Grade Points
const gradePoints: Record<string, number> = {
  S: 10,
  A: 9,
  B: 8,
  C: 7,
  D: 6,
  E: 5,
  F: 0,
  AB: 0
}

// 📚 Group subjects by semester
export function groupBySemester(subjects: any[]) {
  const map: Record<number, any[]> = {}

  subjects.forEach(s => {
    const sem = Number(s.Semester)
    if (!map[sem]) map[sem] = []
    map[sem].push(s)
  })

  return map
}

// 🎓 JNTUA SGPA = Σ(Credits × GradePoints) / ΣCredits
export function calculateSGPA(subjects: any[]) {
  let totalCredits = 0
  let weightedPoints = 0

  subjects.forEach(s => {
    const credits = Number(s.Credits) || 0
    if (!credits) return

    const grade = (s.Grade || "")
      .toString()
      .trim()
      .toUpperCase()

    const gp = gradePoints[grade] ?? 0

    totalCredits += credits
    weightedPoints += credits * gp
  })

  if (!totalCredits) return 0
  return weightedPoints / totalCredits
}

// 🎓 JNTUA CGPA = Σ(all Credits × GradePoints) / Σ(all Credits)
export function calculateCGPAFromSubjects(
  semesters: Record<number, any[]>
) {
  let totalCredits = 0
  let weightedPoints = 0

  Object.values(semesters).forEach((subs: any[]) => {
    subs.forEach(s => {
      const credits = Number(s.Credits) || 0
      if (!credits) return

      const grade = (s.Grade || "")
        .toString()
        .trim()
        .toUpperCase()

      const gp = gradePoints[grade] ?? 0

      totalCredits += credits
      weightedPoints += credits * gp
    })
  })

  if (!totalCredits) return 0
  return weightedPoints / totalCredits
}
