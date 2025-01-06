declare global {
  namespace Store {
    export type ModulePart = (...args: never[]) => unknown

    export interface Module {
      name: string
      saga?: ModulePart
      reducer?: ModulePart
    }

    export type ModuleWithSaga = Module & Required<Pick<Module, 'saga'>>

    export type Modules = Module[]

    export type RawModule = Omit<Module, 'name'>

    export type RawModules = Record<string, RawModule>
  }
}

export {}
