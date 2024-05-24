import "./App.css";
import {
  iconCalc,
  iconKarma,
  iconSuperv,
  iconTeamBuild,
} from "./assets";
import { ContentCont } from "./components";
function App() {
  return (
    <>
      <main
        className=" min-h-dvh bg-no-repeat bg-cover bg-center  grid place-content-center  w-full text-center bg-hero-pattern"
       
      >
        <div className=" grid grid-rows-[auto_1fr] gap-8  w-full p-5 Tablet:p-10 place-content-center">
          <section className=" p-5  text-white">
            <h1 className=" text-[1.4rem] Tablet:text-4xl font-extralight ">
              Reliable, efficient delivery{" "}
              <span className="block font-semibold tracking-[0.005em]  Tablet:mt-3   m-0 ">
                <span className=" bg-gradient-to-tr from-primary-blue to-primary-cyan bg-clip-text text-transparent">
                  {" "}
                  Powered by Technology
                </span>
              </span>
            </h1>
            <p className=" mt-5 Tablet:mt-7 max-w-[60ch] m-auto ">
              Our Artificial Intelligence powered tools use millions of project
              data points to ensure that your project is successful
            </p>
          </section>
          <section className=" p-5 grid grid-cols-1 text-start gap-7    Tablet:grid-cols-3   place-content-center place-items-center   ">
            <ContentCont
              title="Supervisor"
              content="Monitors activity to identify project roadblocks"
              icon={iconSuperv}
              color="border-primary-cyan"
            />
            <div className=" flex flex-col gap-7">
              <ContentCont
                title="Team Builder"
                content=" Scans our talent network to create the optimal team for your
                project"
                icon={iconTeamBuild}
                color="border-primary-red"
              />
              <ContentCont
                title="Karma"
                content="Regularly evaluates our talent to ensure quality"
                icon={iconKarma}
                color="border-primary-orange"
              />
            </div>

            <ContentCont
              title="Calculator"
              content="Uses data from past projects to provide better delivery
                estimates"
              icon={iconCalc}
              color="border-primary-blue"
            />
          </section>
        </div>
      </main>
    </>
  );
}

export default App;
