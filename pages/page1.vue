<template>
  <div>
    <h1>
      Page 1
    </h1>
    <client-only>
      <graph-bar
        :width="600"
        :height="400"
        :axis-min="0"
        :axis-max="50"
        :labels="[ '1Q', '2Q', '3Q', '4Q' ]"
        :values="values"
        theme="classic"
      >
        <!-- <note :text="'Bar Chart'"></note>-->
        <tooltip :names="names" :position="'left'" />
        <legends :names="names" :filter="true" />
      </graph-bar>

      <hr>

      <vue-funnel-graph
        :width="width"
        :height="height"
        :labels="labels"
        :values="funnelValues"
        :colors="colors"
        :sub-labels="subLabels"
        :direction="direction"
        :gradient-direction="gradientDirection"
        :animated="true"
        :display-percentage="true" />
    </client-only>
  </div>
</template>

<script>

export default {
  name: 'Page1',
  data () {
    return {
      names: [ 'MS', 'Apple', 'Google' ],
      values: [
        [ 10, 5, 5, 5 ],
        [ 40, 10, 10, 10 ],
        [ 30, 30, 30, 30 ]
      ],
      labels: ['Impressions', 'Add To Cart', 'Buy'],
      subLabels: ['Direct', 'Social Media', 'Ads'],
      funnelValues: [
        [3000, 2500, 6500], // Segments of "Impressions" from top to bottom
        [3000, 1700, 1000], // Segments of "Add To Cart"
        [600, 200, 130] // Segments of "Buy"
      ],
      colors: [
        ['#FFB178', '#FF3C8E'], // color set for "Impressions" segment
        ['#A0BBFF', '#EC77FF'], // color set for "Add To Cart" segment
        ['#A0F9FF', '#7795FF'] // color set for "Buy" segment
      ],
      direction: 'vertical',
      gradientDirection: 'horizontal',
      height: 300,
      width: 800
    }
  }
}
</script>

<style scoped>
  .small {
    max-width: 600px;
    margin:  150px auto;
  }
</style>
