import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Tabs from './components/ui/Tabs'


function App() {


  return (
    <>
      <Header />
      <main className='container mx-auto flex flex-col justify-center items-center'>
        <Tabs />
      </main>
      <Footer />
    </>
  )
}

export default App
