import { COLORS } from '../../../shared/themes';

export const getFillTabColor = (isFocused: boolean): string => {
	return isFocused ? COLORS.internationalOrange : COLORS.antiFlashWhite;
};
