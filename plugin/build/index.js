"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_plugins_1 = require("@expo/config-plugins");
const withRemoveJitPack = (expoConfig) => (0, config_plugins_1.withProjectBuildGradle)(expoConfig, (config) => {
    config.modResults.contents = config.modResults.contents.replace(/maven\s*{\s*url\s*'https?:\/\/(?:www\.)?jitpack\.io'\s*}/, '// jitpack removed by config-plugin-remove-jitpack');
    return config;
});
exports.default = withRemoveJitPack;
