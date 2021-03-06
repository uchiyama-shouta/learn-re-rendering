import { useState, useCallback } from "react";
import ChildArea from "./ChildArea";
import "./App.css";

function App() {
	console.log("App");
	const [text, setText] = useState("");
	const [open, setOpen] = useState(false);

	const onChangeText = (e) => setText(e.target.value);
	console.log(text);

	const onClickOpen = () => setOpen(!open);

	/*
    アロー関数はコンポーネントが更新されると毎回生成されるので、
    <Component onClick={onClick} />
    のようにするとpropsが変更されたという判断され、
    再レンダリングされる。
    なので
    const onClick = useCallback(() => setCount(count + 1), []);
    のようにする
  */

	const onClickClose = useCallback(() => setOpen(false), []);

	return (
		<div className="App">
			<input type="text" value={text} onChange={onChangeText} />
			<br />
			<br />
			<button onClick={onClickOpen}>表示</button>
			<ChildArea open={open} onClickClose={onClickClose} />
		</div>
	);
}

export default App;
