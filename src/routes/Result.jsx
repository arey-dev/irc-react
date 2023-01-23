import illus from "../assets/illustration-thank-you.svg";
import { useLoaderData } from "react-router-dom";
import data from "../data";

export function loader() {
  return data.getRate();
}

export default function Result() {
  const rate = useLoaderData();

  return (
    <section id="state-container" className="container card">
      <div className="img-wrapper">
        <img src={illus} alt="" aria-hidden="true" />
      </div>
      <p className="highlight">
        You selected <span data-rate-value>{rate}</span> out of 5
      </p>
      <p className="heading">Thank You!</p>
      <p>
        We appreciate you taking the time to give a rating.If you ever need more
        support, don't hesitate to get in touch!
      </p>
    </section>
  );
}
