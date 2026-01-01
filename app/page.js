"use client";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const PHONE_E164 = "+18559761695";
const PHONE_DISPLAY = "(855) 976-1695";
const TEL_LINK = `tel:${PHONE_E164}`;

const SUPPORT_EMAIL = "CallReady.Live@google.com";
const MAILING_ADDRESS_LINES = ["1292 High St A3036", "Eugene, OR 97401"];

export default function Home() {
  return (
    <div className={inter.className}>
      <div className="container">
        <div className="nav">
          <div className="brand">
            <img
              src="/logo1.png"
              alt="CallReady"
              style={{ height: 150, width: "auto", display: "block" }}
            />
          </div>

          <div className="navLinks">
            <a href="#how">How it works</a>
            <a href="#why">Why CallReady</a>
            <a href="#safe">Safety</a>
            <a href="#about">About</a>
            <a href="#sms">Text messaging</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="navCta">
            <a className="btn btnSecondary" href="#how">
              Learn how it works
            </a>
            <a className="btn btnPrimary" href={TEL_LINK}>
              Call now
            </a>
          </div>
        </div>

        <div className="hero">
          <div className="heroCard">
            <div className="kicker">Low pressure practice</div>

            <h1 className="h1">Helping teens build phone confidence</h1>

            <p className="sub">
              CallReady helps teens and adults build phone confidence through guided practice calls
              and supportive feedback in a low-pressure environment. Practice is the point. Progress
              comes over time.
            </p>

            <div className="phoneBlock" id="call">
              <div>
                <div className="phoneLabel">Call this number to start a practice call</div>
                <a className="phoneNumber" href={TEL_LINK}>
                  {PHONE_DISPLAY}
                </a>
                <div className="miniNote">No signup to try it. Hang up anytime.</div>
              </div>

              <div className="phoneActions">
                <a className="btn btnPrimary" href={TEL_LINK}>
                  Call now
                </a>
                <a className="btn" href="#how">
                  What happens on the call
                </a>
              </div>
            </div>

            <div className="miniNote">
              Built for parents, teachers, and phone reluctant teens. Also helpful for adults
              preparing for interviews and important calls.
            </div>
          </div>

          <div className="heroRight" aria-label="Highlights">
            <div className="tile">
              <p className="tileTitle">Practice, not performance</p>
              <p className="tileText">
                A supportive space for repetition and preparation, at your own pace.
              </p>
            </div>
            <div className="tile">
              <p className="tileTitle">Guided scenarios</p>
              <p className="tileText">
                Practice common calls like appointments, questions, and follow-ups with gentle structure.
              </p>
            </div>
            <div className="tile">
              <p className="tileTitle">Confidence grows</p>
              <p className="tileText">
                Small wins add up. The goal is steady progress, not perfection.
              </p>
            </div>
          </div>
        </div>

        <div className="section" id="how">
          <div className="sectionTitle">How it works</div>

          <div className="grid3">
            <div className="feature">
              <div className="badge">1</div>
              <p className="tileTitle">Call the number</p>
              <p className="tileText">
                Tap to call on a phone. The call starts with a calm welcome and a simple choice.
              </p>
            </div>
            <div className="feature">
              <div className="badge">2</div>
              <p className="tileTitle">Choose a scenario</p>
              <p className="tileText">
                Pick what you want to practice. You can also say, “You choose.”
              </p>
            </div>
            <div className="feature">
              <div className="badge">3</div>
              <p className="tileTitle">Practice step by step</p>
              <p className="tileText">
                Try the call, pause when you need, and repeat until it feels easier.
              </p>
            </div>
          </div>
        </div>

        <div className="section" id="why">
          <div className="sectionTitle">Why CallReady</div>

          <div className="grid3">
            <div className="feature">
              <div className="badge">A</div>
              <p className="tileTitle">It feels real</p>
              <p className="tileText">
                Practicing on an actual phone call builds comfort faster than pretend practice.
              </p>
            </div>
            <div className="feature">
              <div className="badge">B</div>
              <p className="tileTitle">It is consistent</p>
              <p className="tileText">
                Same supportive structure each time, so callers know what to expect.
              </p>
            </div>
            <div className="feature">
              <div className="badge">C</div>
              <p className="tileTitle">It is low pressure</p>
              <p className="tileText">
                No judgment. No scoring. Just guided practice and encouragement.
              </p>
            </div>
          </div>
        </div>

        <div className="section" id="safe">
          <div className="sectionTitle">Safety and tone</div>

          <div className="grid3">
            <div className="feature">
              <div className="badge">I</div>
              <p className="tileTitle">Calm and respectful</p>
              <p className="tileText">
                Designed to reduce anxiety and support confidence through practice.
              </p>
            </div>
            <div className="feature">
              <div className="badge">II</div>
              <p className="tileTitle">Guided, not pushy</p>
              <p className="tileText">
                Clear steps and gentle prompts. The caller sets the pace.
              </p>
            </div>
            <div className="feature">
              <div className="badge">III</div>
              <p className="tileTitle">Practice first</p>
              <p className="tileText">
                The focus stays on preparation and repetition, not outcomes or pressure.
              </p>
            </div>
          </div>
        </div>

        <div className="section" id="about">
          <div className="sectionTitle">About CallReady</div>

          <p className="sub" style={{ marginBottom: 12 }}>
            CallReady is the brainchild of a high school English teacher in Oregon who noticed how
            fearful some students have become about making phone calls.
          </p>

          <div className="grid2">
            <div className="panel">
              <div className="panelTitle">Why phone calls still matter</div>
              <p className="tileText" style={{ marginBottom: 10 }}>
                Even in a high-tech, internet-connected world, some things still get accomplished
                faster, or only get accomplished at all, with a phone call.
              </p>
              <ul className="list">
                <li>Calling a doctor’s office to schedule an appointment</li>
                <li>Talking with a school office about attendance or records</li>
                <li>Following up with a business about a return or missing order</li>
                <li>Calling a landlord or property manager about a repair</li>
                <li>Confirming an interview time when email is too slow</li>
              </ul>
            </div>

            <div className="panel">
              <div className="panelTitle">Practice with zero embarrassment</div>
              <p className="tileText" style={{ marginBottom: 10 }}>
                With new possibilities available through AI, we can now practice making phone calls
                with zero risk of embarrassment or failure. You can repeat a scenario, pause when you
                need, and build confidence through calm repetition.
              </p>
              <ul className="list">
                <li>Low pressure practice, at your pace</li>
                <li>No scoring, no judgment, no shame</li>
                <li>Helpful prompts when you get stuck</li>
                <li>Supportive feedback that focuses on progress</li>
              </ul>
            </div>
          </div>

          <div className="miniNote" style={{ marginTop: 12 }}>
            CallReady is designed for teens, but it can also help adults preparing for interviews and
            other important conversations.
          </div>
        </div>

        <div className="section" id="sms">
          <div className="sectionTitle">Text messaging</div>

          <p className="sub" style={{ marginBottom: 12 }}>
            CallReady offers optional, low-frequency text messages to support practice. We use texting
            to help you stay on track, not to market to you.
          </p>

          <div className="grid2">
            <div className="panel">
              <div className="panelTitle">What texts may include</div>
              <ul className="list">
                <li>Account setup confirmations</li>
                <li>Practice reminders</li>
                <li>Practice prompts</li>
                <li>Links to start a practice call</li>
                <li>Optional feedback summaries</li>
                <li>Support messages if you request help</li>
              </ul>
            </div>

            <div className="panel">
              <div className="panelTitle">Frequency, STOP, and HELP</div>
              <ul className="list">
                <li>Message frequency: about 1 message per week</li>
                <li>Message and data rates may apply</li>
                <li>Reply STOP to unsubscribe</li>
                <li>Reply HELP for help</li>
              </ul>
            </div>
          </div>

          <div className="panel" style={{ marginTop: 12 }}>
            <div className="panelTitle">Consent and opt-in</div>
            <p className="tileText" style={{ marginBottom: 10 }}>
              If you choose to enable text messaging, you will be shown this consent statement:
            </p>
            <div className="quoteBox" aria-label="SMS consent text">
              By continuing, you agree to receive occasional text messages from CallReady related to
              your practice calls, reminders, and account support. Message frequency is about one per
              week. Message and data rates may apply. Reply STOP at any time to unsubscribe.
            </div>
          </div>

          <div className="panel" style={{ marginTop: 12 }}>
            <div className="panelTitle">Sample messages</div>
            <div className="samples">
              <div className="sample">
                Welcome to CallReady. You will receive occasional messages to support your practice calls and account activity.
                Reply STOP to unsubscribe. Message and data rates may apply.
              </div>
              <div className="sample">
                CallReady reminder: Your practice call is ready when you are. Start here: https://callready.live
              </div>
              <div className="sample">
                CallReady feedback is ready. View your summary here: https://callready.live
              </div>
              <div className="sample">
                CallReady help: This number sends practice reminders and account messages. For support, email {SUPPORT_EMAIL}.
                Reply STOP to unsubscribe.
              </div>
              <div className="sample">
                You have been unsubscribed from CallReady text messages. You will no longer receive messages.
              </div>
            </div>
          </div>
        </div>

        <div className="section" id="contact">
          <div className="sectionTitle">Contact</div>

          <div className="grid2">
            <div className="panel">
              <div className="panelTitle">Support</div>
              <p className="tileText" style={{ marginBottom: 8 }}>
                Email is the best way to reach us.
              </p>
              <div className="contactLine">
                <span className="contactLabel">Email:</span>{" "}
                <a className="contactLink" href={`mailto:${SUPPORT_EMAIL}`}>
                  {SUPPORT_EMAIL}
                </a>
              </div>
            </div>

            <div className="panel">
              <div className="panelTitle">Mailing address</div>
              <div className="tileText">
                {MAILING_ADDRESS_LINES.map((line) => (
                  <div key={line}>{line}</div>
                ))}
              </div>
            </div>
          </div>

          <div className="miniNote" style={{ marginTop: 12 }}>
            Legal pages:{" "}
            <a className="inlineLink" href="/privacy">
              Privacy Policy
            </a>
            {" · "}
            <a className="inlineLink" href="/terms">
              Terms and Conditions
            </a>
            {" · "}
            <a className="inlineLink" href="/sms">
              SMS Messaging Policy
            </a>
          </div>
        </div>

        <div className="footerCta">
          <div>
            <div className="sectionTitle" style={{ margin: 0 }}>
              Ready to try a practice call?
            </div>
            <div className="small">Tap to call. No signup to try it. Hang up anytime.</div>
          </div>

          <div className="footerActions">
            <a className="btn btnPrimary" href={TEL_LINK}>
              Call {PHONE_DISPLAY}
            </a>
            <a className="btn" href="#how">
              See how it works
            </a>
          </div>
        </div>

        <div className="legal small">
          CallReady is a practice tool. If you are in danger or need urgent help, contact local emergency services.
        </div>
      </div>

      <div className="stickyCall" role="region" aria-label="CallReady call now">
        <div className="stickyInner">
          <div>
            <div className="stickyBrand">CallReady</div>
            <div className="small">Tap to call {PHONE_DISPLAY}</div>
          </div>
          <a className="btn btnPrimary" href={TEL_LINK}>
            Call now
          </a>
        </div>
      </div>

      <style jsx>{`
        :root {
          --blue: #3a6f8f;
          --green: #6e8f7b;
          --accent: #9bbfa6;
          --text: #2f3a40;
          --bg: #f6f8f9;
          --card: #ffffff;
          --border: rgba(47, 58, 64, 0.12);
          --shadow: 0 12px 30px rgba(47, 58, 64, 0.12);
        }

        .container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 22px 18px 80px;
          color: var(--text);
          background: var(--bg);
        }

        .nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          padding: 8px 0 18px;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 12px;
          min-width: 210px;
        }

        .navLinks {
          display: flex;
          gap: 18px;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
        }

        .navLinks a {
          color: var(--text);
          text-decoration: none;
          font-size: 14px;
          opacity: 0.9;
        }

        .navLinks a:hover {
          opacity: 1;
          text-decoration: underline;
        }

        .navCta {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          justify-content: flex-end;
          min-width: 320px;
        }

        .hero {
          display: grid;
          grid-template-columns: 1.25fr 0.75fr;
          gap: 18px;
          align-items: stretch;
          margin-top: 10px;
        }

        .heroCard {
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: 18px;
          box-shadow: var(--shadow);
          padding: 22px;
        }

        .kicker {
          display: inline-block;
          background: rgba(110, 143, 123, 0.14);
          color: var(--green);
          border: 1px solid rgba(110, 143, 123, 0.25);
          padding: 6px 10px;
          border-radius: 999px;
          font-size: 13px;
          font-weight: 600;
          margin-bottom: 12px;
        }

        .h1 {
          font-size: 40px;
          line-height: 1.1;
          margin: 0 0 10px;
          color: var(--text);
        }

        .sub {
          font-size: 16px;
          line-height: 1.5;
          margin: 0 0 18px;
          opacity: 0.92;
        }

        .phoneBlock {
          display: flex;
          gap: 14px;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          background: rgba(58, 111, 143, 0.08);
          border: 1px solid rgba(58, 111, 143, 0.22);
          border-radius: 16px;
          padding: 16px;
          margin-bottom: 14px;
        }

        .phoneLabel {
          font-size: 13px;
          font-weight: 700;
          color: var(--blue);
          margin-bottom: 4px;
        }

        .phoneNumber {
          display: inline-block;
          font-size: 28px;
          font-weight: 800;
          color: var(--blue);
          text-decoration: none;
          letter-spacing: 0.2px;
          margin: 2px 0 2px;
        }

        .phoneNumber:hover {
          text-decoration: underline;
        }

        .phoneActions {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          align-items: center;
        }

        .miniNote {
          font-size: 13px;
          opacity: 0.8;
          line-height: 1.4;
        }

        .heroRight {
          display: grid;
          gap: 12px;
        }

        .tile {
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 14px;
          box-shadow: 0 10px 22px rgba(47, 58, 64, 0.08);
        }

        .tileTitle {
          font-size: 15px;
          font-weight: 800;
          margin: 0 0 6px;
          color: var(--text);
        }

        .tileText {
          margin: 0;
          font-size: 14px;
          line-height: 1.45;
          opacity: 0.9;
        }

        .section {
          margin-top: 26px;
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: 18px;
          padding: 18px;
          box-shadow: 0 10px 22px rgba(47, 58, 64, 0.08);
        }

        .sectionTitle {
          font-size: 18px;
          font-weight: 900;
          margin: 0 0 14px;
          color: var(--text);
        }

        .grid3 {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
        }

        .grid2 {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
        }

        .feature {
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 14px;
          background: rgba(155, 191, 166, 0.12);
        }

        .badge {
          width: 32px;
          height: 32px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          background: rgba(58, 111, 143, 0.14);
          border: 1px solid rgba(58, 111, 143, 0.25);
          color: var(--blue);
          font-weight: 900;
          margin-bottom: 10px;
          font-size: 13px;
        }

        .panel {
          background: #fff;
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 14px;
        }

        .panelTitle {
          font-weight: 900;
          font-size: 14px;
          margin-bottom: 10px;
        }

        .list {
          margin: 0;
          padding-left: 18px;
          font-size: 14px;
          line-height: 1.5;
          opacity: 0.9;
        }

        .list li {
          margin-bottom: 6px;
        }

        .quoteBox {
          border: 1px solid rgba(58, 111, 143, 0.25);
          background: rgba(58, 111, 143, 0.06);
          border-radius: 14px;
          padding: 12px;
          font-size: 14px;
          line-height: 1.5;
          opacity: 0.95;
        }

        .samples {
          display: grid;
          gap: 10px;
        }

        .sample {
          border: 1px solid var(--border);
          background: rgba(155, 191, 166, 0.09);
          border-radius: 14px;
          padding: 12px;
          font-size: 14px;
          line-height: 1.5;
          opacity: 0.95;
        }

        .contactLine {
          font-size: 14px;
          line-height: 1.5;
          opacity: 0.92;
        }

        .contactLabel {
          font-weight: 800;
        }

        .contactLink {
          color: var(--blue);
          text-decoration: none;
          font-weight: 800;
        }

        .contactLink:hover {
          text-decoration: underline;
        }

        .inlineLink {
          color: var(--blue);
          text-decoration: none;
          font-weight: 800;
        }

        .inlineLink:hover {
          text-decoration: underline;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 10px 14px;
          border-radius: 12px;
          border: 1px solid rgba(47, 58, 64, 0.18);
          text-decoration: none;
          color: var(--text);
          background: #fff;
          font-weight: 700;
          font-size: 14px;
          cursor: pointer;
        }

        .btn:hover {
          border-color: rgba(47, 58, 64, 0.28);
        }

        .btnPrimary {
          background: var(--blue);
          color: #fff;
          border-color: rgba(58, 111, 143, 0.35);
        }

        .btnPrimary:hover {
          filter: brightness(0.98);
        }

        .btnSecondary {
          background: rgba(110, 143, 123, 0.12);
          border-color: rgba(110, 143, 123, 0.3);
          color: var(--text);
        }

        .small {
          font-size: 13px;
          opacity: 0.85;
          line-height: 1.4;
        }

        .footerCta {
          margin-top: 26px;
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: 18px;
          padding: 18px;
          box-shadow: var(--shadow);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 14px;
          flex-wrap: wrap;
        }

        .footerActions {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          align-items: center;
        }

        .legal {
          padding-top: 16px;
          padding-bottom: 10px;
        }

        .stickyCall {
          position: fixed;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(246, 248, 249, 0.92);
          border-top: 1px solid rgba(47, 58, 64, 0.12);
          backdrop-filter: blur(8px);
          padding: 10px 12px;
        }

        .stickyInner {
          max-width: 1100px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }

        .stickyBrand {
          font-weight: 900;
          font-size: 14px;
        }

        @media (max-width: 960px) {
          .hero {
            grid-template-columns: 1fr;
          }

          .nav {
            flex-direction: column;
            align-items: stretch;
          }

          .brand {
            justify-content: center;
          }

          .navCta {
            justify-content: center;
            min-width: 0;
          }

          .navLinks {
            justify-content: center;
          }
        }

        @media (max-width: 860px) {
          .grid3 {
            grid-template-columns: 1fr;
          }

          .grid2 {
            grid-template-columns: 1fr;
          }

          .h1 {
            font-size: 34px;
          }

          .phoneNumber {
            font-size: 24px;
          }
        }

        @media (max-width: 420px) {
          .container {
            padding: 18px 14px 88px;
          }
        }
      `}</style>
    </div>
  );
}
