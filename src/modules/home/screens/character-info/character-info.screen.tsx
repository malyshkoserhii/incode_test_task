import * as React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { NavigationProp, useNavigation } from '@react-navigation/native';

import { Skeleton } from '../../../../shared/components/skeleton';
import { Header } from '../../../../shared/components/header';
import {
	NAVIGATION_KEYS,
	RootStackParamList,
} from '../../../../modules/navigation/types/navigation.type';
import { InfoBox } from '../../components/info-box';
import {
	useGetPlanet,
	useGetSpecies,
	useGetStarships,
	useGetVehicles,
} from '../../hooks';
import { useGetFilms } from '../../hooks/get-films';
import { ScrollView } from 'react-native';
import { PressarableIcon } from '../../../../shared/components/pressarable-icon';
import Heart from '../../../../assets/icons/heart.svg';
import { COLORS } from '../../../../shared/themes';
import { useFavorites } from '../../hooks/favorites.hook';

export type CharacterInfoScreenProps = NativeStackScreenProps<
	RootStackParamList,
	NAVIGATION_KEYS.CHARACTER_INFO
>;

export const CharacterInfoScreen: React.FunctionComponent<
	CharacterInfoScreenProps
> = ({ route }) => {
	const character = React.useMemo(() => {
		return route?.params?.character;
	}, []);

	const { isFavorite, toggleFavorite } = useFavorites();

	const { homeword } = useGetPlanet({ character });
	const { films } = useGetFilms({ character });
	const { starships } = useGetStarships({ character });
	const { vehicles } = useGetVehicles({ character });
	const { species } = useGetSpecies({ character });

	const navigation = useNavigation<NavigationProp<RootStackParamList>>();

	const onArrow = () => {
		navigation.goBack();
	};

	const onHeartPress = () => {
		toggleFavorite(character?.name);
	};

	return (
		<Skeleton>
			<Header
				title={character?.name}
				onArrow={onArrow}
				rightButton={
					<PressarableIcon
						icon={
							<Heart
								strokeWidth={6}
								stroke={
									isFavorite(character?.name)
										? COLORS.internationalOrange
										: COLORS.antiFlashWhite
								}
								fill={
									isFavorite(character?.name)
										? COLORS.internationalOrange
										: 'transparent'
								}
								width={30}
								height={30}
							/>
						}
						onPress={onHeartPress}
					/>
				}
			/>
			<ScrollView showsVerticalScrollIndicator={false}>
				<InfoBox title="Name: " description={character.name} />
				<InfoBox
					title="Date of birth: "
					description={character.birth_year}
				/>
				<InfoBox title="Planet: " description={homeword} />
				<InfoBox title="Gender: " description={character.gender} />
				<InfoBox title="Height: " description={character.height} />
				<InfoBox title="Mass: " description={character.mass} />
				<InfoBox title="Hair: " description={character.hair_color} />
				<InfoBox title="Skin: " description={character.skin_color} />
				<InfoBox title="Eye: " description={character.skin_color} />
				<InfoBox title="Films: " description={films} />
				<InfoBox
					title="Starships: "
					description={starships?.length === 0 ? 'none' : starships}
				/>
				<InfoBox
					title="Vehicles: "
					description={vehicles?.length === 0 ? 'none' : vehicles}
				/>
				<InfoBox
					title="Species: "
					description={species?.length === 0 ? 'none' : species}
				/>
			</ScrollView>
		</Skeleton>
	);
};
