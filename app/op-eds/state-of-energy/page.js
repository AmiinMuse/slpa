import OpedArticle from "../OpedArticle";

export const metadata = {
  title: "Somaliland's State of Energy | SLPA Op-Eds",
};

const BLOCKS = [
  {
    t: "lead",
    s: "Developing countries have one large need limiting their ability to progress and advance – access to affordable, reliable, and clean energy. After all, companies and societies cannot thrive sustainably without access to reasonable electricity and petroleum products. While this pressing issue happens in developing countries around the world, one prime example is Somaliland, where electricity and petroleum products are priced higher than those in their peer countries.",
  },
  {
    t: "p",
    s: "Somaliland has been a government for almost 30 years, after dissolving its union unilaterally with Somalia in 1991. Even with almost 30 years to work out some of the problems associated with being their own independent country, they still struggle in several ways. Both Somaliland and Somalia currently have one thing in common compared to their peers in the region – a lack of affordable energy.",
  },
  {
    t: "p",
    s: "Electricity prices are some of the highest across the world, peaking at a dollar per kilowatt-hour. By comparison, in Ethiopia, Kenya and the US the average cost is 1, 22, and 14 cents per kilowatt-hour respectively. For low-income families and small businesses, where the average household salary is less than $4 per day, the impact can prove crippling. For most, it is practically impossible to even consider paying for electricity.",
  },
  {
    t: "p",
    s: "In fact, despite Somaliland having substantial energy resources – primarily wind, solar, oil, and natural gas – consumption per capita is among the lowest in Sub-Saharan Africa. This is due to the prohibitively high cost compared to the average income and an overall lack of local/diaspora investment. While primary energy demand in Africa in 2018 was just over 800 Million Tonnes of Oil Equivalent (Mtoe), demand in other parts of the world was much higher. Demand for oil alone was approximately 3.1 million barrels per day (mb/d) in all of Africa, coming in higher than the 2.8 mb/d of the Middle East and 3.0 mb/d in China but lower than the 4.3 mb/d in India. The entire continent is actually expanding low levels of oil, but primarily that demand comes from countries that are much larger and more developed than Somaliland.",
  },
  {
    t: "p",
    s: "Like many other post-conflict zones, the energy mix in Somaliland is dictated by a short-term, localized outlook. Private operators set up diesel-based mini-grids with a small combination of solar power systems without batteries that require limited infrastructure investment. The operational overhead is much higher than renewables or gas-fired power plants, but the returns are immediate and more attractive. In comparison, the return on investment for a solar or wind plant is typically 10-12 years where a gas-fired power plant is 15-17 years.",
  },
  {
    t: "p",
    s: "Although these local energy sector operators are well established on their 'turf,' they tend to lack the capacity to implement large renewables and power plant installations that would significantly lower electricity prices for the citizens of Somaliland. Engaging with these local, well-connected operators and finding a way around their limitations is a central, practical consideration for any investor's success, but it is not as simple as it might seem. In fact, it is exceedingly complex to overrun the two big players in the current market. The most significantly prohibitive issues that will deter any investor from entering this area are: limited regulation & oversight of the sector, monopoly distribution control, acute shortage of qualified staff, generation & distribution losses (up to 40%) due to poor infrastructure and collection, and finally high electricity tariffs due in part to energy company inefficiencies.",
  },
  {
    t: "p",
    s: "Related pieces: UK invests in renewable energy in Somaliland to address high costs of electricity",
  },
  {
    t: "p",
    s: "Though a complete switch to renewables would be the ideal answer to cover Somaliland's energy needs, the real-world answer will be much more complicated when the country achieves its dream of becoming an industrialized tech hub for the region. A balance between natural gas-powered plants and renewables will mitigate the risk of peak power demands and national security co-storage issues, as well as increasing diversity and relieving concerns of energy security.",
  },
  {
    t: "p",
    s: "Often lost in energy transition messaging, and admittedly difficult to appreciate in the present industry downturn caused by oversupply and lost demand due to COVID-19, is the critical role of oil and gas both in fulfilling current energy needs and in facilitating future change. Proposals for a sustainable future rely on electricity, but there seems to be a disconnect between that ideal and the realities of power generation where fossil fuels still play the predominant role.",
  },
  {
    t: "p",
    s: "Africa still sources more than two-thirds of its electricity from fossil fuels, with natural gas adding nearly 5% of that total and growing with every new gas-fired power plant. Solar and wind account for less than 7% of overall domestic needs, and new solutions like hydrogen are nonexistent in the world's second largest continent. Simply put, a solution like electric vehicles won't change the demand for oil and gas, it just shifts the burner tip from the car's engine to the power plant two counties over.",
  },
  {
    t: "p",
    s: "As populations and economies grow, energy appetites persist with fossil fuels playing a lead role. This may not be ideal, and this may not be true forever. However, in the current situation, unless the quality of life is sacrificed or energy storage technologies significantly develop capacities that will store energy to power large scale industries and communities, it is a present necessity. The transition process is gradual, and we can't focus only on the horizon lest we lose sight of what's right in front of us and what is necessary today to move towards that goal.",
  },
  {
    t: "p",
    s: "For Somaliland to realize accelerated economic and industrial development, local and diaspora investment will be needed to build self-sustaining projects unlocking the full potential of domestic energy resources. Increased access and affordability of energy will then attract credible international investment looking to help Somaliland expand and develop. It will be hard to sell the idea to international investors to invest in Somaliland's energy sector due to Somaliland still not being recognized on the global stage and the infrastructure needing to be built from scratch– which is not currently an option due to demand issues that can only be solved by tripling access in the next five to ten years.",
  },
];

const PUBLISHED_IN = {
  heading: "This Op-Ed has been published on three Somaliland Journals:",
  links: [
    "https://somalilandchronicle.com/2020/09/06/somalilands-state-of-energy/",
    "https://sii1991.org/the-state-of-energy-in-somaliland/",
    "https://www.somalilandsun.com/somaliland-the-state-of-energy-in-the-country/",
  ],
};

const AUTHOR = [
  "Abdisamed Artan  LinkedIn  Email: aga5@rice.edu",
  "A Petroleum Engineer based in Houston, Texas and a member of the Somaliland Professionals Association of America (SLPA).",
];

export default function StateOfEnergy() {
  return (
    <OpedArticle
      eyebrow="SLPA's First Quarterly Analytical Op-Ed by Eng. Abdisamad"
      title="Somaliland's State of Energy"
      meta="by Engineer Abdisamad Artan"
      blocks={BLOCKS}
      publishedIn={PUBLISHED_IN}
      author={AUTHOR}
      disclaimer="The Op-ed is based on professional opinion and the author is not responsible for the implementation of these ideas."
    />
  );
}
