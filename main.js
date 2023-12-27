const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)

function Counter({ item, hdlUpdate, hdlRemove }) {
  const { id, number } = item;

  return (
    <div className='counter'>
      <button onClick={() => hdlUpdate(id, -1)}> - </button>
      <h3>{number}</h3>
      <button onClick={() => hdlUpdate(id, 1)}> + </button>
      <button onClick={() => hdlUpdate(id, -number)}> C </button>
      <button onClick={() => hdlRemove(id)}> X </button>
    </div>
     //  <div className='counter'>
  //     <button onClick = {()=>props.hdlUpdate(props.item.id,-1)}> - </button>
  //     <h3>{props.item.number}</h3>
  //     <button onClick = {()=>props.hdlUpdate(props.item.id,1)}> + </button>
  //     <button onClick = {()=>props.hdlUpdate(props.item.id,-props.item.number)}> C </button>
  //  </div>
  );
}

function SumInfo({ sum }) {
  return (
    <div className='suminfo'>
      <h1>Sum = {sum}</h1>
    </div>
  );
}

function App() {
  const [counters, setCounters] = React.useState([{ id: 1, number: 0 }]);

  const hdlUpdate = (id, num) => {
    const cloneCounters = counters.map((counter) =>
      counter.id === id && counter.number + num >= 0
        ? { ...counter, number: counter.number + num }
        : counter
    );
    setCounters(cloneCounters);
  };

  const hdlAddCounter = () => {
    const newId = counters.length === 0 ? 1 : counters[counters.length - 1].id + 1;
    setCounters([...counters, { id: newId, number: 0 }]);
  };

  const hdlRemove = (id) => {
    const filteredCounters = counters.filter((counter) => counter.id !== id);
    setCounters(filteredCounters);
  };

  const sum = counters.reduce((acc, counter) => acc + counter.number, 0);

  return (
    <>
      <h1 className='text-center'>Codecamp Academy 01</h1>
      <button className='text-center' onClick={hdlAddCounter}>Add Counter</button>
      <SumInfo sum={sum} />
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          item={counter}
          hdlUpdate={hdlUpdate}
          hdlRemove={hdlRemove}
        />
      ))}
    </>
  );
}
