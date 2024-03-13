import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from '../../../../shared/themes';

export const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		paddingHorizontal: 16,
		marginBottom: 10,
	},
	column: {
		flexDirection: 'column',
	},
	title: {
		fontFamily: FONTS.Roboto.bold,
		fontSize: 16,
		color: COLORS.antiFlashWhite,
	},
	titleMb: {
		marginBottom: 4,
	},
	description: {
		marginRight: 6,
		fontFamily: FONTS.Roboto.regular,
		fontSize: 16,
		color: COLORS.antiFlashWhite,
	},
});
