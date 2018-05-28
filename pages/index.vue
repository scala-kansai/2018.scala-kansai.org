<template>
  <section>
    <sec-hero></sec-hero>
    <sec-about></sec-about>
    <sec-wanted></sec-wanted>
    <sec-time-table></sec-time-table>
    <sec-access></sec-access>
    <sec-sponsor></sec-sponsor>
    <sec-thanks></sec-thanks>
  </section>
</template>

<script>
import secHero from '~/components/pages/Top/Hero.vue'
import secAbout from '~/components/pages/Top/About.vue'
import secWanted from '~/components/pages/Top/Wanted.vue'
import secTimeTable from '~/components/pages/Top/TimeTable.vue'
import secAccess from '~/components/pages/Top/Access.vue'
import secSponsor from '~/components/pages/Top/Sponsor.vue'
import secThanks from '~/components/pages/Top/Thanks.vue'

export default {
  components: {
    secHero,
    secAbout,
    secWanted,
    secTimeTable,
    secAccess,
    secSponsor,
    secThanks
  }
}
</script>

<style>


</style>
