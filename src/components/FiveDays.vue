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
  <section class="">
    <div class="">
      <div class="">
        <div class="">
          <div class="">
            <div class="block-bottom-text-block-title">5 дней</div>

            <ul class="cards">
              <li class="card" v-for="item in weatherFiveInfo?.list">
                <p>{{ (item?.dt_txt).slice(5, 16).replace("-", ".") }}</p>
                <h4>{{ Math.round(item?.main.temp) }} °C</h4>
                <h4>Давление: {{ item?.main.pressure }} mm</h4>

                <h4 class="weather-desc text-block">
                  {{ capitalizeFirstLetter(item?.weather[0].description) }}
                </h4>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="sass" scoped>
@import '../assets/styles/main'

.cards
  display: flex
  width: 100%
  flex-wrap: wrap


  .card
    width: 150px
    height: auto
    border: 1px solid red
    list-style-type: none
    margin: 0px 10px 10px 0
</style>
