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
// Keeping this available, but not shown by default for privacy and focus.
// If you truly need it displayed, set SHOW_MAILING_ADDRESS = true.
const MAILING_ADDRESS_LINES = ["1292 High St A3036", "Eugene, OR 97401"];
const SHOW_MAILING_ADDRESS = false;

export default function Home() {
  return (
    <div className={inter.className}>
      <div className="pageBg">
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
              <a href="#hear">What you will hear</a>
              <a href="#scenarios">Scenarios</a>
              <a href="#why">Why CallReady</a>
              <a href="#safe">Safety</a>
              <a href="#parents">Parents and teachers</a>
              <a href="#about">About</a>
              <a href="#sms">Text messaging</a>
              <a href="#faq">FAQ</a>
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

              <h1 className="h1">Helping teens build phone confidence through guided practice calls</h1>

              <p className="sub">
                CallReady is a calm, low pressure way to practice real phone calls with supportive
                guidance. No signup to try it. Hang up anytime.
              </p>

              <div className="heroMeta">
                Built for parents, teachers, and phone reluctant teens. Also useful for adults
                prepping for interviews and important calls.
              </div>

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
                    See how it works
                  </a>
                </div>
              </div>

              <div className="exampleCall">
                Try a quick practice call like scheduling a doctor appointment, calling a school
                office, or following up on a missing order.
              </div>
            </div>

            <div className="heroRight" aria-label="Highlights">
              <div className="tile tileBlue">
                <p className="tileTitle">Practice, not performance</p>
                <p className="tileText">A supportive space for repetition and preparation, at your own pace.</p>
              </div>
              <div className="tile tileGreen">
                <p className="tileTitle">Guided scenarios</p>
                <p className="tileText">Practice common calls with simple structure and gentle coaching.</p>
              </div>
              <div className="tile tileAccent">
                <p className="tileTitle">Hang up anytime</p>
                <p className="tileText">No pressure. No scoring. You can end the call whenever you want.</p>
              </div>
            </div>
          </div>

          <div className="section sectionSoftBlue" id="how">
            <div className="sectionTitle">How it works</div>

            <div className="grid3">
              <div className="feature featureBlue">
                <div className="badge">1</div>
                <p className="tileTitle">Call the number</p>
                <p className="tileText">
                  Tap to call on a phone. The call starts with a calm welcome and a simple choice.
                </p>
              </div>
              <div className="feature featureGreen">
                <div className="badge">2</div>
                <p className="tileTitle">Choose a scenario</p>
                <p className="tileText">Pick what you want to practice. You can also say, “You choose.”</p>
              </div>
              <div className="feature featureAccent">
                <div className="badge">3</div>
                <p className="tileTitle">Practice step by step</p>
                <p className="tileText">
                  Try the call, pause when you need, and repeat until it feels easier.
                </p>
              </div>
            </div>
          </div>

          <div className="section sectionSoftGreen" id="hear">
            <div className="sectionTitle">What you will hear</div>

            <div className="grid2">
              <div className="panel panelTintBlue">
                <div className="panelTitle">A simple, calm flow</div>
                <ul className="list">
                  <li>A calm welcome and a simple choice of scenarios</li>
                  <li>A short prompt to start the call</li>
                  <li>Gentle coaching if you get stuck</li>
                  <li>A chance to repeat the same scenario until it feels easier</li>
                </ul>
              </div>

              <div className="panel panelTintGreen">
                <div className="panelTitle">If you blank out, that is normal</div>
                <p className="tileText" style={{ marginBottom: 10 }}>
                  CallReady can help you restart with a simple next line. The goal is to reduce the
                  fear of getting stuck, so you can practice again tomorrow.
                </p>
                <div className="miniNote">
                  You can ask for a restart at any time, or just hang up and try again later.
                </div>
              </div>
            </div>
          </div>

          <div className="section sectionSoftAccent" id="scenarios">
            <div className="sectionTitle">Scenarios people can practice</div>

            <div className="grid3">
              <div className="scenarioCard">
                <div className="scenarioTop">
                  <div className="scenarioBadge">Doctor</div>
                  <div className="scenarioTitle">Appointment request</div>
                </div>
                <div className="tileText">Scheduling a doctor or dentist appointment.</div>
              </div>

              <div className="scenarioCard">
                <div className="scenarioTop">
                  <div className="scenarioBadge">School</div>
                  <div className="scenarioTitle">Office call</div>
                </div>
                <div className="tileText">Attendance, records, schedule questions.</div>
              </div>

              <div className="scenarioCard">
                <div className="scenarioTop">
                  <div className="scenarioBadge">Work</div>
                  <div className="scenarioTitle">Interview follow up</div>
                </div>
                <div className="tileText">Confirming an interview time, following up after applying.</div>
              </div>

              <div className="scenarioCard">
                <div className="scenarioTop">
                  <div className="scenarioBadge">Customer</div>
                  <div className="scenarioTitle">Return or refund</div>
                </div>
                <div className="tileText">Return, refund, missing package, order issue.</div>
              </div>

              <div className="scenarioCard">
                <div className="scenarioTop">
                  <div className="scenarioBadge">Home</div>
                  <div className="scenarioTitle">Repair request</div>
                </div>
                <div className="tileText">Calling a landlord or property manager about a repair.</div>
              </div>

              <div className="scenarioCard">
                <div className="scenarioTop">
                  <div className="scenarioBadge">Wild card</div>
                  <div className="scenarioTitle">You choose</div>
                </div>
                <div className="tileText">Let CallReady pick, or practice your own scenario.</div>
              </div>
            </div>

            <div className="miniNote" style={{ marginTop: 12 }}>
              Tip: start with the same scenario for a week. Repetition lowers anxiety.
            </div>
          </div>

          <div className="section sectionSoftBlue" id="why">
            <div className="sectionTitle">Why CallReady</div>

            <div className="grid3">
              <div className="feature featureBlue">
                <div className="badge">A</div>
                <p className="tileTitle">It feels real</p>
                <p className="tileText">
                  Practicing on an actual phone call builds comfort faster than pretend practice.
                </p>
              </div>
              <div className="feature featureGreen">
                <div className="badge">B</div>
                <p className="tileTitle">It is consistent</p>
                <p className="tileText">
                  Same supportive structure each time, so callers know what to expect.
                </p>
              </div>
              <div className="feature featureAccent">
                <div className="badge">C</div>
                <p className="tileTitle">It is low pressure</p>
                <p className="tileText">No judgment. No scoring. Just guided practice and encouragement.</p>
              </div>
            </div>
          </div>

          <div className="section sectionSoftGreen" id="safe">
            <div className="sectionTitle">Safety and tone</div>

            <div className="grid3">
              <div className="feature featureGreen">
                <div className="badge">I</div>
                <p className="tileTitle">Calm and respectful</p>
                <p className="tileText">
                  Designed to reduce anxiety and support confidence through practice.
                </p>
              </div>
              <div className="feature featureBlue">
                <div className="badge">II</div>
                <p className="tileTitle">Guided, not pushy</p>
                <p className="tileText">Clear steps and gentle prompts. The caller sets the pace.</p>
              </div>
              <div className="feature featureAccent">
                <div className="badge">III</div>
                <p className="tileTitle">Practice first</p>
                <p className="tileText">
                  The focus stays on preparation and repetition, not outcomes or pressure.
                </p>
              </div>
            </div>

            <div className="calloutRow">
              <div className="callout">
                CallReady is a practice tool. If you are in danger or need urgent help, contact local
                emergency services.
              </div>
            </div>
          </div>

          <div className="section sectionSoftAccent" id="parents">
            <div className="sectionTitle">For parents and teachers</div>

            <div className="grid2">
              <div className="panel panelTintGreen">
                <div className="panelTitle">A simple weekly routine</div>
                <ul className="list">
                  <li>Short, repeatable practice, 3 to 5 minutes counts</li>
                  <li>Start with the same scenario for a week</li>
                  <li>Practice a script, then practice without the script</li>
                  <li>Celebrate “showed up and tried” as the win</li>
                </ul>
              </div>

              <div className="panel panelTintBlue">
                <div className="panelTitle">Why this works</div>
                <p className="tileText" style={{ marginBottom: 10 }}>
                  Anxiety often shrinks with repetition. CallReady supports repeated exposure in a
                  calm setting, without embarrassment, pressure, or judgment.
                </p>
                <div className="miniNote">
                  If you want, you can stand nearby for support, then step back as confidence builds.
                </div>
              </div>
            </div>
          </div>

          <div className="section sectionSoftBlue" id="about">
            <div className="sectionTitle">About CallReady</div>

            <div className="aboutLead">
              CallReady is the brainchild of a high school English teacher in Oregon who noticed how
              fearful some students have become about making phone calls.
            </div>

            <div className="grid2">
              <div className="panel panelTintBlue">
                <div className="panelTitle">Why phone calls still matter</div>
                <p className="tileText" style={{ marginBottom: 10 }}>
                  Even in a high tech, internet connected world, some things still get accomplished
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

              <div className="panel panelTintGreen">
                <div className="panelTitle">Practice with zero embarrassment</div>
                <p className="tileText" style={{ marginBottom: 10 }}>
                  With new possibilities available through AI, you can practice making phone calls
                  with zero risk of embarrassment. Repeat a scenario, pause when you need, and build
                  confidence through calm repetition.
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

          <div className="section sectionSoftGreen" id="sms">
            <div className="sectionTitle">Text messaging</div>

            <p className="sub" style={{ marginBottom: 12 }}>
              CallReady offers optional, low frequency text messages to support practice. We use
              texting to help you stay on track, not to market to you.
            </p>

            <div className="panel panelTintBlue" style={{ marginBottom: 12 }}>
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

            <div className="grid2">
              <div className="panel panelTintGreen">
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

              <div className="panel panelTintAccent">
                <div className="panelTitle">Frequency, STOP, and HELP</div>
                <ul className="list">
                  <li>Message frequency: about 1 message per week</li>
                  <li>Message and data rates may apply</li>
                  <li>Reply STOP to unsubscribe</li>
                  <li>Reply HELP for help</li>
                </ul>
              </div>
            </div>

            <div className="panel panelTintBlue" style={{ marginTop: 12 }}>
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

          <div className="section sectionSoftAccent" id="faq">
            <div className="sectionTitle">FAQ</div>

            <div className="grid2">
              <div className="panel panelTintBlue">
                <div className="panelTitle">Is this free?</div>
                <p className="tileText">
                  Right now, you can try it by calling the number. If pricing changes later, this page
                  will be updated.
                </p>
              </div>

              <div className="panel panelTintGreen">
                <div className="panelTitle">Does it feel like a real call?</div>
                <p className="tileText">
                  Yes. It is a real phone call, but the other side is guided practice, not a real business.
                </p>
              </div>

              <div className="panel panelTintAccent">
                <div className="panelTitle">What if I get nervous or blank?</div>
                <p className="tileText">
                  That is expected. The prompts are designed to help you restart with a simple next line.
                </p>
              </div>

              <div className="panel panelTintBlue">
                <div className="panelTitle">Can I stop anytime?</div>
                <p className="tileText">Yes. You can hang up anytime.</p>
              </div>

              <div className="panel panelTintGreen">
                <div className="panelTitle">Is it for teens only?</div>
                <p className="tileText">
                  It is designed for teens, but adults use it for interviews and important calls too.
                </p>
              </div>

              <div className="panel panelTintAccent">
                <div className="panelTitle">Do I need to create an account?</div>
                <p className="tileText">No. There is no signup required to try a practice call.</p>
              </div>
            </div>
          </div>

          <div className="section sectionSoftBlue" id="contact">
            <div className="sectionTitle">Contact</div>

            <div className="grid2">
              <div className="panel panelTintGreen">
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

              <div className="panel panelTintBlue">
                <div className="panelTitle">Legal</div>
                <div className="tileText" style={{ marginBottom: 10 }}>
                  Privacy and messaging details.
                </div>
                <div className="legalLinks">
                  <a className="inlineLink" href="/privacy">
                    Privacy Policy
                  </a>
                  <a className="inlineLink" href="/terms">
                    Terms and Conditions
                  </a>
                  <a className="inlineLink" href="/sms">
                    SMS Messaging Policy
                  </a>
                </div>

                {SHOW_MAILING_ADDRESS ? (
                  <div className="mailingBox" aria-label="Mailing address">
                    <div className="panelTitle" style={{ marginTop: 14 }}>Mailing address</div>
                    <div className="tileText">
                      {MAILING_ADDRESS_LINES.map((line) => (
                        <div key={line}>{line}</div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="miniNote" style={{ marginTop: 12 }}>
                    Mailing address is available upon request.
                  </div>
                )}
              </div>
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

          --softBlue: rgba(58, 111, 143, 0.08);
          --softGreen: rgba(110, 143, 123, 0.10);
          --softAccent: rgba(155, 191, 166, 0.14);

          --tileBlue: rgba(58, 111, 143, 0.10);
          --tileGreen: rgba(110, 143, 123, 0.11);
          --tileAccent: rgba(155, 191, 166, 0.16);
        }

        .pageBg {
          background:
            radial-gradient(900px 600px at 10% 0%, rgba(58, 111, 143, 0.14), transparent 55%),
            radial-gradient(900px 600px at 90% 10%, rgba(110, 143, 123, 0.14), transparent 55%),
            radial-gradient(900px 600px at 50% 90%, rgba(155, 191, 166, 0.18), transparent 55%),
            var(--bg);
          min-height: 100vh;
        }

        .container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 22px 18px 110px;
          color: var(--text);
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
          gap: 14px;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          padding: 8px 10px;
          border: 1px solid var(--border);
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(6px);
        }

        .navLinks a {
          color: var(--text);
          text-decoration: none;
          font-size: 13px;
          opacity: 0.9;
          font-weight: 600;
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
          background: rgba(255, 255, 255, 0.82);
          border: 1px solid var(--border);
          border-radius: 18px;
          box-shadow: var(--shadow);
          padding: 22px;
          backdrop-filter: blur(8px);
        }

        .kicker {
          display: inline-block;
          background: rgba(110, 143, 123, 0.14);
          color: var(--green);
          border: 1px solid rgba(110, 143, 123, 0.25);
          padding: 6px 10px;
          border-radius: 999px;
          font-size: 13px;
          font-weight: 700;
          margin-bottom: 12px;
        }

        .h1 {
          font-size: 38px;
          line-height: 1.1;
          margin: 0 0 10px;
          color: var(--text);
        }

        .sub {
          font-size: 16px;
          line-height: 1.5;
          margin: 0 0 14px;
          opacity: 0.92;
        }

        .heroMeta {
          margin: 0 0 14px;
          padding: 12px 12px;
          border-radius: 14px;
          border: 1px solid rgba(47, 58, 64, 0.10);
          background: rgba(155, 191, 166, 0.12);
          font-size: 13px;
          line-height: 1.45;
          opacity: 0.92;
        }

        .phoneBlock {
          display: flex;
          gap: 14px;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          background: rgba(58, 111, 143, 0.10);
          border: 1px solid rgba(58, 111, 143, 0.22);
          border-radius: 16px;
          padding: 16px;
          margin-bottom: 12px;
        }

        .phoneLabel {
          font-size: 13px;
          font-weight: 800;
          color: var(--blue);
          margin-bottom: 4px;
        }

        .phoneNumber {
          display: inline-block;
          font-size: 28px;
          font-weight: 900;
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
          opacity: 0.82;
          line-height: 1.4;
        }

        .exampleCall {
          margin-top: 10px;
          padding: 12px 12px;
          border-radius: 14px;
          border: 1px solid rgba(110, 143, 123, 0.22);
          background: rgba(110, 143, 123, 0.10);
          font-size: 14px;
          line-height: 1.45;
          opacity: 0.92;
        }

        .heroRight {
          display: grid;
          gap: 12px;
        }

        .tile {
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 14px;
          box-shadow: 0 10px 22px rgba(47, 58, 64, 0.08);
          background: rgba(255, 255, 255, 0.82);
          backdrop-filter: blur(8px);
        }

        .tileBlue {
          background: rgba(58, 111, 143, 0.12);
        }

        .tileGreen {
          background: rgba(110, 143, 123, 0.12);
        }

        .tileAccent {
          background: rgba(155, 191, 166, 0.16);
        }

        .tileTitle {
          font-size: 15px;
          font-weight: 900;
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
          margin-top: 18px;
          border: 1px solid var(--border);
          border-radius: 18px;
          padding: 18px;
          box-shadow: 0 10px 22px rgba(47, 58, 64, 0.08);
          background: rgba(255, 255, 255, 0.82);
          backdrop-filter: blur(8px);
        }

        .sectionSoftBlue {
          background: linear-gradient(180deg, rgba(58, 111, 143, 0.10), rgba(255, 255, 255, 0.82));
        }

        .sectionSoftGreen {
          background: linear-gradient(180deg, rgba(110, 143, 123, 0.12), rgba(255, 255, 255, 0.82));
        }

        .sectionSoftAccent {
          background: linear-gradient(180deg, rgba(155, 191, 166, 0.16), rgba(255, 255, 255, 0.82));
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
          border: 1px solid rgba(47, 58, 64, 0.10);
          border-radius: 16px;
          padding: 14px;
          background: rgba(255, 255, 255, 0.70);
        }

        .featureBlue {
          background: rgba(58, 111, 143, 0.10);
          border-color: rgba(58, 111, 143, 0.18);
        }

        .featureGreen {
          background: rgba(110, 143, 123, 0.12);
          border-color: rgba(110, 143, 123, 0.18);
        }

        .featureAccent {
          background: rgba(155, 191, 166, 0.16);
          border-color: rgba(155, 191, 166, 0.22);
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
          border: 1px solid rgba(47, 58, 64, 0.10);
          border-radius: 16px;
          padding: 14px;
          background: rgba(255, 255, 255, 0.72);
        }

        .panelTintBlue {
          background: rgba(58, 111, 143, 0.08);
          border-color: rgba(58, 111, 143, 0.18);
        }

        .panelTintGreen {
          background: rgba(110, 143, 123, 0.10);
          border-color: rgba(110, 143, 123, 0.18);
        }

        .panelTintAccent {
          background: rgba(155, 191, 166, 0.14);
          border-color: rgba(155, 191, 166, 0.22);
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
          opacity: 0.92;
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
          border: 1px solid rgba(47, 58, 64, 0.10);
          background: rgba(255, 255, 255, 0.7);
          border-radius: 14px;
          padding: 12px;
          font-size: 14px;
          line-height: 1.5;
          opacity: 0.95;
        }

        .scenarioCard {
          border: 1px solid rgba(47, 58, 64, 0.10);
          background: rgba(255, 255, 255, 0.70);
          border-radius: 16px;
          padding: 14px;
        }

        .scenarioTop {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 8px;
          flex-wrap: wrap;
        }

        .scenarioBadge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 6px 10px;
          border-radius: 999px;
          font-size: 12px;
          font-weight: 900;
          background: rgba(58, 111, 143, 0.12);
          border: 1px solid rgba(58, 111, 143, 0.22);
          color: var(--blue);
        }

        .scenarioTitle {
          font-weight: 900;
          font-size: 14px;
        }

        .calloutRow {
          margin-top: 12px;
        }

        .callout {
          border: 1px solid rgba(47, 58, 64, 0.10);
          background: rgba(255, 255, 255, 0.65);
          border-radius: 16px;
          padding: 12px;
          font-size: 13px;
          line-height: 1.45;
          opacity: 0.9;
        }

        .aboutLead {
          margin: 0 0 12px;
          padding: 12px 12px;
          border-radius: 14px;
          border: 1px solid rgba(58, 111, 143, 0.18);
          background: rgba(58, 111, 143, 0.08);
          font-size: 14px;
          line-height: 1.45;
          opacity: 0.92;
        }

        .contactLine {
          font-size: 14px;
          line-height: 1.5;
          opacity: 0.92;
        }

        .contactLabel {
          font-weight: 900;
        }

        .contactLink {
          color: var(--blue);
          text-decoration: none;
          font-weight: 900;
        }

        .contactLink:hover {
          text-decoration: underline;
        }

        .inlineLink {
          color: var(--blue);
          text-decoration: none;
          font-weight: 900;
        }

        .inlineLink:hover {
          text-decoration: underline;
        }

        .legalLinks {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .mailingBox {
          margin-top: 10px;
          padding-top: 6px;
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
          background: rgba(255, 255, 255, 0.9);
          font-weight: 800;
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
          background: rgba(110, 143, 123, 0.14);
          border-color: rgba(110, 143, 123, 0.30);
          color: var(--text);
        }

        .small {
          font-size: 13px;
          opacity: 0.85;
          line-height: 1.4;
        }

        .footerCta {
          margin-top: 18px;
          border: 1px solid var(--border);
          border-radius: 18px;
          padding: 18px;
          box-shadow: var(--shadow);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 14px;
          flex-wrap: wrap;
          background: linear-gradient(
            90deg,
            rgba(58, 111, 143, 0.12),
            rgba(110, 143, 123, 0.12),
            rgba(155, 191, 166, 0.14)
          );
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

        @media (max-width: 1040px) {
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

        @media (max-width: 960px) {
          .hero {
            grid-template-columns: 1fr;
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
            font-size: 32px;
          }

          .phoneNumber {
            font-size: 24px;
          }
        }

        @media (max-width: 420px) {
          .container {
            padding: 18px 14px 120px;
          }

          .navLinks {
            gap: 10px;
          }
        }
      `}</style>
    </div>
  );
}
