import r2wc from "@r2wc/react-to-web-component";
import FormAlert from "./components/FormAlert";
import SignInRegister from "./components/SignInRegister";

const alert = r2wc(FormAlert, {
  props: { title: "string", type: "string", content: "string" },
});

const signInRegister = r2wc(SignInRegister, {
  props: { benefits: "string", signinurl: "string", registerurl: "string" },
});

customElements.define("alert-component", alert);
customElements.define("sign-in-register", signInRegister);
