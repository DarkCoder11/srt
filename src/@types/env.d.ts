declare global {
  namespace NodeJS {
    interface ProcessEnv {
      readonly API_PATH: string;
    }
  }
}

export {};
