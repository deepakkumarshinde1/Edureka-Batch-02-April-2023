function Home() {
  return (
    <>
      <section className="row main-section align-content-start">
        <header className="col-12 py-3">
          <div className="container d-lg-flex justify-content-end d-none">
            <button className="btn text-white me-3">Login</button>
            <button className="btn text-white border border-white">
              Create an account
            </button>
          </div>
        </header>
        <section className="col-12 d-flex flex-column align-items-center justify-content-center">
          <p className="brand-name fw-bold my-lg-2 mb-0">e!</p>
          <p className="h1 text-white my-3 text-center">
            Find the best restaurants, cafés, and bars
          </p>
          <div className="search w-50 d-flex mt-3">
            <input
              type="text"
              className="form-control mb-3 mb-lg-0 w-50 me-lg-3 py-2 px-3"
              placeholder="Please type a location"
            />
            <div className="w-75 input-group">
              <span className="input-group-text bg-white">
                <i className="fa fa-search text-primary"></i>
              </span>
              <input
                type="text"
                className="form-control py-2 px-3"
                placeholder="Search for restaurants"
              />
            </div>
          </div>
        </section>
      </section>
      <section className="row justify-content-center">
        <section className="col-10 mt-3">
          <h3 className="fw-bold text-navy">Quick Searches</h3>
          <p className="text-secondary">Discover restaurants by Searches</p>
        </section>
        <section className="col-10">
          <section className="row py-2">
            <section className="col-12 px-0 d-flex justify-content-between flex-wrap">
              <section className="px-0 d-flex border border-1 quick-search-item">
                <img
                  src="/images/search-item.png"
                  alt=""
                  className="image-item"
                />
                <div className="pt-3 px-2">
                  <h4 className="text-navy">Breakfast</h4>
                  <p className="small text-muted">
                    Start your day with exclusive breakfast options
                  </p>
                </div>
              </section>

              <section className="px-0 d-flex border border-1 quick-search-item">
                <img
                  src="/images/search-item.png"
                  alt=""
                  className="image-item"
                />
                <div className="pt-3 px-2">
                  <h4 className="text-navy">Breakfast</h4>
                  <p className="small text-muted">
                    Start your day with exclusive breakfast options
                  </p>
                </div>
              </section>
              <section className="px-0 d-flex border border-1 quick-search-item">
                <img
                  src="/images/search-item.png"
                  alt=""
                  className="image-item"
                />
                <div className="pt-3 px-2">
                  <h4 className="text-navy">Breakfast</h4>
                  <p className="small text-muted">
                    Start your day with exclusive breakfast options
                  </p>
                </div>
              </section>
              <section className="px-0 d-flex border border-1 quick-search-item">
                <img
                  src="/images/search-item.png"
                  alt=""
                  className="image-item"
                />
                <div className="pt-3 px-2">
                  <h4 className="text-navy">Breakfast</h4>
                  <p className="small text-muted">
                    Start your day with exclusive breakfast options
                  </p>
                </div>
              </section>

              <section className="px-0 d-flex border border-1 quick-search-item">
                <img
                  src="/images/search-item.png"
                  alt=""
                  className="image-item"
                />
                <div className="pt-3 px-2">
                  <h4 className="text-navy">Breakfast</h4>
                  <p className="small text-muted">
                    Start your day with exclusive breakfast options
                  </p>
                </div>
              </section>
              <section className="px-0 d-flex border border-1 quick-search-item">
                <img
                  src="/images/search-item.png"
                  alt=""
                  className="image-item"
                />
                <div className="pt-3 px-2">
                  <h4 className="text-navy">Breakfast</h4>
                  <p className="small text-muted">
                    Start your day with exclusive breakfast options
                  </p>
                </div>
              </section>
            </section>
          </section>
        </section>
      </section>
    </>
  );
}

export default Home;
