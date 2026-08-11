import Link from "next/link";
import Reveal from "../../../components/Reveal";
import JoinBand from "../../../components/JoinBand";

export const metadata = {
  title: "2024 Program & Speakers | SLPA",
};

export default function AtlantaProgram() {
  return (
    <>
      <section className="page-hero dark">
        <div className="wrap">
          <div className="eyebrow">
            Program &amp; Speakers &middot; Atlanta &middot; May 24&ndash;26,
            2024
          </div>
          <h1>Three days, three keynotes, ten panels.</h1>
          <p className="lede">
            The full program from &ldquo;Empowering Tomorrow: Somaliland
            Professionals in Unity&rdquo; &mdash; the speakers, moderators, and
            panelists who filled the Loudermilk Conference Center, preserved
            here as a record of the weekend.
          </p>
          <div className="btn-row">
            <a href="#panels" className="btn btn-light">
              Jump to the panels
            </a>
            <Link
              href="/conference/2024-atlanta"
              className="btn btn-outline-light"
            >
              Recap &amp; gallery
            </Link>
          </div>
          <div className="conf-meta">
            <div>
              <strong>Dates</strong>May 24&ndash;26, 2024
            </div>
            <div>
              <strong>Venue</strong>Loudermilk Conference Center &mdash;
              Atlanta, GA
            </div>
            <div>
              <strong>Program</strong>3 keynotes &middot; 10 panels
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <Reveal className="section-head">
            <div className="eyebrow">The Three Days</div>
            <h2>Three days, three moods.</h2>
          </Reveal>
          <Reveal className="programs-grid">
            <div className="program-card">
              <div className="k">Day One &middot; Cultural attire</div>
              <h3>Cultural Mixer</h3>
              <p>
                A vibrant opening evening of music, dance, and cultural
                exchange &mdash; networking with fellow professionals in your
                finest cultural attire, with Dr. Jama Musse Jama joining as
                featured panelist.
              </p>
            </div>
            <div className="program-card">
              <div className="k">Day Two &middot; Professional / Black tie</div>
              <h3>Conference &amp; Black Tie Gala</h3>
              <p>
                A full day of panels and workshops across the Loudermilk
                Conference Center, keynoted by Dr. Edna Adan Ismail. As the sun
                set, the Black Tie Gala brought dinner, live entertainment, and
                a keynote from Dr. Osman Sheikh Ahmed.
              </p>
            </div>
            <div className="program-card">
              <div className="k">Day Three &middot; Casual</div>
              <h3>BBQ &amp; Networking</h3>
              <p>
                A relaxed close in the Atlanta sun &mdash; great food, new
                friends, and space to reflect on the weekend&rsquo;s
                conversations.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-soft">
        <div className="wrap">
          <Reveal className="section-head">
            <div className="eyebrow">The Keynotes</div>
            <h2>Three voices who shaped the weekend.</h2>
          </Reveal>
          <Reveal className="article">
            <div className="k">Conference Keynote</div>
            <h3>Dr. Edna Adan Ismail</h3>
            <div className="byline">
              Founder, Edna Adan University Hospital &middot; Former WHO
              official
            </div>
            <p>
              Nurse-midwife, hospital founder, and healthcare advocate who has
              worked courageously to change cultural, religious, and medical
              norms surrounding women&rsquo;s health in East Africa. The first
              Somali girl to receive a scholarship to study in the U.K., she
              returned home after a career with the World Health Organization
              and sold her assets to found the Edna Adan University Hospital in
              Hargeisa &mdash; providing high-quality obstetric and
              gynecological care since 2002.
            </p>
          </Reveal>
          <Reveal className="article">
            <div className="k">Gala Keynote</div>
            <h3>Dr. Osman Sheikh Ahmed</h3>
            <div className="byline">
              Economist &middot; Principal economic adviser to the President of
              Somaliland
            </div>
            <p>
              PhD economist (University of North Carolina at Chapel Hill) and
              graduate of Harvard Business School&rsquo;s Executive Development
              Program. A former official of the World Bank, the International
              Finance Corporation, and the Islamic Development Bank, he has
              worked across the public and private sectors in the U.S. and the
              Middle East and taught economics at several American
              universities.
            </p>
          </Reveal>
          <Reveal className="article">
            <div className="k">Cultural Night Panelist</div>
            <h3>Dr. Jama Musse Jama</h3>
            <div className="byline">
              Founder, Hargeysa International Book Fair &middot; Director,
              Hargeysa Cultural Centre
            </div>
            <p>
              Ethno-mathematician with a PhD in African Studies specialising in
              computational linguistics of African languages. His research
              focuses on the role of heritage, art, and culture in development
              and state formation, and he serves as a senior advisor to the
              President for International Relations.
            </p>
          </Reveal>
        </div>
      </section>

      <section id="panels">
        <div className="wrap">
          <Reveal className="section-head">
            <div className="eyebrow">The Ten Panels</div>
            <h2>Every room at Loudermilk, in session.</h2>
            <p>
              Panels ran across the Main Conference Hall, the Paul Duke and
              Childs Young rooms, the Mark Pope and Anne Cramer rooms, and the
              Amphitheater &mdash; led by professionals from every corner of
              the network.
            </p>
          </Reveal>

          <Reveal className="article">
            <div className="k">Main Conference Hall</div>
            <h3>State of the Nation</h3>
            <div className="byline">Moderated by Yasin Abdi</div>
            <ul className="panelists">
              <li>
                <strong>Rep. Bashir Goth</strong> &mdash; Representative of the
                Republic of Somaliland to the United States; seasoned diplomat,
                journalist, and celebrated poet writing in Somali, English, and
                Arabic.
              </li>
              <li>
                <strong>Dr. Osman Sheikh Ahmed</strong> &mdash; Economist and
                principal economic adviser to the President of Somaliland;
                formerly of the World Bank, IFC, and Islamic Development Bank.
              </li>
              <li>
                <strong>Dr. Edna Adan Ismail</strong> &mdash; Founder of the
                Edna Adan Hospital and trailblazing advocate for women&rsquo;s
                health and midwife training.
              </li>
            </ul>
          </Reveal>

          <Reveal className="article">
            <div className="k">Paul Duke Room</div>
            <h3>Business</h3>
            <div className="byline">
              Moderated by Issaq Gass, Investment Banker
            </div>
            <ul className="panelists">
              <li>
                <strong>Said Ali</strong> &mdash; Senior Partner at a Big 4
                asset-management practice; CPA and Chartered Management
                Accountant with global accounting and auditing experience.
              </li>
              <li>
                <strong>Adan Abbey</strong> &mdash; Senior strategist at
                Nationwide Insurance and co-founder of Horn of Africa
                Insurance in Hargeisa, a pioneer of Somaliland&rsquo;s
                insurance sector.
              </li>
              <li>
                <strong>Abdisalam H. Mohammed</strong> &mdash; Finance and
                economics student at TCU; serial entrepreneur and co-founder
                of consulting firm Kaltan Strategies.
              </li>
              <li>
                <strong>Abdihalim A. Ali</strong> &mdash; Economics and
                finance student at TCU; co-founder of Boqor Clothing and DP
                World Berbera port alum.
              </li>
              <li>
                <strong>Mustafe Artan</strong> &mdash; Entrepreneur and
                business coach; founder of Knowledge 2 Profits and co-founder
                and CEO of Tranquility Health.
              </li>
            </ul>
          </Reveal>

          <Reveal className="article">
            <div className="k">Childs Young Room</div>
            <h3>Civic &amp; Public Leadership</h3>
            <div className="byline">
              Moderated by Mohamed Gulaid, UX Researcher
            </div>
            <ul className="panelists">
              <li>
                <strong>Senator Kayse Jama</strong> &mdash; Oregon State
                Senator for District 24; the first former refugee, Black
                Muslim, and Somali-American in the Oregon Senate.
              </li>
              <li>
                <strong>Ahmed Mahdi Hussein</strong> &mdash; Program Director
                at the FAA with 20+ years in U.S. federal government
                leadership; Fairfax County school board candidate.
              </li>
              <li>
                <strong>Lula Dualeh</strong> &mdash; Communication strategist;
                the first Muslim woman to run for public office in North
                Carolina and founder of the nonprofit SIYAA.
              </li>
              <li>
                <strong>Ayan Warsame</strong> &mdash; Nonprofit executive
                director and campaign strategist with wins in city council and
                mayoral races.
              </li>
            </ul>
          </Reveal>

          <Reveal className="article">
            <div className="k">Childs Young Room</div>
            <h3>Education</h3>
            <div className="byline">Moderated by Yasmin Mirreh, Attorney</div>
            <ul className="panelists">
              <li>
                <strong>Asha Farah</strong> &mdash; Senior Manager in corporate
                real estate at Starbucks; co-founder of Burao Academy of
                Science &amp; Technology, a STEM boarding school in Somaliland.
              </li>
              <li>
                <strong>Jonathan Starr</strong> &mdash; Founder of the Abaarso
                School of Science and Technology and author of{" "}
                <em>It Takes a School</em>; co-founder of Barwaaqo University
                and Kaabe Schools.
              </li>
              <li>
                <strong>Huda Hassan</strong> &mdash; Writer and cultural
                critic; assistant professor at NYU writing on the history of
                Somalis in New York City.
              </li>
              <li>
                <strong>Sayidcali Ahmed</strong> &mdash; Program Manager at
                Waano Learning Center and founding faculty at Surad Academy;
                MasterCard Foundation Scholar headed to Cornell.
              </li>
            </ul>
          </Reveal>

          <Reveal className="article">
            <div className="k">Paul Duke Room</div>
            <h3>Healthcare</h3>
            <div className="byline">Moderated by Dr. Samira Asker, MD</div>
            <ul className="panelists">
              <li>
                <strong>Dr. Asha Mohamud, MD</strong> &mdash; Internal medicine
                physician focused on health disparities in refugee and
                immigrant communities in Maine.
              </li>
              <li>
                <strong>Dr. Amina Igeh, MD</strong> &mdash; Urogynecology
                fellow at Yale; Princeton and UT San Antonio alum passionate
                about global health and mentorship.
              </li>
              <li>
                <strong>Dr. Noor Mohamed, Pharm.D</strong> &mdash; Director of
                Investigational Drug Service at Morehouse School of Medicine,
                designing clinical trials that prioritize communities of
                color.
              </li>
              <li>
                <strong>Dr. Hassan Nur, DMD</strong> &mdash; General dentist
                serving Baltimore for over a decade.
              </li>
            </ul>
          </Reveal>

          <Reveal className="article">
            <div className="k">Mark Pope Room</div>
            <h3>Mentorship</h3>
            <div className="byline">Moderated by Edil Yousuf, DNP</div>
            <ul className="panelists">
              <li>
                <strong>Abdusamed Artan</strong> &mdash; Energy-sector
                consultant with 10+ years advising major North American oil,
                gas, and energy operators; a product of SLPA&rsquo;s
                mentorship program.
              </li>
              <li>
                <strong>Shukri Ali</strong> &mdash; Financial Associate at
                BlackRock and Wellesley College MasterCard Foundation Scholar;
                weekend mentor with Minds Matter NYC.
              </li>
              <li>
                <strong>Farah Mohamed</strong> &mdash; Cybersecurity student
                headed to George Washington University; Burao Academy alum and
                advocate for gender equality in STEM.
              </li>
              <li>
                <strong>Yahia Liban</strong> &mdash; USC senior and City
                National Bank intern; mentorship program alum active in South
                LA economic development.
              </li>
            </ul>
          </Reveal>

          <Reveal className="article">
            <div className="k">Mark Pope Room</div>
            <h3>SAHA &mdash; Somalilander-American Health Association</h3>
            <div className="byline">Moderated by Dr. Nimo Ali Tahar, MD</div>
            <ul className="panelists">
              <li>
                <strong>Dr. Adnan Hirad, MD PhD</strong> &mdash; Neuroscientist
                at the University of Rochester; SAHA board member.
              </li>
              <li>
                <strong>Zeinab Omer Bile</strong> &mdash; Respiratory Therapist
                at Inova Fairfax Medical Campus; SAHA board member.
              </li>
              <li>
                <strong>Dr. Sharmarke Magan, MD</strong> &mdash; SAHA
                co-founder and vice president.
              </li>
              <li>
                <strong>Dr. Hussein Hanfi</strong> &mdash; Anesthesiologist and
                assistant professor at Howard University&rsquo;s Department of
                Anesthesia.
              </li>
            </ul>
          </Reveal>

          <Reveal className="article">
            <div className="k">Amphitheater</div>
            <h3>Women Empowerment</h3>
            <div className="byline">Moderated by Asley Gulaid</div>
            <ul className="panelists">
              <li>
                <strong>Noura Alen</strong> &mdash; Emmy Award-winning
                broadcast producer skilled in live broadcast, field
                production, and storytelling.
              </li>
              <li>
                <strong>Khadija Warsame</strong> &mdash; Business Control
                Manager in Global Technology at Bank of America; mentor and
                inclusivity advocate.
              </li>
              <li>
                <strong>Dr. Yousra Mohamoud</strong> &mdash; Epidemiologist
                with the CDC&rsquo;s Division of Reproductive Health, leading
                work on maternal health and infant mortality.
              </li>
            </ul>
          </Reveal>

          <Reveal className="article">
            <div className="k">Anne Cramer Room</div>
            <h3>Technology</h3>
            <div className="byline">
              Moderated by Hassan Hussein, Department of Commerce Cyber
              Security
            </div>
            <ul className="panelists">
              <li>
                <strong>Yasmin Abdi</strong> &mdash; Founder and CEO of
                cybersecurity firm noHack; built security solutions at Snap,
                Meta, and Google and was a founding member of Meemo (acquired
                by Coinbase).
              </li>
              <li>
                <strong>Mohamed Rage, EMBA</strong> &mdash; Product designer
                with three patents, a global product launch in 60+ countries,
                and a Shark Tank season 8 finalist run.
              </li>
              <li>
                <strong>Ismail Mumin</strong> &mdash; Software engineer at Bank
                of America building enterprise cloud data platforms.
              </li>
              <li>
                <strong>Hassan Gulaid</strong> &mdash; Software engineer at
                Accenture Federal Services specializing in full-stack cloud
                application development.
              </li>
            </ul>
          </Reveal>

          <Reveal className="article">
            <div className="k">Anne Cramer Room &amp; Amphitheater</div>
            <h3>Individual Presentations</h3>
            <ul className="panelists">
              <li>
                <strong>Mustafa Artan</strong> &mdash; &ldquo;Unleashing
                Potential: Entrepreneurship, Financial Mastery, and
                Self-Investment Strategies&rdquo; &mdash; on entrepreneurship,
                financial literacy, and the art of investing in yourself.
              </li>
              <li>
                <strong>Mohamed Rage, EMBA</strong> &mdash; A deep dive into a
                decade of product design, from small studios to Fortune 500
                clients.
              </li>
            </ul>
          </Reveal>
        </div>
      </section>

      <JoinBand />
    </>
  );
}
