export const verifiedVenues: Record<string, string> = {
	"Z-Bau": "https://www.google.com/maps/search/z-bau/",
	Kofferfabrik: "https://www.google.com/maps/search/kofferfabrik/",
	"Kopf und Kragen": "https://maps.app.goo.gl/WLCzjCEHBqwqjYJb8",
	"Roter Salon": "https://www.google.com/maps/search/z-bau/",
	"Kunstverein Hintere-Cramergasse e.V":
		"https://www.google.com/maps/search/Kunstverein-Hintere-Cramergasse-e.V",
	KV: "https://www.google.com/maps/search/Kunstverein-Hintere-Cramergasse-e.V",
	"Juz Lauf": "https://www.google.com/maps/search/Jugendzentrum+Lauf",
	"Glashaus Bayreuth": "https://www.google.com/maps/search/Glashaus+e.V."
};

export type VerifiedVenue = keyof typeof verifiedVenues;

export function isVerifiedVenue(venue: string): venue is VerifiedVenue {
	return Object.keys(verifiedVenues).includes(venue);
}

export function verifyVenue(venue: string): string | false {
	if (!isVerifiedVenue(venue)) {
		return false;
	}
	return verifiedVenues[venue];
}
