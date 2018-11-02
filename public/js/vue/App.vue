<template lang="pug">
  div
    .container
      input(type='hidden', name='_csrf', :value="csrfToken")
      p.result
</template>
<script>
import header from "./components/partials/header.vue";
import footer from "./components/partials/footer.vue";
export default {
  data: function() {
    return {
      resultsMode: true
    };
  },
  components: {
    vheader: header,
    vfooter: footer
  },
  mounted: function(argument) {
    this.getData();
  },
  methods: {
    getData: function() {
      this.$http.get("/api/departure").then(
        response => {
          for (let index = 0; index < response.body.length; index++) {
            const e = response.body[index];
            console.log(e);
            var pTag = "<p></p>";
            $(".result").append($(pTag).text(e.DepartureTime));
          }
        },
        err => {}
      );
    }
  }
};
</script>