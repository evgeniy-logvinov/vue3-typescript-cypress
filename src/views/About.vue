<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Table/>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Table } from '@/components'; // @ is an alias to /src

@Component({
  components: {
    Table,
  },
})
export default class Home extends Vue {}
</script>
