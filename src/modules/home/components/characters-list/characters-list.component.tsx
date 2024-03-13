import * as React from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';

import { styles } from './characters-list.styles';
import { Character } from '../../../../shared/types';
import { CharactersListItem } from '../characters-list-item';
import { ListEmpty } from '../../../../shared/components/list-empty';
import { ItemSeparator } from '../../../../shared/components/item-separator';
import { Loader } from '../../../../shared/components/loader';
import {
	NAVIGATION_KEYS,
	RootStackParamList,
} from '../../../../modules/navigation/types/navigation.type';
import { useFavorites } from '../../hooks/favorites.hook';

type CharactersListProps = {
	charactes: Array<Character>;
	onEndReached: () => Promise<void>;
	isPaginationLoading?: boolean;
};

export const CharactersList: React.FunctionComponent<CharactersListProps> = ({
	charactes,
	onEndReached,
	isPaginationLoading = false,
}) => {
	const { favorites, toggleFavorite, isFavorite } = useFavorites();

	console.log('favorites: ', favorites);

	const navigation = useNavigation<NavigationProp<RootStackParamList>>();

	const getCharacterInfo = (character: Character) => {
		navigation.navigate(NAVIGATION_KEYS.CHARACTER_INFO, {
			character,
		});
	};

	const getFavoriteCharacter = (character: Character) => {
		toggleFavorite(character?.name);
	};

	const renderItem: ListRenderItem<Character> = React.useCallback(
		({ item }) => {
			const favorite = isFavorite(item?.name);
			return (
				<CharactersListItem
					character={item}
					isFavorite={favorite}
					getCharacterInfo={getCharacterInfo}
					getFavoriteCharacter={getFavoriteCharacter}
				/>
			);
		},
		[favorites],
	);

	const renderSeparator = () => {
		return <ItemSeparator />;
	};

	return (
		<FlatList
			data={charactes}
			keyExtractor={(item) => item.name}
			renderItem={renderItem}
			onEndReached={onEndReached}
			contentContainerStyle={styles.contentContainer}
			showsVerticalScrollIndicator={false}
			ListEmptyComponent={<ListEmpty text="There are any caharacters" />}
			ListFooterComponent={
				isPaginationLoading ? (
					<Loader extraLoaderWrapperStyles={styles.loaderWrapper} />
				) : null
			}
			ItemSeparatorComponent={renderSeparator}
			onEndReachedThreshold={0.1}
		/>
	);
};
