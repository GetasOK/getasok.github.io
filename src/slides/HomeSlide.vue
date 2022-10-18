<template>
  <div>
    <v-sheet>
      <span class="text-h3 text-sm-h2 text-md-h1 text-uppercase">
        <p class="mb-2">Привет!</p>
        <p class="mb-2">
          Я <span class="text-red">{{ fullname }}</span>
        </p>
        <p class="mb-2">
          <span
            v-for="(word, index) in position.name.split(' ')"
            :class="{ 'text-red': index % 2 == 0 }"
            :key="word"
          >
            {{ word + " " }}
          </span>
        </p>
        <p class="text-h5 text-sm-h4 font-weight-thin">
          <template v-for="(element, index) in position.specs" :key="element">
            {{ element }}
            <template v-if="index + 1 !== position.specs.length"> / </template>
          </template>
        </p>
      </span>
    </v-sheet>
  </div>
</template>

<script>
export default {
  name: "HomeSlide",
  props: {
    fullname: { required: true, type: String },
    position: { required: true, type: Object },
  },
};
</script>

<style scoped>
.v-sheet {
  width: 100vw;
  height: 100vh;
  position: fixed;
  padding-top: 30vh;
  padding-left: 1%;
  animation: constellation 40s infinite linear;
  background: url("~@/assets/constellation.svg");
}

@keyframes constellation {
  0% {
    background-position-x: 0px;
    background-position-y: 0px;
  }
  20% {
    background-position-x: 120px;
    background-position-y: 80px;
  }
  40% {
    background-position-x: 180px;
    background-position-y: 160px;
  }
  60% {
    background-position-x: 40px;
    background-position-y: 400px;
  }
  80% {
    background-position-x: 90px;
    background-position-y: 160px;
  }
  100% {
    background-position-x: 0px;
    background-position-y: 0px;
  }
}
</style>
