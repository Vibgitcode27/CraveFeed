export const dynamic = "force-dynamic";
import LandingPage from "./compnents/comp1";

export default async function Home() {
//   const todos = await serverClient.getTodos();
  return (
    <main className="max-w-3xl mx-auto mt-5">
      <h1> Hii</h1>
      <LandingPage/>
    </main>
  )
  };