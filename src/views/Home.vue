<template>
  <div class="home">
    <mainApp />
  </div>
</template>

<script>
// @ is an alias to /src

import mainApp from "@/components/main.vue";
export default {
  name: "home",
  components: {
    mainApp
  }
};
</script>
