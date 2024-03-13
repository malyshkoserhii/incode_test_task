import * as React from 'react';
import { FlatList, ListRenderItem } from 'react-native';

import { styles } from './characters-list.styles';
import { Character } from '../../../../shared/types';
import { CharactersListItem } from '../characters-list-item';
import { ListEmpty } from '../../../../shared/components/list-empty';
import { ItemSeparator } from '../../../../shared/components/item-separator';
import { Loader } from '../../../../shared/components/loader';

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
	const getCharacterInfo = (character: Character) => {};

	const renderItem: ListRenderItem<Character> = React.useCallback(
		({ item }) => {
			return (
				<CharactersListItem
					character={item}
					getCharacterInfo={getCharacterInfo}
				/>
			);
		},
		[],
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
