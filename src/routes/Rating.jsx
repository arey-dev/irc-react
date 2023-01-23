import { Form, redirect } from "react-router-dom";
import { useState } from "react";
import data from "../data";
import star from "../assets/icon-star.svg";
import { useEffect } from "react";

export async function action({ request }) {
  const formData = await request.formData();
  const value = formData.get("rate");

  data.setRate(value);

  return redirect("/result");
}

export default function Rating() {
  function handleClick(event) {
    if (event.target.tagName !== "LABEL") {
      return;
    }

    // get div wrapper
    const wrapper = event.target;

    // get radio input
    const radio = wrapper.nextElementSibling;

    // remove style from wrappers
    for (let wrapper of document.querySelectorAll(".value-wrapper")) {
      wrapper.classList.remove("checked");
    }

    // then add to selected one
    wrapper.classList.add("checked");
    radio.checked = true;
  }

  return (
    <section>
      <h1 className="sr-only">Rating Component</h1>
      <div id="form-container" className="container">
        <Form name="rating" role="rate" method="post">
          <div className="img-wrapper">
            <img src={star} alt="" aria-hidden="true" />
          </div>
          <fieldset>
            <legend className="heading">How did we do?</legend>
            <p>
              Please let us know how we did with your support request. All
              feedback is appreciated to help us improve our offering!
            </p>
            <ul
              className="radio-button-container"
              onClick={(e) => handleClick(e)}
            >
              <li>
                <label htmlFor="1" className="value-wrapper">
                  1
                </label>
                <input
                  className="radio-input"
                  type="radio"
                  name="rate"
                  value="1"
                  id="1"
                />
              </li>
              <li>
                <label htmlFor="2" className="value-wrapper">
                  2
                </label>
                <input
                  className="radio-input"
                  type="radio"
                  name="rate"
                  value="2"
                  id="2"
                />
              </li>
              <li>
                <label htmlFor="3" className="value-wrapper">
                  3
                </label>
                <input
                  className="radio-input"
                  type="radio"
                  name="rate"
                  value="3"
                  id="3"
                />
              </li>
              <li>
                <label htmlFor="4" className="value-wrapper">
                  4
                </label>
                <input
                  className="radio-input"
                  type="radio"
                  name="rate"
                  value="4"
                  id="4"
                />
              </li>
              <li>
                <label htmlFor="5" className="value-wrapper">
                  5
                </label>
                <input
                  className="radio-input"
                  type="radio"
                  name="rate"
                  value="5"
                  id="5"
                />
              </li>
            </ul>
            <input className="button" type="submit" value="submit" />
          </fieldset>
        </Form>
      </div>
    </section>
  );
}
