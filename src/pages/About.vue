<template>
   <it-progressbar infinite />
   <Foo></Foo>
   <div class="container mx-auto grid-rows-4 gap-2">
      <h3>Input</h3>

      <it-input v-model="inputValue" type="date" />
      <it-input v-model="inputValue" type="time" />
      <it-input type="week" v-model="inputValue" />
   </div>
   <it-button type="danger" size="small" round>Button</it-button>
   <it-button type="warning" size="small" round>Button</it-button>
   <it-button type="black" round>Button</it-button>
   <it-button @click="$Loading.start()">Start</it-button>
   <it-button @click="$Loading.update(50)">Set 50%</it-button>
   <it-button @click="$Loading.finish()">Finish</it-button>
   <it-badge type="danger" point>
      <it-button icon="mail_outline"></it-button>
   </it-badge>
   <it-badge type="success" point>
      <it-button icon="thumb_up"></it-button>
   </it-badge>
   <it-button
      type="success"
      @click="
         $Notification.danger({
            title: 'Success notification',
            text: 'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet',
         })
      "
      >Success notification</it-button
   >
   <it-tooltip content="Right" placement="right">
      <it-button>Right</it-button>
   </it-tooltip>
</template>

<script lang="ts" setup>
import { getCurrentInstance, ref } from 'vue';
import ItButton from 'library/components/button';
import ItBadge from 'library/components/badge';
import ItInput from 'library/components/input';
import Foo from '~/components/Foo';

const app = getCurrentInstance();
const globalProperties = app?.appContext.config.globalProperties;
const $Notification = globalProperties?.$Notification;
const $Loading = globalProperties?.$Loading;

let inputValue = ref('');
</script>

<style scoped>
h1 {
   color: red;
}
</style>
