export interface ITestimonial {
  name: string;
  description: string;
  nameLink: string;
  companyLink: string;
  image: string;
  message: string;
}

export const testimonials: ITestimonial[] = [
  {
    name: "Plato Gabriel",
    description: "CEO TechChak",
    nameLink: "https://www.instagram.com/plato_15/",
    companyLink: "https://www.techchak.com/",
    image: "plato.png",
    message: `Ever since TechChak integrated Al features, navigating and utilizing the app for Course Creators has become a breeze. The intelligent enhancements have not only made the platform more intuitive but also drastically improved learning experience, It's clear that the Rydr team truly understands how to harness Al fer user-centric solutions. Exceptional job!`,
  },
  {
    name: "Verse",
    description: "CEO of Verse Management",
    nameLink: "https://www.instagram.com/1theverse/",
    companyLink: "https://www.instagram.com/1versemgmt/",
    image: "verse.png",
    message: `In the music management industry, having a vision is essential. With Rydr* Al consultancy, we at Verse Management have been able to facilitate and leverage our processes like never before. Their creative, Al strategies have enlighten us to make data-driven decisions, grow artist management, and ensure that we're always 10 steps ahead in this fast changing industry. A life changing partnership that adds tremendous and immediate value.`,
  },
];

