function App() {
  return (
    <>
      <div
        style={{
          background: "#f3e5d8",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "750px",
            marginTop: "50px",
            background: "#fff",
            borderRadius: "20px",
          }}
        >
          {/* ca va etre le premier component*/}

          <img
            style={{
              width: "95%",
              height: "350px",
              margin: "20px auto",
              borderRadius: "20px",
              display: "block",
            }}
            src="./image-omelette.jpeg"
            alt=""
          />
          <h1 style={{ marginLeft: "20px" }}>Simple Omelette Recipe</h1>
          <p style={{ width: "95%", margin: "20px auto" }}>
            An easy and quick dish, perfect for any meal.This classic omelette
            combines beaten eggs cooked to perfection, optionnally filled width
            your choice of cheese , vegetables or meats
          </p>
          {/*ca sera le second component*/}
          <div
            style={{
              background: "#fff7fc",
              margin: "20px auto",
              width: "95%",
              borderRadius: "20px",
            }}
          >
            <h3
              style={{
                marginLeft: "20px",
                paddingTop: "20px",
                color: "#692c45",
              }}
            >
              Preparation time
            </h3>
            <ul style={{ paddingBottom: "20px" }}>
              <li>
                <span style={{ fontWeight: "bold" }}>Total : </span>
                Approximately 10 minutes
              </li>
              <li>
                <span style={{ fontWeight: "bold" }}>Preparation : </span>5
                minutes
              </li>
              <li>
                <span style={{ fontWeight: "bold" }}>Cooking : </span> 5 minutes
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
