/*
 * @Author: Sunny
 * @Date: 2022-10-11 22:23:30
 * @LastEditors: Suuny
 * @LastEditTime: 2022-11-01 14:06:09
 * @Description: 
 * @FilePath: /vue-visual-editor/src/packages/editor.jsx
 */

import { computed, defineComponent, inject } from "vue"
import './editor.scss'
import EditorBlock from './editor-block'

export default  defineComponent({
    props: {
        modelValue: { type: Object }
    },
    setup(props) {
        console.log("props", props.data)

        const data = computed({
            get() {
                return props.modelValue
            }
        })
        console.log('data.value', data.value)

        const containerStyles = computed(() => ({
            width: data.value.container.width + 'px',
            height: data.value.container.height + 'px'
        }))

        // console.log("containerStyles", containerStyles)
        const config = inject('config')
        console.log('config--》', config)


        return () => <div class="editor">
            <div class="editor-left">
                
                <div class="editor-left-item">
                    <span>{config.componentList[0].label}</span>
                    <span>{config.componentList[0].preview()}</span>
                </div>
                <div class="editor-left-item">
                    <span>{config.componentList[1].label}</span>
                    <span>{config.componentList[1].preview()}</span>
                </div>
                <div class="editor-left-item">
                    <span>{config.componentList[2].label}</span>
                    <span>{config.componentList[2].preview()}</span>
                </div>
                {/*  根据注册列表 渲染对应的列表内容 */}
                {
                    config.componentList.forEach(component => {
                        <div class="editor-left-item">
                            <span>{component.label}</span>
                            <div>{component.preview()}</div>
                        </div>
                    })
                }
            </div>
            <div class="editor-top">菜单栏</div>
            <div class="editor-right">属性控制栏</div>
            <div class="editor-container">
                {/* 负责产生滚动条 */}
                <div class="editor-container-canvas">
                    {/* 产生内容区域 */}
                    <div class="editor-container-canvas_content" style={ containerStyles.value }>
                        {
                            (data.value.blocks.map(block => (
                                <EditorBlock block={ block }></EditorBlock>
                            )))
                        }
                    </div>
                </div>
                
                
            </div>
        </div>
    }
})