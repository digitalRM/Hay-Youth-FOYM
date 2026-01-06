// Events Data - Easy to add new events!
// Just add a new object to the appropriate category array

export interface Event {
  id: string; // Unique identifier for the event (used in URL)
  title: string;
  date: string;
  image: string; // Path to the event flier/image
  description: string; // Full description for the event page
  shortDescription?: string; // Optional short description for listings
}

// Lunar New Year Youth Concert Events
export const lunarNewYearEvents: Event[] = [
  {
    id: "lunar-new-year-2024",
    title: "Lunar New Year Youth Concert 2024",
    date: "February 3, 2024",
    image: "/lunar1.png",
    description: "Lunar New Year concert celebrating the arrival of the new year through youth music performances. The event invites the community to enjoy live music and a shared cultural atmosphere. Performances run from 3:00–5:00 PM, followed by a potluck from 5:00–6:30 PM, encouraging audience participation and community bonding.\n\nThe concert features youth performers and is held at Park Ridge Community Church, 3805 Maltby Rd, Bothell, WA 98012. Admission has a $5 fee. The event is organized by Harmony Association for Youth (HAY), with sponsorship support from Light Learning Academy.",
  },
  {
    id: "lunar-new-year-2025",
    title: "Spring's Musical Chapter - Lunar New Year 2025",
    date: "January 25, 2025",
    image: "/lunar2.png",
    description: "This poster advertises a 2025 Lunar New Year youth concert titled \"Spring's Musical Chapter.\" The event focuses on welcoming the new year through music, food, and shared celebration. Youth performers present a concert from 3:00–5:00 PM, followed by a community potluck from 5:00–6:30 PM, highlighting togetherness and cultural appreciation.\n\nThe concert takes place at Park Ridge Community Church, 3805 Maltby Rd, Bothell, WA 98012. A suggested fee of $5 is listed. The event is hosted by the Harmony Association for Youth (HAY) and emphasizes celebrating Lunar New Year with music, good food, and community.",
  },
];

// Family Ties in Harmony Events
export const familyTiesEvents: Event[] = [
  {
    id: "mothers-day-concert-2024",
    title: "Mother's Day Concert - Love in the Heart",
    date: "May 12, 2024",
    image: "/family1.png",
    description: "This poster advertises a Mother's Day concert organized by the Harmony Association for Youth (HAY). The theme centers on expressing love and gratitude through music, with youth performers dedicating performances to their mothers and receiving flowers in return.\n\nThe concert runs from 3:00–5:00 PM and features all youth performers. The suggested fee is $5. The event takes place at 1717 Bothell Way NE, Lake Forest Park, WA 98155. The overall focus is on celebrating Mother's Day through heartfelt musical performances and family appreciation.",
  },
  {
    id: "fathers-day-concert-2025",
    title: "A Melody & a Gift for Dad - Father's Day Concert",
    date: "June 22, 2025",
    image: "/family2.png",
    description: "This poster promotes a Father's Day–themed concert hosted by the Harmony Association for Youth (HAY). The event highlights fatherly love through music, presenting performances by youth as a musical gift for dads.\n\nThe concert is scheduled from 3:00–5:00 PM, with all youth performers participating. A suggested fee of $5 is listed. The location is 1717 Bothell Way NE, Lake Forest Park, WA 98155. The imagery and wording emphasize appreciation, family bonds, and honoring fathers through music.",
  },
];

// Youth Melody for Seniors Events
export const youthMelodyEvents: Event[] = [
  // Add events here following the same format
];

