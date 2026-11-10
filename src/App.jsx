import { useState } from 'react';
import { useSelector } from 'react-redux';
import { cloudEnabled, TABS } from './config';
import Header from './components/Header';
import Nav from './components/Nav';
import AuthGate from './components/AuthGate';
import Overview from './components/tabs/Overview';
import Budget from './components/tabs/Budget';
import Ceremony from './components/tabs/Ceremony';
import Seserahan from './components/tabs/Seserahan';
import Mahar from './components/tabs/Mahar';
import Guests from './components/tabs/Guests';
import Vendors from './components/tabs/Vendors';
import Adat from './components/tabs/Adat';
import Legal from './components/tabs/Legal';
import Rundown from './components/tabs/Rundown';
import Backup from './components/tabs/Backup';

// Map each tab key to its component. Only the active tab renders.
const TAB_COMPONENTS = {
  overview: Overview, budget: Budget, ceremony: Ceremony, seserahan: Seserahan,
  mahar: Mahar, guests: Guests, vendors: Vendors, adat: Adat,
  legal: Legal, rundown: Rundown, data: Backup,
};

export default function App() {
  const [tab, setTab] = useState(TABS[0][0]);
  const user = useSelector((s) => s.auth.user);
  const TabView = TAB_COMPONENTS[tab];

  return (
    <>
      {cloudEnabled && !user && <AuthGate />}
      <Header />
      <Nav tab={tab} setTab={setTab} />
      <main>
        <TabView />
      </main>
      <footer className="foot">
        This dashboard is a general planning guide. Adat customs and legal/administrative requirements
        differ by ethnicity, faith, and region — always verify current rules with your local KUA,
        Dukcapil / Catatan Sipil, and family elders.
      </footer>
    </>
  );
}
