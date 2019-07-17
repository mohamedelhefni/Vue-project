<template>
  <div class="recipe-item">
    <div class="card">
      <div class="card-image waves-effect waves-block waves-light">
        <img class="activator" v-bind:src="image" />
      </div>
      <div class="card-content">
        <span class="card-title activator grey-text text-darken-4">
          {{title}}
          <i class="material-icons right">more_vert</i>
        </span>
        <p>
          <a href="#">
            <p>{{ Math.floor(calorie) }} calorie</p>
          </a>
        </p>
      </div>
      <div class="card-reveal">
        <span class="card-title grey-text text-darken-4">
          <i class="material-icons right">close</i>
          {{title}}
        </span>
        <ul>
          <li v-for="ingredient in ingredients">{{ ingredient }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "recipe-item",
  props: ["title", "image", "calorie", "ingredients"]
};
</script>

