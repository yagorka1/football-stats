import { Header } from '../widgets/Header/Header.tsx';
import { Footer } from '../widgets/Footer/Footer.tsx';
import { MatchesPage } from '../pages/matches/MatchesPage.tsx';

function App() {
  return (
    <div className="flex h-dvh flex-col">
      <Header />
      <main className="min-h-0 flex-1 overflow-y-auto">
        <MatchesPage />
      </main>
      <Footer />
    </div>
  );
}

export default App;
