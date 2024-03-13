import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from '../../../../shared/themes';

export const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	title: {
		fontFamily: FONTS.Roboto.regular,
		fontSize: 14,
		color: COLORS.antiFlashWhite,
		marginBottom: 4,
	},
	name: {
		fontFamily: FONTS.Roboto.medium,
		fontSize: 16,
		color: COLORS.antiFlashWhite,
	},
	nameBox: {
		paddingRight: 2,
		width: '42%',
	},
	box: {
		paddingRight: 2,
		width: '25%',
	},
	iconWrapper: {
		justifyContent: 'center',
		alignItems: 'center',
		width: '8%',
	},
});
