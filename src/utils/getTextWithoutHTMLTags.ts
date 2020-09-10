export default function getTextWithoutHTMLTags(text: string): string {
  return text.replace(/<\/?[^>]+(>|$)/g, '').toString();
}
