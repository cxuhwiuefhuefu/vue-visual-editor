/*
 * @Author: Sunny
 * @Date: 2022-10-12 16:47:05
 * @LastEditors: Suuny
 * @LastEditTime: 2022-10-30 13:05:42
 * @Description: 
 * @FilePath: /vue-visual-editor/src/packages/editor-block.jsx
 */

import { computed, defineComponent, inject } from "vue";

export default defineComponent({
    props: {
        block: {
            type: Object
        }
    },
    setup (props) {
        const blockStyles = computed(() => ({
            top: `${props.block.top}px`,
            left: `${props.block.left}px`,
            zIndex: `${props.block.zIndex}px`
        }))
        const config = inject('config');
        console.log('config', config, props.block.key)
        return () => {
            // 通过 block 的 key 属性直接获取对应的组件
            const component= config.componentMap[props.block.key];
            // 获取 render 函数
            const RenderComponent = component.render(); 
            return <div class="editor-class" style={ blockStyles.value }>
                {RenderComponent}
            </div>
        }
    }
})
