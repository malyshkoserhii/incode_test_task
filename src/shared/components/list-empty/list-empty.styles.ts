import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from '../../../shared/themes';

export const styles = StyleSheet.create({
	conrainer: {
		width: '100%',
	},
	text: {
		fontFamily: FONTS.Roboto.medium,
		fontSize: 16,
		lineHeight: 18,
		color: COLORS.dimGrey,
	},
});
