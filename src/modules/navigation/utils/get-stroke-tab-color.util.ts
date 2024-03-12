import { COLORS } from '../../../shared/themes';

export const getStrokeTabColor = (isFocused: boolean): string => {
	return isFocused ? COLORS.antiFlashWhite : COLORS.internationalOrange;
};
