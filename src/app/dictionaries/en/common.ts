import header from "@/app/dictionaries/en/Wrapper/header";
import homePage from "@/app/dictionaries/en/Home/homePage";
import footer from "@/app/dictionaries/en/Wrapper/Footer";
import transferHomePage from "@/app/dictionaries/en/Home/transferHomePage";
import fileInput from "@/app/dictionaries/en/ReComponents/FileInput";
import instruments from "@/app/dictionaries/en/Instruments";
import links from "@/app/dictionaries/en/Pages/links";

export default {
  //Wrapper
  header: header,
  footer,

  //Pages

  homePage,
  transferHomePage,
  instruments,
  links,

  fileInput,
  welcome: "Hello {name}!",
  "about.you": "Hello {name}! You have {age} yo",
  "scope.test": "A scope",
  "scope.more.test": "A scope",
  "scope.more.param": "A scope with {param}",
  "scope.more.and.more.test": "A scope",
  "scope.more.stars#one": "1 star on GitHub",
  "scope.more.stars#other": "{count} stars on GitHub",
  "missing.translation.in.fr": "This should work",
  "cows#one": "A cow",
  "cows#other": "{count} cows",
} as const;
