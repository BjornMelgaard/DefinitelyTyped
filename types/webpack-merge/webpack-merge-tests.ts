import webpackMerge, { CustomizationObj } from "webpack-merge"
import { Configuration } from "webpack";

// fixtures
const a: Configuration = {
  entry: "test.js"
}
const b: Configuration = {
  devtool: "source-map"
}

// merge
const bogusCustomizer: CustomizationObj = {
  customizeArray(a, b, key) {
    return undefined;
  },
  customizeObject(a, b, key) {
    return undefined;
  }
}

var output = webpackMerge.merge(bogusCustomizer)(a, b);

