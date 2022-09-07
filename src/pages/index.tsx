import type { NextPage } from "next"
import Hello from "@/components/Hello"

const Home: NextPage = () => {
  return (
    <div className="bg-neutral-500 text-lg">
      <Hello />
    </div>
  )
}

export default Home
