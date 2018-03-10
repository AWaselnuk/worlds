export const ALPHABETICAL_CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

export function randomString(length: number): string {
  return [...new Array(length)].map(randomCharacter).join('');
}

export function randomCharacter(): string {
  return ALPHABETICAL_CHARACTERS.charAt(Math.floor(Math.random() * ALPHABETICAL_CHARACTERS.length));
}
