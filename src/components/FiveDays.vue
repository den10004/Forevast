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
    <h4 class="title">Прогноз на 5 дней</h4>
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

<style scoped>
.cards {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-row-gap: 10px;
  padding-left: 0;
  margin: 0 auto;
}

@media screen and (max-width: 1150px) {
  .cards {
    grid-template-columns: repeat(5, 1fr);
    max-width: 850px;
  }
}

@media screen and (max-width: 970px) {
  .cards {
    grid-template-columns: repeat(4, 1fr);
    max-width: 750px;
  }
}

@media screen and (max-width: 790px) {
  .cards {
    grid-template-columns: repeat(3, 1fr);
    max-width: 500px;
  }
}

@media screen and (max-width: 910px) {
  .cards {
    grid-template-columns: repeat(2, 1fr);
    max-width: 340px;
  }
}

@media screen and (max-width: 440px) {
  .cards {
    grid-template-columns: repeat(1, 1fr);
    max-width: 160px;
  }
}
/*
.cards {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  margin: 15px auto 0 auto;
  padding-left: 15px;
}

@media screen and (max-width: 1171px) {
  .cards {
    padding-left: 0px;
    width: 850px;
  }
}

@media screen and (max-width: 988px) {
  .cards {
    width: 680px;
  }
}

@media screen and (max-width: 796px) {
  .cards {
    width: 510px;
  }
}

@media screen and (max-width: 618px) {
  .cards {
    width: 340px;
  }
}

@media screen and (max-width: 436px) {
  .cards {
    width: 160px;
  }
}
*/
.block {
  height: 100%;
  margin-left: 10px;
  padding: 28px 16px 16px;
  background: url(/src/assets/img/gradient-1.jpg) no-repeat 0% 0%;
  background-size: cover;
  border-radius: 25px;
  margin-top: 16px;
  /*padding-left: 15px;*/
}

.card {
  width: 160px;
  height: auto;
  list-style-type: none;
  /*margin: 0px 10px 10px 0;*/
  padding: 10px;
  background: url(/src/assets/img/gradient-4.jpg) no-repeat 50% 50%;
  background-size: cover;
  border-radius: 8px;
}
/*
@media screen and (max-width: 436px) {
  .card {
    margin: 0px 0px 10px 0;
  }
}*/

.card__title {
  font-size: 13px;
  text-align: center;
  line-height: 20px;
}

.title {
  font-size: 16px;
  margin: 0 0 0 15px;
  font-weight: normal;
}

.pic-main {
  width: 60px;
  height: 60px;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: contain;
  margin: 10px auto;
}
</style>
