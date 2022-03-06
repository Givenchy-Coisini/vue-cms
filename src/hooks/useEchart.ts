import * as echarts from 'echarts'

export default function (el: HTMLElement) {
  const echartInstance = echarts.init(el)
  const setOptions = (option: echarts.EChartsOption) => {
    echartInstance.setOption(option)
  }

  const updateSize = () => {
    echartInstance.resize()
  }
  window.addEventListener('resize', () => {
    updateSize()
  })
  return {
    echartInstance,
    setOptions,
    updateSize
  }
}
