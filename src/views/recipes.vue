<template>
  <div class="recipes">
    <form method="get" @submit.prevent="search()">
      <div class="row">
        <div class="col s10">
          <div class="input-field col s10">
            <i class="material-icons prefix">search</i>
            <input id="icon_prefix" type="text" v-model="recepi" class="validate" />
            <label for="icon_prefix">Search....</label>
          </div>
        </div>
      </div>
    </form>
    <div class="recipes-items">
      <RecipeItem
        v-for="recipeItem in recepies"
        :title="recipeItem.recipe.label"
        :image="recipeItem.recipe.image"
        :calorie="recipeItem.recipe.calories"
        :ingredients="recipeItem.recipe.ingredientLines"
      />
    </div>
  </div>
</template>


<script>
import Axios from "axios";
import { constants } from "crypto";
import RecipeItem from "@/components/RecipeItem.vue";
export default {
  name: "recipes",
  data() {
    return {
      recepi: "",
      APP_ID: "567bf23b",
      APP_KEY: "bc7705e3640b1a3318da4a1bce07db14",
      query: "chicken",
      recepies: "",
      res: ""
    };
  },
  methods: {
    search: function() {
      Axios.get(
        `https://api.edamam.com/search?q=${this.recepi}&app_id=567bf23b&app_key=bc7705e3640b1a3318da4a1bce07db14`
      ).then(response => {
        this.recepies = response.data.hits;
      });
    }
    // search: async function() {
    //   let res = await fetch(
    //     `https://api.edamam.com/search?q=${this.recepie}&app_id=567bf23b&app_key=bc7705e3640b1a3318da4a1bce07db14`
    //   );
    //   let data = await res.json();
    //   this.state.recepies = data.hits;
    //   console.log(this.state.recepies)
    // }
  },

  components: {
    RecipeItem
  }
};
</script>
