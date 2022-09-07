import type { NextPage } from "next"
import Hello from "@/components/Hello"

const Home: NextPage = () => {
  return (
    <div className="bg-neutral-500">
      <Hello />
    </div>
  )
}

export default Home
