import { Benefits } from "../Components/Benefits/Benefits";
import { Header } from "../Components/Header/Header";
import { Info } from "./Info/Info";

export const Home = () => {
  return (
    <>
      <Header />
      <main className='main_wrapper'>
        <Benefits />
        <section className='info_section'>
          <Info />
        </section>
      </main>
    </>
  );
};
