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

    const handleOnInput = (data) => {
        console.log(state.tagWords);
        console.log(this.data)
    };

    const inputEnter = (e) => {
        if (e.key === 'Enter'){
            handleOnInput();
        }
    }
    
    // 새로고침 방지
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