import { defineComponent  } from 'vue'
import './foo.less'

// named exports w/ variable declaration: ok
export default defineComponent({
  name: 'foo',
  setup() {
    return () => <div class="jsx">from JSX 3232</div>
  }
})
