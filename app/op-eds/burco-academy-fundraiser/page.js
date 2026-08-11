import OpedArticle from "../OpedArticle";

export const metadata = {
  title: "Burco Academy Ramadan Fundraiser | SLPA Blog",
};

const BLOCKS = [
  {
    t: "img",
    src: "/op-eds/burco-thumb.jpg",
    alt: "Burao Academy students holding copies of the book It Takes a School",
  },
  {
    t: "p",
    s: "Update 5/31/2019: Alhamdulilah, we've raised $2,500 to date. Help us reach our goal of $5,000 by donating here today.",
  },
  {
    t: "p",
    s: "Utilize this blessed time to do as many extra deeds as possible! And of the best deeds during these times is charity, and of the best charity is a perpetual charity that will continue to give for many generations to come. One form of this is through education.",
  },
  {
    t: "p",
    s: "We have partnered up with Burao Academy to bring to you: Ramadan STEM Education Fundraiser. Donate what you can...$5, $10, $100, any little bit helps https://www.buraoacademy.org/give",
  },
  {
    t: "p",
    s: "Your kind monetary support will help Burao Academy's Student Tuition Assistance Program. Annual tuition for one student is $1850.",
  },
  {
    t: "p",
    s: "Burao Academy believes that Somali lives can be transformed through education. However, achieving this is no easy task but with your financial support, anything is possible!",
  },
  {
    t: "img",
    src: "/op-eds/burco-2.jpg",
    alt: "Burao Academy students learning programming and coding on a laptop",
  },
  {
    t: "p",
    s: "Students such as courageous 9-year old Sagal are learning graphic animation as well as other STEM-related skills such as programming and coding at Burao Academy. Sagal's dream of becoming a documentary maker and the dream of all the other bright and gifted young students is Somaliland is in your hands and only possible through your generous donations today.",
  },
  { t: "p", s: "Donate here." },
  {
    t: "p",
    s: "Win the love and mercy of Allah this Ramadan by giving the gift of education. Please donate here https://www.buraoacademy.org/give",
  },
  { t: "p", s: "With a paying forward mindset, together we can achieve." },
  {
    t: "img",
    src: "/op-eds/burco-1.jpg",
    alt: "The Burao Academy of Science and Technology campus in Burao, Somaliland",
  },
  {
    t: "p",
    s: "Burao Academy, is a Somali-American diaspora grassroots effort and an independent, 501(c)(3) non-profit, coeducational, boarding school offering comprehensive education with special focus on Science, Technology, Engineering and Math (STEM). Learn more about Burao Academy here.",
  },
  {
    t: "p",
    s: "Since it's inauguration three years ago, 40% of the campus construction is completed including 2 girls dormitory, 4 boys dormitory, 26 classrooms/study halls, as well as a dining hall and kitchen to effectively meet the nutrition need of teachers and students which include those from a nearby orphanage.",
  },
  {
    t: "p",
    s: "Additionally, to help fulfill the dire need for technical skills & educated citizens in the country, to date, 30 Burao Academy students received CCNA certifications while another 60 students received Cisco Networking Academy IT Essentials certification. The school is able to provide tech and equipment to its students as it receives support from large US corporations such as Microsoft, Cisco, and Starbucks.",
  },
  {
    t: "img",
    src: "/op-eds/burco-3.jpg",
    alt: "Land restoration and agriculture on the Burao Academy campus",
  },
  {
    t: "p",
    s: "Increasing food security in Somaliland and land restoration projects are part of Burao Academy's forward looking all-encompassing curriculum. The 22 acre campus produces vegetation in surplus that gets donated to economically disadvantaged women in nearby villages- who in turn sell in the open market to feed their families.",
  },
  { t: "p", s: "Your kind generosity can help the school achieve even more." },
  { t: "p", s: "We thank you for your support! Signed," },
  {
    t: "img",
    src: "/op-eds/burco-5.jpg",
    alt: "Burao Academy of Science and Technology seal",
  },
];

export default function BurcoFundraiser() {
  return (
    <OpedArticle
      eyebrow="Blog by Rahma Osman · May 24, 2019"
      title="It's the last 10 days of Ramadan!"
      meta="And what better way to mark the arrival of the most blessed days of Ramadan than to partake in its giving spirit!"
      blocks={BLOCKS}
    />
  );
}
