import type { ConfigPlugin } from '@expo/config-plugins';
import { withProjectBuildGradle } from '@expo/config-plugins';

const withRemoveJitPack: ConfigPlugin = (expoConfig) =>
	withProjectBuildGradle(expoConfig, (config) => {
		config.modResults.contents = config.modResults.contents.replace(
			/maven\s*{\s*url\s*'https?:\/\/(?:www\.)?jitpack\.io'\s*}/,
			'// jitpack removed by config-plugin-remove-jitpack',
		);

		return config;
	});

export default withRemoveJitPack;
