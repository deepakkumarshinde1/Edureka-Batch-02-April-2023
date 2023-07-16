import Counter from "./components/Counter";

function App() {
  return (
    <>
      <section className="container-fluid">
        <section className="row">
          <section className="col-6 m-auto">
            <h1 className="text-center text-primary">Counter App</h1>
            <Counter start={10} />
            <Counter start={20} />
            <Counter start={30} />
            <Counter start={40} />
          </section>
        </section>
      </section>
    </>
  );
}

// es5
// module.exports = App

export default App;
