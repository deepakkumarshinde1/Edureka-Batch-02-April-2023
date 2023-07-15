function App() {
  const getPop = () => {
    alert("Hi");
  };
  return (
    <>
      <button onClick={getPop} className="btn btn-success">
        CLICK
      </button>
    </>
  );
}

// es5
// module.exports = App

export default App;
