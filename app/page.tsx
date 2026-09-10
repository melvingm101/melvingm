import { constructElement } from "@/lib/htmlElement";
import { WebsiteElement } from "@/types/element";

export default function Home() {
  const testElement: WebsiteElement = {
    type: "Button",
    children: [
      {
        type: "Heading2",
        id: "topHeading",
        children: [],
        text: "Welcome to my website!",
        className: "font-bold text-2xl"
      },
      {
        type: "Text",
        id: "test",
        className: "text-center",
        children: [],
        text: "Hello worl sueduehfefed"
      }
    ],
    className: "",
    id: "testbutton"
  }
  return (
    <div>
      {constructElement(testElement)}
    </div>
  );
}
