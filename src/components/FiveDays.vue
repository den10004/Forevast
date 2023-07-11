<script setup>
import { capitalizeFirstLetter } from "../utils";
const props = defineProps({
  weatherFiveInfo: {
    type: [Object, null],
    required: true,
  },
});

const today = new Date().toLocaleString("en-EN", {
  weekday: "short",
  month: "long",
  day: "numeric",
});
</script>

<template>
  <section class="block">
    Прогноз на 5 дней
    <ul class="cards">
      <li class="card" v-for="item in weatherFiveInfo?.list">
        <p class="card__title">
          {{ (item?.dt_txt).slice(0, 16) }}
        </p>
        <div
          :style="`background-image: url('/weather-main/${item?.weather[0].description}.png');`"
          class="pic-main"
        ></div>
        <p class="card__title">{{ Math.round(item?.main.temp) }} °C</p>
        <p class="card__title">Давление: {{ item?.main.pressure }} mm</p>

        <div class="weather-desc text-block card__title">
          {{ capitalizeFirstLetter(item?.weather[0].description) }}
        </div>
      </li>
    </ul>
  </section>
</template>

<style lang="sass" scoped>
@import '../assets/styles/main'

.cards
  display: flex
  width: 100%
  flex-wrap: wrap
  margin-top: 15px
  padding-left: 15px

.block
    height: 100%
    margin-left: 10px
    padding: 28px 16px 16px
    background: url(/src/assets/img/gradient-1.jpg) no-repeat 0% 0%
    background-size: cover
    border-radius: 25px
    margin-top: 16px
.card
    width: 160px
    height: auto
    list-style-type: none
    margin: 0px 10px 10px 0
    padding: 10px
    background: url(/src/assets/img/gradient-4.jpg) no-repeat 50% 50%
    background-size: cover
    border-radius: 8px

.card__title
    font-size: 13px
    text-align: center
    line-height: 20px


.pic-main
    width: 60px
    height: 60px
    background-repeat: no-repeat
    background-position: 50% 50%
    background-size: contain
    margin: 10px auto
</style>
