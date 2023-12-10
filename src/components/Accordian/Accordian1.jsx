import questions from "./const.accord";
import { useState } from "react";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./accordian.css";

const Accordian = () => {
    const [show, setShow] = useState({});

    const handleClick = (qid) => {
        setShow((prev) => ({ ...prev, [qid]: !prev[qid] }));
    }

    return (
        <div className="accorddiv">
            <div className="accordtitle">
                FAQs!!
            </div>
            <div className="accordquestions">
                {questions.map((question, key) => (
                    <div key={key}>
                        <div className="accordquestion">
                            <div className="accordquestion-title">
                                {question.title}
                            </div>
                            <div className="accordquestion-icon" onClick={() => handleClick(question.id)}>
                                <FontAwesomeIcon icon={show[question.id] ? faMinus : faPlus} />
                            </div>
                        </div>
                        <div className="accordanswers" style={{
                            maxHeight: show[question.id] ? '1000px' : '0',
                            marginTop: show[question.id] ? '2%' : '0',
                            marginBottom: show[question.id] ? '2%' : '0',
                            visibility: show[question.id] ? 'visible' : 'hidden',
                            transition: show[question.id] ? 'max-height 1s ease-in-out' : 'max-height 0.5s linear',
                            overflow: 'hidden',
                        }}>
                            {question.answer}
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
}

export default Accordian;
