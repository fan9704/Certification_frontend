<template>
  <div style="width: 400px">
    <div style="display: flex; justify-content: center">
      <button class="button" type="button" @click="shuffleData">Shuffle</button>
      <button class="button" type="button" @click="switchLegend">Swicth legends</button>
    </div>
    <DoughnutChart v-bind="doughnutChartProps" />
  </div>
</template>


<script>
import { computed, ref } from "vue";
import { shuffle } from "lodash";
import { DoughnutChart, useDoughnutChart } from "vue-chart-3";
import { Chart, registerables } from "chart.js"; //, ChartData, ChartOptions

Chart.register(...registerables);

export default {
  name: "GraphView",
  components: { DoughnutChart },
  setup() {
    const dataValues = ref([30, 40, 60, 70, 5]);
    const toggleLegend = ref(true);
    const testData = computed(() => ({
      //<ChartData<"doughnut">>
      labels: ["Paris", "Nîmes", "Toulon", "Perpignan", "Autre"],
      datasets: [
        {
          data: dataValues.value,
          backgroundColor: [
            "#77CEFF",
            "#0079AF",
            "#123E6B",
            "#97B0C4",
            "#A5C8ED",
          ],
        },
      ],
    }));

    const options = computed(() => ({
      //<ChartOptions<"doughnut">>
      scales: {
        myScale: {
          type: "logarithmic",
          position: toggleLegend.value ? "left" : "right",
        },
      },
      plugins: {
        legend: {
          position: toggleLegend.value ? "top" : "bottom",
        },
        title: {
          display: true,
          text: "Chart.js Doughnut Chart",
        },
      },
    }));

    const { doughnutChartProps, doughnutChartRef } = useDoughnutChart({
      chartData: testData,
      options,
    });

    function shuffleData() {
      dataValues.value = shuffle(dataValues.value);
      console.log(doughnutChartRef.value.chartInstance);
    }

    function switchLegend() {
      toggleLegend.value = !toggleLegend.value;
    }

    return {
      shuffleData,
      switchLegend,
      testData,
      options,
      doughnutChartRef,
      doughnutChartProps,
    };
  },
};
</script>

<style>
button.button {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color:white;
  padding: 10px;
  background: black;
  border-radius:5px;
  margin-top: 60px;
}
</style>

