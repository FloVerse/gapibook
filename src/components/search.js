import useGoogleBookApi from "../gapibook.js";

Vue.component("search", {
  template: `
              <form class="center-align"   @submit.prevent="handleSubmit">
                    <input class="mx-15" type="text" v-model="recherche" placeholder="Rechercher un titre de livre"/>
                    <author></author>
                    
                    <input type="submit"  value="Rechercher" class="btn"/>
                        
            </form>`,
  data: function () {
    return {
      recherche: "",
    };
  },
  methods: {
    handleSubmit: function () {
      if (

        document.getElementById("free").checked &&
        document.getElementById("eBook").checked &&
        document.getElementById("recent").checked == false
        
      ) {
        useGoogleBookApi
          .bySearch(this.recherche)
          .then((data) => this.$emit("search-done", data.items));
      } else if (
        document.getElementById("free").checked == false &&
        document.getElementById("eBook").checked &&
        document.getElementById("recent").checked == false
      ) {
        useGoogleBookApi
          .byEbook(this.recherche)
          .then((data) => this.$emit("search-done", data.items));
      } 
      else if (
        document.getElementById("recent").checked ||
        document.getElementById("eBook").checked  && document.getElementById("recent").checked ||
        document.getElementById("free").checked  && document.getElementById("recent").checked ||
        document.getElementById("free").checked  && document.getElementById("recent").checked && document.getElementById("eBook").checked

      ) {
        useGoogleBookApi
          .byNewest(this.recherche)
          .then((data) => this.$emit("search-done", data.items));
      }
      else if (
        document.getElementById("auteur").checked
      ) {
        useGoogleBookApi
          .byAuthor(this.recherche,document.getElementById("searchAuthor").value)
          .then((data) => this.$emit("search-done", data.items));
      }
      else {
        useGoogleBookApi
          .bySearch(this.recherche)
          .then((data) => this.$emit("search-done", data.items));
      }
    },
  },
});
