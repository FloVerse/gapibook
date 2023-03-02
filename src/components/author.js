import useGoogleBookApi from "../gapibook.js";

Vue.component("author", {
  props: ["author"],
  template: `
  <input class="mx-15" type="text" id="searchAuthor" v-model="author" placeholder="Nom de l'auteur"/>`,
  
  
});
