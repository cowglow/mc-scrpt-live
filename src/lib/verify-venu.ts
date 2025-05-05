const verifiedVenues = ["Z-Bau", "Kofferfabrik", "Kopf und Kragen"];

export function verifyVenue(venue: string) {
	return verifiedVenues.map((venue) => venue.toLowerCase()).includes(venue.toLocaleLowerCase());
}
