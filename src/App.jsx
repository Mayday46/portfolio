import Footer from "./components/Footer"
import NavigationBar from "./components/NavigationBar"

function App() {
  return (
    // <h1> Welcome to My Portfolio </h1>
    <div>

      <h1 className = 'text-3xl font-bold underline'>
        Welcome to My Portfolio
      </h1>

      <NavigationBar />

      <Footer />
    </div>
  )
}

export default App
