import {
  Commited,
  Enterprise,
  Footer,
  Hero,
  Nav,
  Onboard,
  Organization,
  Reimagining,
  StartEnterprise,
} from "./components";

import divider from "./assets/Divider.svg";

function App() {
  return (
    <>
      <main className="align-element">
        <Nav />
        <Hero />
        <Reimagining />
        <Organization />
        <Onboard />
        <Commited />
        <Enterprise />
      </main>
      <section className="divider w-full">
        <img src={divider} alt="divider" className="w-full" />
      </section>
      <main className="align-element">
        <StartEnterprise />
        <Footer/>
      </main>
    </>
  );
}

export default App;
