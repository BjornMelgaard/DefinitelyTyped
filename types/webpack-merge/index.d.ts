// Type definitions for webpack-merge
// Project: https://github.com/survivejs/webpack-merge
// Definitions by: Simon Hartcher <https://github.com/deevus>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

///<reference types="webpack" />

declare module "webpack-merge" {
  import { Configuration } from "webpack";

  // interfaces
  interface ConfigurationJoiner {
    (...configuration: Configuration[]): Configuration
    (configuration: Configuration[]): Configuration
  }

  type CustomizeFunc = (a: any, b: any, key: string) => any
  type CustomizationObj = {
    customizeArray:  CustomizeFunc,
    customizeObject: CustomizeFunc
  }

  type StrategyType = 'prepend' | 'append' | 'replace'
  type StrategyMap = { [feild: string]: StrategyType }

  // core
  interface WebpackMerge {
    /**
    * Merge multiple webpack configurations into one.
    */
    (...configuration: Configuration[]): Configuration

    /**
    * Merge array of webpack configurations into one.
    */
    (configuration: Configuration[]): Configuration

    /**
    * Merge multiple webpack configurations into one with custom behavior.
    */
    (customizationObj: CustomizationObj): ConfigurationJoiner

    /**
    * Unique merge strategy
    */
    unique: (
      key: string,
      uniques: string[],
      getter: (a: any) => any
    ) => any

    /**
     * Merging with a customizable merge strategy
     */
    strategy: (options: StrategyMap) => ConfigurationJoiner

    /**
     * Merging with a customizable smart merge strategy
     */
    smartStrategy: (options: StrategyMap) => ConfigurationJoiner

    /**
     * Merging with a smart merge strategy
     */
    smart: ConfigurationJoiner

    /**
     * Merging with a multiple merge strategy
     */
    multiple: ConfigurationJoiner
  }

  const merge: WebpackMerge;
  export = merge;
}
