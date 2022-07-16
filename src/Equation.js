import { useEffect, useState } from "react";

const Equation = ({setSolution, numQuestions, userAnswer}) => {
    const [value1, setValue1] = useState(null);
    const [value2, setValue2] = useState(null);
    const [value3, setValue3] = useState(null);
    const [proposedAnswer, setProposedAnswer] = useState(null);
    const [actualAnswer, setActualAnswer] = useState(null);

    useEffect(() => {        
        setValue1(Math.floor(Math.random() * 25));
        setValue2(Math.floor(Math.random() * 7));
        setValue3(Math.floor(Math.random() * 200));     
    }, [numQuestions, userAnswer])

    useEffect(() => {
        setProposedAnswer((Math.floor(Math.random() * 3) + value1 + value2 + value3));
        setActualAnswer(value1 + value2 + value3);
    }, [value1, value2, value3])

    useEffect(() => {
        if (proposedAnswer === actualAnswer) {
            setSolution(true);
        } else {
            setSolution(false);
        }
    }, [proposedAnswer, actualAnswer])

    return (
        <div className="equation">
            <h4>{`Question ${numQuestions+1}`}</h4>
          <h1 className="text">{`${value1} + ${value2} + ${value3} = ${proposedAnswer}`}</h1>
        </div>
    )
}

export default Equation;