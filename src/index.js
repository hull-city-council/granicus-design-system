import r2wc from "@r2wc/react-to-web-component";
import FormAlert from "./components/FormAlert";
import SignInRegister from "./components/SignInRegister";
import ImageCard from "./components/ImageCard";
import UpcomingBinCollections from "./components/UpcomingBinCollections";
import TopTasks from "./components/TopTasks";
import FeaturedNews from "./components/FeaturedNews";

const alert = r2wc(FormAlert, {
  shadow: "closed",
  props: { 
    title: "string", 
    type: "string", 
    content: "string" 
  },
});

const signInRegister = r2wc(SignInRegister, {
  props: { 
    benefits: "string", 
    signinurl: "string", 
    registerurl: "string" },
});

const cardImage = r2wc(ImageCard, {
  props: { 
    accountname: "string", 
    type: "string" 
  },
});

const topTasks = r2wc(TopTasks, {
  props: { 
    type: "string",
    uprn: "string",
  },
});

const upcomingCollections = r2wc(UpcomingBinCollections, {
  props: {
    uprn: "string",
    sid: "string",
    email: "string",
    ucrn: "string",
    uuid: "string"
  }
});
const featuredNewsItems = r2wc(FeaturedNews);

customElements.define("alert-component", alert);
customElements.define("sign-in-register", signInRegister);
customElements.define("image-card", cardImage);
customElements.define("top-tasks", topTasks);
customElements.define("bin-collections", upcomingCollections);
customElements.define("featured-news", featuredNewsItems);
