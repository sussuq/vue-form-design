import { EDITTYPE } from '@/utils/form'

export const aceEdit = (data: any, id?: string, type?: string | undefined) => {
  id = id || 'editJson'
  type = type || EDITTYPE
  // @ts-ignore
  const editor = ace.edit(id)
  editor.setOptions({
    enableBasicAutocompletion: true,
    enableSnippets: true,
    enableLiveAutocompletion: true
  })
  editor.setFontSize(14)
  editor.setShowPrintMargin(false)
  editor.session.setMode('ace/mode/' + type)
  editor.setTheme('ace/theme/tomorrow_night')
  editor.setValue(data)
  return editor
}
// 将字符类数字转为数值类
export const formatNumber = (val: any) => {
  // 将字符类数字转为数值类
  if (val && /^\d+(\.\d+)?$/.test(val.toString())) {
    // 为数字
    return Number(val)
  } else {
    return val
  }
}
// 转所有值转为字符串类型
export const formatToString = (val: any) => {
  if (val !== undefined) {
    return val.toString()
  } else {
    return val
  }
}
// 定义两个空方法，用于在编辑事件时作为默认值
export const beforeRequest =
  'opt=(data, route) => {\n' +
  '  // data经过处理后返回\n' +
  '  return data\n' +
  '}'
export const afterResponse = 'opt=(res)=>{\nreturn res\n}'

// provide 方法定义的key
const prefix = 'AK'
export const constControlChange = prefix + 'ControlChange' // 表单组件改变事件
export const constSetFormOptions = prefix + 'SetFormOptions' // 使用setOptions设置下拉值
export const constGetControlByName = prefix + 'GetControlByName' // 根据name从formData.list查找数据
export const constFormBtnEvent = prefix + 'FormBtnEvent' // 按钮组件事件
export const constFormProps = prefix + 'FormProps' // 按钮组件事件
