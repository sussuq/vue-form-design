<!-- Created by 337547038 -->
<template>
  <div v-loading='state.loading' style='min-height: 500px'>
    <ak-form
      ref='formEl'
      :formData='state.formData'
      :type='formType'
      :dict='state.dict'
      :value='formValue'
      requestUrl='getFormContent'
      addUrl='saveFormContent'
      editUrl='editFormContent'
      :beforeSubmit='beforeSubmit'
      :afterSubmit='afterSubmit'
    />
  </div>
</template>

<script setup lang='ts'>
  import { ref, reactive, onMounted, computed, nextTick, getCurrentInstance } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  import { getRequest } from '@/api'
  import { ElMessage } from 'element-plus'
  import { string2json, stringToObj } from '@/utils/form'
  import { useLayoutStore } from '@/store/layout'

  const layoutStore = useLayoutStore()
  const route = useRoute().query
  const router = useRouter()
  const { proxy } = getCurrentInstance()

  const formEl = ref()
  const state = reactive({
    formData: {
      list: [],
      form: {},
      config: {}
    },
    dict: {},
    id: route.id,
    loading: true
  })
  const formType = ref(1)
  const formValue = ref({})
  const getFormData = (val: any) => {
    return new Promise<void>(resolve => {
      const resData = stringToObj(val.formContent)
      state.loading = true
      try {
        state.formData = resData.formData
        state.dict = resData.formDict
        nextTick(() => {
          state.loading = false
          resolve()
        })
      } catch (err) {
        ElMessage.error('加载异常')
        console.error('表单数据加载异常', err)
        state.loading = false
      }
    })
  }
  const beforeSubmit = (params: any) => {
    params.formId = state.formId
    params.id = route.id
    return params
  }
  const afterSubmit = (type: string) => {
    if (type === 'success') {
      router.go(-1)
    }
  }

  /**
   * 表单提交事件
   */
  function onClickBtnSubFormAk() {
    proxy.$refs.formEl.validate((valid: boolean, fields: any) => {
      if (valid) {
        // 表单业务数据传回oa
        const formValue = proxy.$refs.formEl.getValue()
        window.parent.postMessage(
          { messageType: 'formValue', data: JSON.parse(JSON.stringify(formValue)) },
          '*'
        )
      }
    })
  }

  // 接收父组件参数
  window.addEventListener(
    'message',
    function(e) {
      if (e.data.type === 'formInfo') {
        if (e.data.data.formValue) {
          // 数据反显
          formType.value = 3
          getFormData(JSON.parse(e.data.data.formData)).then(() => {
              const _formValue = JSON.parse(e.data.data.formValue)
              proxy.$refs.formEl.setValue(_formValue)
            }
          )

        } else {
          // 表单渲染
          formType.value = 1
          getFormData(e.data.data)
        }
      } else if (e.data.type === 'formEvent') {
        if (e.data.data === 'submit') {
          onClickBtnSubFormAk()
        }
      }
    },
    false
  )
  onMounted(() => {
    // 告诉父组件iframe的加载状态
    window.parent.postMessage(
      { messageType: 'iframeLoadStatus', data: true },
      '*'
    )
  })
</script>
