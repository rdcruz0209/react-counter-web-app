import {useState} from "react";
import "./CounterButton.css";
import {PropTypes} from "prop-types";

export default function Counter() {
  const [totalCount, setCount] = useState(0);

  function incrementCounterParentFunction(by) {
    setCount(totalCount + by);
  }

  function decrementCouterParentFunction(by) {
    if (totalCount <= 0 || totalCount <= by) {
      setCount(0);
    } else {
      setCount(totalCount - by);
    }
  }

  function resetCounter() {
    setCount(0);
  }

  return (
    <>
      <span className="totalCount">{totalCount}</span>

      <CounterButton
        by={1}
        incrementMethod={incrementCounterParentFunction}
        decrementMethod={decrementCouterParentFunction}
      ></CounterButton>

      <CounterButton
        by={2}
        incrementMethod={incrementCounterParentFunction}
        decrementMethod={decrementCouterParentFunction}
      ></CounterButton>

      <CounterButton
        by={5}
        incrementMethod={incrementCounterParentFunction}
        decrementMethod={decrementCouterParentFunction}
      ></CounterButton>

      <div>
        <button className="counterButton" onClick={resetCounter}>
          Reset
        </button>
      </div>
    </>
  );
}

function CounterButton({by, incrementMethod, decrementMethod}) {
  // [0, ƒ]
  const [count, setCount] = useState(0);

  function incrementCounterFunction() {
    setCount(count + by);
    incrementMethod(by);
  }
  function decrementCounterFunction() {
    setCount(count - by);
    decrementMethod(by);
  }

  return (
    <div className="Counter">
      <div>
        <button className="counterButton" onClick={incrementCounterFunction}>
          +{by}
        </button>
        <button className="counterButton" onClick={decrementCounterFunction}>
          -{by}
        </button>
      </div>
    </div>
  );
}

CounterButton.propTypes = {
  by: PropTypes.number,
};

CounterButton.defaultProps = {
  by: 5,
};
