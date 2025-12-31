export default function Home() {
  return (
    <>
      <header className="header">
        <div className="container headerInner">
          <div className="brand">
            <div
              aria-hidden="true"
              style={{
                width: 34,
                height: 34,
                borderRadius: 12,
                background: "rgba(58,111,143,0.14)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--blue)",
                fontWeight: 800,
              }}
            >
              C
            </div>
            <span>CallReady</span>
          </div>

          <nav className="nav" aria-label="Primary">
            <a href="#home">Home</a>
            <a href="#program">Our Program</a>
            <a href="#resources">Resources</a>
            <a href="#contact">Contact</a>
          </nav>

          <a className="btn btnPrimary" href="#get-started">Get Started</a>
        </div>
      </header>

      <main id="home">
        <section className="hero">
          <div className="container heroGrid">
            <div>
              <h1 className="h1">Helping teens build phone confidence</h1>
              <p className="sub">
                CallReady gives teens a calm space to practice phone calls with guided support.
                Practice makes calling easier. Support keeps practice low pressure.
              </p>

              <div className="heroActions" id="get-started">
                <a className="btn btnPrimary" href="#program">Get Started</a>
                <a className="btn btnSecondary" href="#resources">See how it works</a>
              </div>

              <div className="trust">Built for parents and teachers. Designed to feel safe for teens.</div>
            </div>

            <div className="heroCard" aria-label="Hero illustration">
              <div className="heroArt">
                <div style={{ textAlign: "center", maxWidth: 340 }}>
                  <div style={{ fontSize: 14, color: "rgba(47,58,64,0.75)", marginBottom: 10 }}>
                    Drop your hero image in /public and swap this placeholder.
                  </div>
                  <div style={{ fontSize: 12, color: "rgba(47,58,64,0.6)" }}>
                    Example: /public/hero.png then use it here.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="program">
          <div className="container">
            <h2 className="sectionTitle">A safe space to practice calling</h2>

            <div className="cards">
              <div className="card">
                <div className="cardIcon">1</div>
                <h3 className="cardTitle">Build confidence</h3>
                <p className="cardText">
                  Practice calls without pressure, at your own pace, with clear steps and gentle structure.
                </p>
              </div>

              <div className="card">
                <div className="cardIcon">2</div>
                <h3 className="cardTitle">Supportive guidance</h3>
                <p className="cardText">
                  Get prompts that keep the call moving and help teens feel prepared, not evaluated.
                </p>
              </div>

              <div className="card">
                <div className="cardIcon">3</div>
                <h3 className="cardTitle">Progress over time</h3>
                <p className="cardText">
                  Repeat scenarios, build comfort, and focus on steady improvement without urgency.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="resources">
          <div className="container split">
            <div>
              <h2 className="sectionTitle">Why CallReady?</h2>
              <p className="sub" style={{ marginBottom: 14 }}>
                Many teens can write a message easily but freeze on a phone call. CallReady offers guided practice that
                reduces anxiety and builds confidence through repetition.
              </p>
              <p className="sub" style={{ marginBottom: 0 }}>
                It is practice-first, calm, and supportive, built for real phone calls, not just voice chat.
              </p>

              <div className="heroActions" style={{ marginTop: 16 }}>
                <a className="btn btnPrimary" href="#contact">Get started</a>
                <a className="btn btnSecondary" href="#program">View the program</a>
              </div>
            </div>

            <div className="photo" aria-label="Parent and teen image placeholder">
              Add an image later (parent and teen), or keep this clean placeholder for now.
            </div>
          </div>
        </section>

        <section className="section" id="contact">
          <div className="container">
            <h2 className="sectionTitle">Contact</h2>
            <p className="sub" style={{ marginBottom: 0 }}>
              For now, this can be a simple email link. Later we will replace it with sign-up and payments.
            </p>
            <div className="heroActions" style={{ marginTop: 14 }}>
              <a className="btn btnPrimary" href="mailto:hello@callready.live">Email us</a>
              <a className="btn btnSecondary" href="#home">Back to top</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          © {new Date().getFullYear()} CallReady. Calm practice. Real progress.
        </div>
      </footer>
    </>
  );
}
