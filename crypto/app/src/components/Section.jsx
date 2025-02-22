const Section = () => {
  return (
    <div
      style={{
        height: "500px",
        width: "100%",

        marginTop: "50px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div
        style={{
          height: "95%",
          width: "40%",

          display: "flex",
          flexDirection: "column",
          fontFamily: "Arial",
          gap: "5px",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "10%",
            fontSize: "20px",
            marginTop: "50px",
          }}
        >
          CRYPTO PLATFORM
        </div>
        <div
          style={{
            width: "100%",
            height: "40%",
            fontSize: "68px",
            fontWeight: "bolder",
          }}
        >
          Crypto Trade Agency
        </div>
        <div
          style={{
            width: "100%",
            height: "10%",
            fontSize: "20px",
            color: "grey",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod
          tempor incididunt labore dolore magna aliqua.
        </div>
        <div>
          <button
            style={{
              width: "150px",
              height: "45px",
              fontSize: "20px",
              color: "white",
              backgroundColor: "blueviolet",
              borderRadius: "30px",
              border: "none",
              marginLeft: "5px",
              marginTop: "20px",
            }}
          >
            Get Started
          </button>
        </div>
      </div>
      <div
        style={{
          height: "95%",
          width: "49%",
          backgroundColor: "white",
          borderRadius: "10px",
        }}
      >
        <img
          src="https://mobirise.com/extensions/cryptom5/trade-agency/assets/images/features4.jpg"
          alt=""
          style={{ width: "100%", height: "100%", borderRadius: "35px" }}
        />
      </div>
    </div>
  );
};

export default Section;
