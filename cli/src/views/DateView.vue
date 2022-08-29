<template>
  <div class="date">
    <h1>{{date}}</h1>
  </div>
</template>

<script>
    export default { 
        props: [] ,
        data: function() {
            return {
                date: ''
            }
        },
        //template: ``,
        created: function() {
          this.$data.date = new Date().toLocaleDateString();
        },
        mounted: function() {
            console.log("mounted");
        },
        updated: function() {
            console.log("updated");
        },
        components: {

        },
        computed: {

        },
        watch: {

        },
        methods: {

        },
    }
</script>

