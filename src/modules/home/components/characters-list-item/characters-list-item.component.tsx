import * as React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { styles } from './characters-list-item.styles';
import { Character } from '../../../../shared/types';

type CharactersListItemProps = {
	character: Character;
	getCharacterInfo: (character: Character) => void;
};

const ListItem: React.FunctionComponent<CharactersListItemProps> = ({
	character,
	getCharacterInfo,
}) => {
	const onItemPress = () => {
		getCharacterInfo(character);
	};
	return (
		<TouchableOpacity style={styles.container} onPress={onItemPress}>
			<View style={styles.nameBox}>
				<Text style={styles.title}>Name:</Text>
				<Text style={styles.name}>{character?.name}</Text>
			</View>
			<View style={styles.box}>
				<Text style={styles.title}>Date of Birth:</Text>
				<Text style={styles.name}>{character?.birth_year}</Text>
			</View>
			<View style={styles.box}>
				<Text style={styles.title}>Gender:</Text>
				<Text style={styles.name}>{character?.gender}</Text>
			</View>
			<View></View>
		</TouchableOpacity>
	);
};

export const CharactersListItem = React.memo(ListItem);
