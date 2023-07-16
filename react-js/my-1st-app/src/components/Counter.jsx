import { useState } from "react";

function Counter(props) {
  let { start } = props;
  let [count, setCount] = useState(start);
  let incCount = () => {
    setCount(count + 1);
  };
  let decCount = () => {
    setCount(count - 1);
  };
  return (
    <>
      <section className="text-center">
        <p className="fw-bold h4 text-secondary">{count}</p>
        <button className="btn btn-danger btn-sm" onClick={decCount}>
          DEC
        </button>
        <button className="btn btn-success ms-1 btn-sm" onClick={incCount}>
          INC
        </button>
      </section>
      <hr />
    </>
  );
}

export default Counter;
