export type Plate = {
  src: string;
  kicker: string;
  title: string;
};

// Numbered in download order. There was no file named 7; the extra
// "zapatista_look_book_5 (2)" landed between 6 and 8, so it is plate 07.
export const LOOKBOOK: Plate[] = [
  { src: "/lookbook/01.jpeg", kicker: "Title", title: "History never stays buried" },
  { src: "/lookbook/02.jpeg", kicker: "Lighting", title: "Warmth belongs to memory" },
  { src: "/lookbook/03.jpeg", kicker: "Mood", title: "Beauty under threat" },
  { src: "/lookbook/04.jpeg", kicker: "The world", title: "San Miguel shapes the investigation" },
  { src: "/lookbook/05.jpeg", kicker: "Composition", title: "The frame isolates Jack" },
  { src: "/lookbook/06.jpeg", kicker: "The team", title: "Ronin Studios" },
  { src: "/lookbook/07.jpeg", kicker: "Camera", title: "The camera holds" },
  { src: "/lookbook/08.jpeg", kicker: "The first murder", title: "Brutality without exploitation" },
  { src: "/lookbook/09.jpeg", kicker: "The protagonist", title: "Jack Alexander" },
  { src: "/lookbook/10.jpeg", kicker: "The film", title: "He seeks justice" },
  { src: "/lookbook/11.jpeg", kicker: "Presentation", title: "A world-class thriller" },
  { src: "/lookbook/12.jpeg", kicker: "Reference", title: "Prestige restraint" },
  { src: "/lookbook/13.jpeg", kicker: "Production design", title: "History becomes evidence" },
  { src: "/lookbook/14.jpeg", kicker: "Color", title: "Forensic light" },
  { src: "/lookbook/15.jpeg", kicker: "Movement", title: "Tension through architecture" },
  { src: "/lookbook/16.jpeg", kicker: "Climax", title: "Fire above the city" },
  { src: "/lookbook/17.jpeg", kicker: "Production", title: "A controlled footprint" },
  { src: "/lookbook/18.jpeg", kicker: "Tonal board", title: "Six sources of tension" },
  { src: "/lookbook/19.jpeg", kicker: "Escalation", title: "Each crime expands the scale" },
  { src: "/lookbook/20.jpeg", kicker: "Locations", title: "Underground spaces" },
  { src: "/lookbook/21.jpeg", kicker: "Texture", title: "Touched, not processed" },
  { src: "/lookbook/22.jpeg", kicker: "Cinematography", title: "The city opens beneath him" },
];

export const ARTICLE_URL =
  "https://www.atencionnews.net/post/a-screenwriters-journey-the-reinvention-of-frank-gaydos";

export const CACHINCHES_URL =
  "https://www.atencionnews.net/post/street-art-in-san-miguel-la-vida-de-las-cachinches-a-reality";

export const IMDB_URL = "https://www.imdb.com/name/nm11929209/";

export const LINKEDIN_URL = "https://www.linkedin.com/in/frank-gaydos-ba89b18/";

export const DECK_FILE = "/deck/zapatista-pitch-deck.pdf";

export const PROJECT_EMAIL = "frankgaydos.sma@gmail.com";

export const MURALS: Array<{ src: string; alt: string }> = [
  {
    src: "/san-miguel/mural-01.jpeg",
    alt: "Ringtail mural and morning glories along the Arroyo Las Cachinches walkway",
  },
  {
    src: "/san-miguel/mural-02.jpeg",
    alt: "Abstract mural of water and tree reflections, signed Caroduls",
  },
  {
    src: "/san-miguel/mural-03.jpeg",
    alt: "An artist on a ladder painting a mural of hands holding a turtle shell",
  },
  {
    src: "/san-miguel/mural-04.jpeg",
    alt: "Dung beetle mural with flowers and mushrooms, signed Pikin.S",
  },
  {
    src: "/san-miguel/mural-05.jpeg",
    alt: "Barn owl mural in flight above cactus flowers on the arroyo wall",
  },
];
