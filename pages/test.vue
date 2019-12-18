<template>
  <div>
    <client-only>
      <slick ref="slick" :options="slickOptions">
        <a href="http://placehold.it/350x150"><img src="http://placehold.it/350x150" alt=""></a>
        <a href="http://placehold.it/350x150"><img src="http://placehold.it/350x150" alt=""></a>
        <a href="http://placehold.it/350x150"><img src="http://placehold.it/350x150" alt=""></a>
        <a href="http://placehold.it/350x150"><img src="http://placehold.it/350x150" alt=""></a>
        <a href="http://placehold.it/350x150"><img src="http://placehold.it/350x150" alt=""></a>
      </slick>
    </client-only>
    <ul>
      <li>
        <nuxt-link :to="{ name: 'page-1' }" exec>
          Page 1
        </nuxt-link>
      </li>
      <li>
        <nuxt-link :to="{ name: 'page-2' }" exec>
          Page 2
        </nuxt-link>
      </li>
    </ul>
    <nuxt-child />
  </div>
</template>

<script>
export default {
  name: 'Test',
  auth: false,
  data () {
    return {
      slickOptions: {
        slidesToShow: 3
        // Any other options that can be got from plugin documentation
      }
    }
  }
}
</script>

<style scoped>

</style>
