import r2wc from "@r2wc/react-to-web-component";
import FormAlert from "./components/FormAlert";
import SignInRegister from "./components/SignInRegister";
import ImageCard from "./components/ImageCard";
import TopTasks from "./components/TopTasks";

const alert = r2wc(FormAlert, {
  props: { title: "string", type: "string", content: "string" },
});

const signInRegister = r2wc(SignInRegister, {
  props: { benefits: "string", signinurl: "string", registerurl: "string" },
});

const cardImage = r2wc(ImageCard, {
  props: { accountname: "string" },
});

const topTasks = r2wc(TopTasks, {
  props: { ucrn: "string", sid: "string" },
});

customElements.define("alert-component", alert);
customElements.define("sign-in-register", signInRegister);
customElements.define("image-card", cardImage);
customElements.define("top-tasks", topTasks);
