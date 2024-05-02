import React, { useRef, useState } from "react";
import "./Accordian.css";
import "../../../global.css";

const Accordian = () => {
  const faqs = [
    {
      question: "What is Lorem Ipsum?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
    },
    {
      question: "Why do we use it?",
      answer:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. n",
    },
    {
      question: "What is React?",
      answer: "React is a JavaScript library for building user interfaces.",
    },
    {
      question: "How to install React?",
      answer: "You can install React using npm or yarn.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(-1);

  const toggleAccordion = (index) => {
    console.log(index, "index");
    setOpenIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };
  return (
    <>
      <div className="container">
        <div className="app" data-aos="fade-up">
          <h1>FAQ</h1>
          <div className="acorddion-wrapper">
            {faqs.map((faq, index) => (
              <Accordiontem
                key={index}
                index={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={index === openIndex}
                toggleAccordion={toggleAccordion}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

const Accordiontem = ({ question, answer, index, isOpen, toggleAccordion }) => {
  const contentref = useRef();

  return (
    <>
      <div className="according-items" data-aos="fade-up">
        <div
          className={`accordion-item ${isOpen ? "open" : "closed"}`}
          data-aos="fade-up"
          onClick={() => toggleAccordion(index)}>
          <div className="inner_item">
            <div className="accordion-header" data-aos="fade-up">
              <div className="accordion-question">{question}</div>
              <div className={`accordion-icon ${isOpen ? "open" : "closed"}`}>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 -4.5 20 20"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <g
                    id="Page-1"
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd">
                    <g
                      id="Dribbble-Light-Preview"
                      transform="translate(-220.000000, -6684.000000)"
                      fill="currentColor">
                      <g
                        id="icons"
                        transform="translate(56.000000, 160.000000)">
                        <path
                          d="M164.292308,6524.36583 L164.292308,6524.36583 C163.902564,6524.77071 163.902564,6525.42619 164.292308,6525.83004 L172.555873,6534.39267 C173.33636,6535.20244 174.602528,6535.20244 175.383014,6534.39267 L183.70754,6525.76791 C184.093286,6525.36716 184.098283,6524.71997 183.717533,6524.31405 C183.328789,6523.89985 182.68821,6523.89467 182.29347,6524.30266 L174.676479,6532.19636 C174.285736,6532.60124 173.653152,6532.60124 173.262409,6532.19636 L165.705379,6524.36583 C165.315635,6523.96094 164.683051,6523.96094 164.292308,6524.36583"
                          id="arrow_down-[#338]"></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div
          ref={contentref}
          className="accordion-answer"
          style={
            isOpen
              ? { height: contentref.current.scrollHeight }
              : { height: "0px" }
          }>
          <div className="inner">
            <p>{answer}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Accordian;
