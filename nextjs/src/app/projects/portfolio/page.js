import Link from "next/link"

export default function portfolio() {
  return (
    <div className="h-screen flex flex-col items-center и justify-center">
      <h1>СТРАНИЦА ПОРТФОЛИО!</h1>
      <Link href={"/#empty"} className="text-red-500">Вернуться назад</Link>
    </div>
  )
}