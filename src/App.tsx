import styles from './App.module.css'
import { Header } from './widgets/Header/Header.tsx';
import { Content } from './widgets/Content/Content.tsx';
import { Footer } from './widgets/Footer/Footer.tsx';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Content />
      <Footer />
    </div>
  )
}

export default App
