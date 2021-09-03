<script lang="ts">
import { defineComponent, ref } from 'vue';
import ItButton from 'library/components/button';
import ItBadge from 'library/components/badge';
import ItInput from 'library/components/input';

export default defineComponent({
   components: { ItButton, ItBadge, ItInput },
   name: 'App',
   setup(props) {
      let inputValue = ref('');

      return { inputValue };
   },
});
</script>
<template>
   <!-- <it-progressbar infinite /> -->
   <div class="container mx-auto grid-rows-4 gap-2">
      <h3>Input</h3>

      <it-input v-model="inputValue" type="date" suffix-icon="remove_red_eye" />
      <it-input v-model="inputValue" type="datetime-local" prefix-icon="cloud_queue" />
      <it-input
         type="week"
         v-model="inputValue"
         suffix-icon="remove_red_eye"
         prefix-icon="cloud_queue"
      />
   </div>
   <it-button type="danger" size="small" class="!rounded-full">Button</it-button>
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
   <router-view />
</template>

<style lang="less" scoped></style>
