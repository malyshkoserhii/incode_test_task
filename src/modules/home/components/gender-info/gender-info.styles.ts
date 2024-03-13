import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from '../../../../shared/themes';

export const styles = StyleSheet.create({
	contentContainer: {
		marginBottom: 20,
	},
	container: {
		flexDirection: 'row',
		paddingHorizontal: 16,
		marginBottom: 20,
		justifyContent: 'space-between',
	},
	number: {
		fontFamily: FONTS.Roboto.medium,
		fontSize: 36,
		marginBottom: 10,
		color: COLORS.antiFlashWhite,
	},
	title: {
		fontFamily: FONTS.Roboto.bold,
		fontSize: 16,
		color: COLORS.antiFlashWhite,
	},
	infoBox: {
		padding: 10,
		width: 100,
		borderWidth: 1,
		borderColor: COLORS.chineseSilver,
	},
	resetBtn: {
		width: '50%',
		alignSelf: 'center',
	},
	btnsWrapper: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		paddingHorizontal: 24,
		paddingVertical: 24,
		backgroundColor: COLORS.eerieBlack,
		borderTopLeftRadius: 32,
		borderTopRightRadius: 32,
	},
	yesBtn: {
		width: 160,
		marginRight: 12,
		backgroundColor: COLORS.dimGrey,
	},
	noBtn: {
		width: 160,
	},
});
