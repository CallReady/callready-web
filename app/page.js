const PHONE_E164 = "+18559761695";
const PHONE_DISPLAY = "(855) 976-1695";
const TEL_LINK = `tel:${PHONE_E164}`;

export default function Home() {
  return (
    <div>
      <div className="container">
        <div className="nav">
          <div className="brand">
            <img
              src="/logo1.png"
              alt="CallReady logo"
              style={{ height: 150, width: "auto", display: "block" }}
            />
            </div>
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

            <div className="miniNote">
              Built for parents, teachers, and phone reluctant teens. Calm, guided, and respectful.
            </div>
          </div>

          <div className="heroRight" aria-label="Highlights">
            <div className="tile">
              <p className="tileTitle">Practice, not performance</p>
              <p className="tileText">A supportive space for repetition and preparation, at your own pace.</p>
            </div>
            <div className="tile">
              <p className="tileTitle">Guided scenarios</p>
              <p className="tileText">Practice common calls like appointments, questions, and follow-ups with gentle structure.</p>
            </div>
            <div className="tile">
              <p className="tileTitle">Confidence grows</p>
              <p className="tileText">Small wins add up. The goal is steady progress, not perfection.</p>
            </div>
          </div>
        </div>

        <div className="section" id="how">
          <div className="sectionTitle">How it works</div>

          <div className="grid3">
            <div className="feature">
              <div className="badge">1</div>
              <p className="tileTitle">Call the number</p>
              <p className="tileText">Tap to call on a phone. The call starts with a calm welcome and a simple choice.</p>
            </div>
            <div className="feature">
              <div className="badge">2</div>
              <p className="tileTitle">Choose a scenario</p>
              <p className="tileText">Pick what you want to practice. You can also say, “You choose.”</p>
            </div>
            <div className="feature">
              <div className="badge">3</div>
              <p className="tileTitle">Practice step by step</p>
              <p className="tileText">Try the call, pause when you need, and repeat until it feels easier.</p>
            </div>
          </div>
        </div>

        <div className="section" id="why">
          <div className="sectionTitle">Why CallReady</div>

          <div className="grid3">
            <div className="feature">
              <div className="badge">A</div>
              <p className="tileTitle">It feels real</p>
              <p className="tileText">Practicing on an actual phone call builds comfort faster than “pretend practice.”</p>
            </div>
            <div className="feature">
              <div className="badge">B</div>
              <p className="tileTitle">It is consistent</p>
              <p className="tileText">Same supportive structure each time, so teens know what to expect.</p>
            </div>
            <div className="feature">
              <div className="badge">C</div>
              <p className="tileTitle">It is low pressure</p>
              <p className="tileText">No judgment. No scoring. Just guided practice and encouragement.</p>
            </div>
          </div>
        </div>

        <div className="section" id="safe">
          <div className="sectionTitle">Safety and tone</div>

          <div className="grid3">
            <div className="feature">
              <div className="badge">S</div>
              <p className="tileTitle">Calm and respectful</p>
              <p className="tileText">Designed to reduce anxiety and support confidence through practice.</p>
            </div>
            <div className="feature">
              <div className="badge">G</div>
              <p className="tileTitle">Guided, not pushy</p>
              <p className="tileText">Clear steps and gentle prompts. The teen sets the pace.</p>
            </div>
            <div className="feature">
              <div className="badge">P</div>
              <p className="tileTitle">Practice first</p>
              <p className="tileText">The focus stays on preparation and repetition, not outcomes or pressure.</p>
            </div>
          </div>
        </div>

        <div className="footerCta">
          <div>
            <div className="sectionTitle" style={{ margin: 0 }}>Ready to try a practice call?</div>
            <div className="small">Tap to call. No signup to try it. Hang up anytime.</div>
          </div>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }}>
            <a className="btn btnPrimary" href={TEL_LINK}>Call {PHONE_DISPLAY}</a>
            <a className="btn" href="#how">See how it works</a>
          </div>
        </div>

        <div style={{ paddingBottom: 70 }} className="small">
          CallReady is a practice tool. If you are in danger or need urgent help, contact local emergency services.
        </div>
      </div>

      <div className="stickyCall" role="region" aria-label="CallReady call now">
        <div className="stickyInner">
          <div>
            <div style={{ fontWeight: 800, fontSize: 14 }}>CallReady</div>
            <div className="small">Tap to call {PHONE_DISPLAY}</div>
          </div>
          <a className="btn btnPrimary" href={TEL_LINK}>Call now</a>
        </div>
      </div>
    </div>
  );
}
