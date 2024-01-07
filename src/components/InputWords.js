import { useState } from "react";

const WordsValue = () => {
    const [state, setState] = useState({
        tagWords: "",
        wordList: "",
    });

    const handleChangeState = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        })
    }

    const handleOnClick = () => {
        console.log(state.tagWords);
    };

    const inputEnter = (e) => {
        if (e.key === 'Enter'){
            console.log(e);
            handleOnClick();
        }
    }
    
    const submit = (e) => {
        e.preventDefault();
    }

    return (
        <div className="WordsValue">
            <div>
                <form onSubmit={submit}>
                    <input type="text" maxLength={3}
                        name="tagWords"
                        value={state.tagWords}
                        onChange={handleChangeState}
                        onKeyDown={inputEnter}
                        placeholder="3글자를 입력해주세요."/>
                </form>
            </div>
        </div>
    );
};
export default WordsValue;