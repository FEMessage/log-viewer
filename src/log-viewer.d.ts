import Vue, {VueConstructor} from 'vue'

declare module '@femessage/log-viewer' {
  class FemessageComponent extends Vue {
    static install(vue: typeof Vue): void
  }

  type CombinedVueInstance<
    Instance extends Vue,
    Data,
    Methods,
    Computed,
    Props
  > = Data & Methods & Computed & Props & Instance

  type ExtendedVue<
    Instance extends Vue,
    Data,
    Methods,
    Computed,
    Props
  > = VueConstructor<
    CombinedVueInstance<Instance, Data, Methods, Computed, Props> & Vue
  >

  type Combined<Data, Methods, Computed, Props> = Data &
    Methods &
    Computed &
    Props

  type LogViewerData = {
    start: number
    scrollStart: number
    animate: any
    LineWrapper: any
  }

  type LogViewerMethods = {}

  type LogViewerComputed = {}

  type LogViewerProps = {
    virtualAttrs: object
    rowHeight: number
    height: number
    log: string
    loading: boolean
    autoScroll: boolean
    hasNumber: boolean
    scrollDuration: number
  }

  type LogViewer = Combined<
    LogViewerData,
    LogViewerMethods,
    LogViewerComputed,
    LogViewerProps
  >

  export interface LogViewerType extends FemessageComponent, LogViewer {}

  const LogViewerConstruction: ExtendedVue<
    Vue,
    LogViewerData,
    LogViewerMethods,
    LogViewerComputed,
    LogViewerProps
  >

  export default LogViewerConstruction
}
