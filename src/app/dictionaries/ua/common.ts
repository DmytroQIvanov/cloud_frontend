// import header from "/Wrapper/header";
import header from "@/app/dictionaries/ua/Wrapper/header";

// import wrapper from "./Wrapper";
export default {
  header: header,
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