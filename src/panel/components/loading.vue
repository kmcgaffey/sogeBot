<template>
  <div class="text-center" style="margin:auto;">
    <b-spinner variant="primary"
    style="width: 5rem; height: 5rem;"
      :style="{
        'margin-top': noMargin ? '0' : '5rem'
      }"></b-spinner>
    <div
      style="text-transform: uppercase; letter-spacing: 1px; font-size: 0.7rem; position: relative; top: -3rem; max-width: fit-content;"
      class="text-primary text-center m-auto bg-transparent">{{ translate('loading') }}</div>
    <div
      v-if="slow"
      style="text-transform: uppercase; letter-spacing: 1px; font-size: 0.7rem; position: relative; top: -1rem; max-width: fit-content;"
      class="text-primary text-center m-auto bg-transparent" v-html="translate('this-may-take-a-while')"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { BSpinner } from 'bootstrap-vue'

import translate from 'src/panel/helpers/translate';

export default defineComponent({
  props: {
    noMargin: Boolean,
    slow: Boolean,
  },
  setup(props) {
    return {
      translate,
      ...BSpinner
    };
  }
})
</script>