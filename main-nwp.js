const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App/>)

function Counter({ onRemove }) {
  const [countNum, setCountNum] = React.useState(0)
  const [title, setTitle] = React.useState("CCAC")

  const updateCounter = (n) => {
    if(countNum+n < 0) {
      return
    }
    // setCountNum( (prv)=>{
    //   console.log(prv)
    //   return prv+n
    // })
    // setCountNum( prv => prv + n)
    // console.log(countNum)
    setCountNum(countNum + n)
  }
  return (
   <div className='counter'>
      <button onClick = {()=>updateCounter(-1)}> - </button>
      <h3>{countNum}</h3>
      <button onClick = {()=>updateCounter(1)}> + </button>
      <button onClick = {()=>updateCounter(-countNum)}> C </button>
      <button onClick={onRemove}> X </button>
   </div>
  )
}

function SumInfo(props)  {
  console.log(props)
  const stTitle = {
    color : props.color,
    fontSize : props.size==='big' ? '50px' : '40px'
  }
  return (
    <div className='suminfo'>
      {/* <h1 style={stTitle}>Sum = 0</h1> */}
      <h1 style={ { color: props.color, fontSize: '50px' } }>Sum = 0</h1>
    </div>
  )
}

function App() {
    const [counters, setCounters] = React.useState([0])
  
    const addCounter = () => {
      setCounters(prevCounters => [...prevCounters, 0])
    }
  
    const removeCounter = (index) => {
      setCounters(prevCounters => {
        const updatedCounters = [...prevCounters]
        updatedCounters.splice(index, 1)
        return updatedCounters
      })
    }
  
    return (
      <>
        <h1 className='text-center'>Codecamp Academy 01</h1>
        <button className='text-center' onClick={addCounter}>Add Counter</button>
        <SumInfo color="red" size="big" />
        {counters.map((_, index) => (
          <Counter key={index} onRemove={() => removeCounter(index)} />
        ))}
      </>
    )
  }