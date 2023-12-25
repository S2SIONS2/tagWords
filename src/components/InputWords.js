import { useState } from "react";

const WordsValue = () => {
    const [state, setState] = useState({
        tagWords: "",
        wordList: "",
    });

    const handleChangeState = (e) => {
        // 왜인지 textarea에 input값이 바로 안담김 
        setState({
            ...state,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <div className="WordsValue">
            <div>
                <input type="text" maxLength={3} 
                    name="tagWords"
                    value={state.tagWords}
                    onChange={handleChangeState}
                placeholder="3글자를 입력해주세요."/>
            </div>

            <div>
                <textarea
                    name="wordList"
                    value={state.wordList}
                    onChange={handleChangeState}
                ></textarea>
            </div>
        </div>
    );
};
export default WordsValue;