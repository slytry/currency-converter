import style from './App.module.css'
import { Converter } from './components/converter'
import { Quote } from './components/quote'

function App() {

  return (
    <div className={style.root}>
      <header>
        <h1>Заголовок</h1>
      </header>
      <main className={style.main}>
        <Converter/>
      </main>
      <footer className={style.footer}>
        <Quote />
      </footer>
    </div>
  )
}

export default App
