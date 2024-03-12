import * as React from 'react';
import { ActivityIndicator, View } from 'react-native';

import { styles } from './loader.styles';

type LoaderProps = {
	isLoading: boolean;
	size?: number;
};

export const Loader: React.FunctionComponent<LoaderProps> = ({
	isLoading,
	size = 16,
}) => {
	return (
		<View style={styles.loaderWrapper}>
			{isLoading ? <ActivityIndicator size={size} /> : null}
		</View>
	);
};
