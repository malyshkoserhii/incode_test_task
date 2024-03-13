import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from '../../../../shared/themes';

export const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
	},
	title: {
		fontFamily: FONTS.Roboto.regular,
		fontSize: 14,
		color: COLORS.antiFlashWhite,
		marginBottom: 4,
	},
	name: {
		fontFamily: FONTS.Roboto.regular,
		fontSize: 16,
		color: COLORS.antiFlashWhite,
	},
	nameBox: {
		width: '44%',
	},
	box: {
		width: '28%',
	},
});
