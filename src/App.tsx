import Header from "./components/header"
import HomeCards from "./components/homeCards"
import "./App.css"


function App() {

  return (
      <div>
        <Header />
        <main className="min-h-screen mb-4 bg-black px-4">
          <HomeCards />
        </main>
      </div>
  )
}

export default App
