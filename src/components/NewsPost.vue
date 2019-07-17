<template>
  <div class="card">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator" v-bind:src="imgUrl" />
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">
        {{title}}
        <i class="material-icons right">more_vert</i>
      </span>
      <p>
        <a href="#">
          <p>{{date}}</p>
        </a>
      </p>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">
        <i class="material-icons right">close</i>
        {{title}}
      </span>
      <p>{{desc}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "imgUrl", "desc", "date"],
  name: "lorem"
};
</script>
