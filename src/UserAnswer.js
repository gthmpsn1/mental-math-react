const UserAnswer = ({setUserAnswer}) => {
    const returnTrue = () => {
        setUserAnswer(true);
    }

    const returnFalse = () => {
        setUserAnswer(false);
    }

    return (
        <div>
            <button onClick={returnTrue} >True</button>
            <button onClick={returnFalse} >False</button>
        </div>
    )
}

export default UserAnswer;