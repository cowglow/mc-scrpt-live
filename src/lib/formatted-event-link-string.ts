export const formattedEventLinkString = (urlString: string): string => {
  const url = new URL(urlString);
  return `${url.hostname.replace("www.", "")}${url.pathname}`;
};
