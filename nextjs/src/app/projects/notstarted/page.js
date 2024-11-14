import Link from "next/link"

export default function notstarted() {
  return (
    <div className="h-screen flex flex-col items-center и justify-center">
      <h1>Проект еще не начат!</h1>
      <Link href={"/#empty"} className="text-red-500">Вернуться назад</Link>
    </div>
  )
}