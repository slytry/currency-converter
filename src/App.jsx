import style from './App.module.css'
import { Quote } from './componets/quote/Quotev'

function App() {

  return (
    <div className={style.root}>
      <header>
        <h1>Заголовок</h1>
      </header>
      <main className={style.main}>
        <p>vfqy</p>


      </main>
      <footer className={style.footer}>
        <Quote />

      </footer>
    </div>
  )
}

export default App
