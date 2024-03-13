import * as React from 'react';
import { Text, View } from 'react-native';

import { styles } from './info-box.styles';

type InfoBoxProps = {
	title: string;
	description: string | Array<string>;
};

export const InfoBox: React.FunctionComponent<InfoBoxProps> = ({
	title,
	description,
}) => {
	return (
		<View
			style={[
				styles.container,
				Array.isArray(description) && styles.column,
			]}
		>
			<Text
				style={[
					styles.title,
					Array.isArray(description) && styles.titleMb,
				]}
			>
				{title}
			</Text>
			{Array.isArray(description) ? (
				description?.map((el) => {
					return (
						<Text
							key={el}
							style={[
								styles.description,
								Array.isArray(description) && styles.titleMb,
							]}
						>
							{el}
						</Text>
					);
				})
			) : (
				<Text style={styles.description}>{description}</Text>
			)}
		</View>
	);
};
