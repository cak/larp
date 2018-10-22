export function ipv4(text: string) {
  const ipRegex: RegExp = /\b((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\b/gi;
  const match = text.match(ipRegex); //?
  return match;
}

export function email(text: string) {
  const emailRegex: RegExp = /\b([^.\s][a-z0-9.+-]+@[a-z0-9.-]+\.[a-z-]{2,24})/g;
  const match = text.match(emailRegex); //?
  return match;
}

export function url(text: string) {
  const urlRegex = /\b((?:https?:\/\/|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))/gi;
  const match = text.match(urlRegex);
  return match;
}
