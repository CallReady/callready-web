const PHONE_E164 = "+18559761695";
const PHONE_DISPLAY = "(855) 976-1695";
const TEL_LINK = `tel:${PHONE_E164}`;

export default function Home() {
  return (
    <div>
      <div className="container">
        <div className="nav">
          <div className="brand">
            <img className="logoImg" src="/logo1.png" alt="CallReady logo" />
            <div className="brandName">CallReady</div>
          </div>

          <div className="navLinks">
            <a href="#how">How it works</a>
            <a href="#why">Why CallReady</a>
            <a href="#safe">Safety</a>
          </div>

          <div className="navCta">
            <a className="btn btnSecondary" href="#how">Learn how it works</a>
            <a className="btn btnPrimary" href={TEL_LINK}>Call now</a>
          </div>
        </div>

        <div className="hero">
          <div className="heroCard">
            <div className="kicker">Low pressure practice</div>

            <h1 className="h1">Helping teens build phone confidence</h1>

            <p className="sub">
              CallReady gives teens a calm space to practice real phone calls with supportive guidance.
              Practice is the point. Progress comes over time.
            </p>

            <div className="phoneBlock" id="call">
              <div>
                <div className="phoneLabel">Call this number to start a practice call</div>
                <a className="phoneNumber" href={TEL_LINK}>{PHONE_DISPLAY}</a>
                <div className="miniNote">No signup to try it. Hang up anytime.</div>
              </div>

              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                <a className="btn btnPrimary" href={TEL_LINK}>Call now</a>
                <a className="btn" href="#how">What happens on the call</a>
              </div>
            </div>

            <div className="mini
