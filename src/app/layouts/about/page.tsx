import { JSX } from "react";
import Overview from "./components/overview";
import Technologies from "./components/tools";

export default function About(): JSX.Element {
  return (
    <section className="py-20 px-4 bg-white dark:bg-neutral-900">
      <Overview />
      <Technologies />
    </section>
  );
}
