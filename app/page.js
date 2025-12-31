const PHONE_E164 = "+18559761695";
const PHONE_DISPLAY = "(855) 976-1695";
const TEL_LINK = `tel:${PHONE_E164}`;

export default function Home() {
  return (
    <div className="container">
      <div className="nav">
        <div className="brand">
          <img src="/logo1.png" alt="CallReady" className="logoImg" />
        </div>

        <div className="navCta">
          <a className="btn btnPrimary" href={TEL_LINK}>Call now</a>
        </div>
      </div>

      <div className="hero">
        <div className="heroCard">
          <div className="kicker">Low pressure practice</div>

          <h1 className="h1">Helping teens build phone confidence</h1>

          <p className="sub">
            CallReady gives teens a calm space to practice real phone calls with supportive guidance.
          </p>

          <div className="phoneBlock" id="call">
            <div className="phoneLabel">Call this number to start a practice call</div>
            <a className="phoneNumber" href={TEL_LINK}>{PHONE_DISPLAY}</a>
            <div className="miniNote">No signup to try it. Hang up anytime.</div>

            <div className="btnRow">
              <a className="btn btnPrimary" href={TEL_LINK}>Call now</a>
              <a className="btn" href="#how">How it works</a>
            </div>
          </div>
        </div>
      </div>

      <div className="section" id="how">
        <div className="sectionTitle">How it works</div>
        <div className="miniNote">Call the number, choose a scenario, practice step by step.</div>
      </div>

      <div className="stickyCall" role="region" aria-label="CallReady call now">
        <div className="stickyInner">
          <div>
            <div className="stickyBrand">CallReady</div>
            <div className="small">Tap to call {PHONE_DISPLAY}</div>
          </div>
          <a className="btn btnPrimary" href={TEL_LINK}>Call now</a>
        </div>
      </div>
    </div>
  );
}
