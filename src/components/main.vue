<template>
  <main class="main text-center">
    <h1 class="text-center">Welcome to vue course and exapmles</h1>
    <img src="../assets/logo.png" alt />
    <h4 class="info">
      <p>Created By : Mohamed Elhefni</p>
      <img
        class="profile"
        src="https://i1.sndcdn.com/artworks-000175541659-tf1iel-t500x500.jpg"
        alt
      />
    </h4>
  </main>
</template>

<script>
export default {
  name: "main"
};
</script>

<style lang="scss">
.info {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.profile {
  width: 100px;
  border-radius: 50%;
}
</style>
