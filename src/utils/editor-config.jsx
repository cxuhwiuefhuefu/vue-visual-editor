/*
 * @Author: Sunny
 * @Date: 2022-10-12 18:36:03
 * @LastEditors: Suuny
 * @LastEditTime: 2022-10-28 15:24:01
 * @Description: 
 * @FilePath: /vue-visual-editor/src/utils/editor-config.jsx
 */

// 列表区可以显示所有的物料 
// key对应的组件映射关系

import { ElButton, ElInput  } from 'element-plus'

function createEditorConfig () {
    const componentList = [];
    const componentMap = {};

    return {
        componentList,
        componentMap,
        register: (component) => {
            console.log('components', component)
            componentList.push(component)
            componentMap[component.key] = component
        }
    }
}
export let registerConfig = createEditorConfig();
console.log('registerConfig------', registerConfig)


registerConfig.register ({
    label: '文本',
    preview: () => '预览为本',
    render: () => '渲染文本',
    key: 'text'
})

registerConfig.register ({
    label: '按钮',
    preview: () => <ElButton>预览按钮</ElButton>,
    render: () => <ElButton>渲染按钮</ElButton>,
    key: 'button'
})

registerConfig.register ({
    label: '输入框',
    preview: () => <ElInput placeholder="预览输入框"></ElInput>,
    render: () => <ElInput placeholder="渲染输入框">渲染按钮</ElInput>,
    key: 'input'
})
