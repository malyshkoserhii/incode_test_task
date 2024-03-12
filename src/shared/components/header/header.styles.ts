import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from '../../themes';

export const styles = StyleSheet.create({
	container: {
		position: 'relative',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingVertical: 16,
		paddingHorizontal: 16,
		marginBottom: 32,
		backgroundColor: COLORS.smokyBlack,
		borderBottomWidth: 1,
		borderStyle: 'solid',
		borderBottomColor: COLORS.dimGrey,
	},
	titleBox: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	title: {
		flexGrow: 1,
		fontSize: 26,
		fontFamily: FONTS.Roboto.regular,
		color: COLORS.antiFlashWhite,
		lineHeight: 34,
		textAlign: 'center',
	},
	pressarableIcon: {
		position: 'absolute',
		top: 16,
		left: 16,
		width: 40,
		height: 40,
	},
	rightButtonWrapper: {
		position: 'absolute',
		top: 16,
		right: 16,
		flexDirection: 'row',
		alignItems: 'center',
	},
	dummy: {
		position: 'absolute',
		top: 16,
		right: 16,
		width: 40,
		height: 40,
	},
});
