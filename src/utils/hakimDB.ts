const SHEET_ID = "1RcVSRuNIgJMgLY6LTbnOPfEZLKj825wTsbAO1gh_Jo0"

// Generic fetch helper
async function fetchSheet(sheetName: string) {
  const url = `https://opensheet.elk.sh/${SHEET_ID}/${sheetName}`
  const res = await fetch(url)
  return res.json()
}

// ================= HARITHA =================
export const fetchHarithaSubjects = () =>
  fetchSheet("Haritha_Subjects")

export const fetchHarithaSummary = () =>
  fetchSheet("Haritha_Summary")

// ================= ARKAAN =================
export const fetchArkaanSubjects = () =>
  fetchSheet("Arkaan_Subjects")

export const fetchArkaanSummary = () =>
  fetchSheet("Arkaan_Summary")

// ================= KAUSHIK =================
export const fetchKaushikSubjects = () =>
  fetchSheet("Kaushik_Subjects")

export const fetchKaushikSummary = () =>
  fetchSheet("Kaushik_Summary")

// ================= IMRAN =================
export const fetchImranSubjects = () =>
  fetchSheet("Imran_Subjects")

export const fetchImranSummary = () =>
  fetchSheet("Imran_Summary")

// ================= MOHANSAI =================
export const fetchMohansaiSubjects = () =>
  fetchSheet("Mohansai_Subjects")

export const fetchMohansaiSummary = () =>
  fetchSheet("Mohansai_Summary")

// ================= VASANTHA =================
export const fetchVasanthaSubjects = () =>
  fetchSheet("Vasantha_Subjects")

export const fetchVasanthaSummary = () =>
  fetchSheet("Vasantha_Summary")
