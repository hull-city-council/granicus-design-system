import r2wc from "@r2wc/react-to-web-component";
import FormAlert from "./FormAlert";

const alert = r2wc(FormAlert, {
  props: { title: "string", type: "string", content: "string" },
});

customElements.define("alert-component", alert);
