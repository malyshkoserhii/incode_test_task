import * as React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { styles } from './characters-list-item.styles';
import { Character } from '../../../../shared/types';
import Heart from '../../../../assets/icons/heart.svg';
import { COLORS } from '../../../../shared/themes';
import { PressarableIcon } from '../../../../shared/components/pressarable-icon';

type CharactersListItemProps = {
	character: Character;
	isFavorite: boolean;
	getCharacterInfo: (character: Character) => void;
	getFavoriteCharacter: (character: Character) => void;
};

const ListItem: React.FunctionComponent<CharactersListItemProps> = ({
	character,
	getCharacterInfo,
	getFavoriteCharacter,
	isFavorite,
}) => {
	const onItemPress = () => {
		getCharacterInfo(character);
	};

	const onHeartPress = () => {
		getFavoriteCharacter(character);
	};

	return (
		<TouchableOpacity style={styles.container} onPress={onItemPress}>
			<View style={styles.nameBox}>
				<Text style={styles.title}>Name:</Text>
				<Text numberOfLines={1} style={styles.name}>
					{character?.name}
				</Text>
			</View>
			<View style={styles.box}>
				<Text style={styles.title}>Date of Birth:</Text>
				<Text style={styles.name}>{character?.birth_year}</Text>
			</View>
			<View style={styles.box}>
				<Text style={styles.title}>Gender:</Text>
				<Text style={styles.name}>{character?.gender}</Text>
			</View>
			<View style={styles.iconWrapper}>
				<PressarableIcon
					icon={
						<Heart
							strokeWidth={6}
							stroke={
								isFavorite
									? COLORS.internationalOrange
									: COLORS.antiFlashWhite
							}
							fill={
								isFavorite
									? COLORS.internationalOrange
									: 'transparent'
							}
							width={20}
							height={20}
						/>
					}
					onPress={onHeartPress}
				/>
			</View>
		</TouchableOpacity>
	);
};

export const CharactersListItem = React.memo(ListItem);
