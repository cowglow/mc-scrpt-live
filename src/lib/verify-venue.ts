const verifiedVenues: Record<string, string> = {
	"Z-Bau": "https://www.google.com/maps/search/z-bau/",
	Kofferfabrik: "https://www.google.com/maps/search/kofferfabrik/",
	"Kopf und Kragen": "https://maps.app.goo.gl/WLCzjCEHBqwqjYJb8",
	"Roter Salon": "https://www.google.com/maps/search/z-bau/",
	"Kunstverein Hintere-Cramergasse e.V":
		"https://www.google.com/maps/search/Kunstverein-Hintere-Cramergasse-e.V",
	"Juz Lauf": "https://www.google.com/maps/search/Jugendzentrum+Lauf",
	"Glashaus Bayreuth": "https://www.google.com/maps/search/Glashaus+e.V."
};

export function verifyVenue(venue: string): string | false {
	const verifiedVenueKeys: (keyof typeof verifiedVenues)[] = Object.keys(verifiedVenues);
	if (!verifiedVenueKeys.includes(venue)) {
		return false;
	}
	return verifiedVenues[venue];
}
