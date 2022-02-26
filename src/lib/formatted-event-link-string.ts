export const formattedEventLinkString = (string) => {
  const url = new URL(string);

  return `${url.hostname.replace("www.", "")}${url.pathname}`;
};
