import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { NavContainer } from '../nav-container/nav-container.component';
import {
	NAVIGATION_KEYS,
	RootStackParamList,
} from '../../types/navigation.type';
import { SCREEN_OPTIONS } from '../../constants/screen-options';
import { CharacterInfoScreen, HomeScreen } from '../../../../modules/home';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
	const screens = React.useMemo(() => {
		return (
			<>
				<Stack.Screen
					name={NAVIGATION_KEYS.HOME}
					component={HomeScreen}
					options={SCREEN_OPTIONS}
				/>
				<Stack.Screen
					name={NAVIGATION_KEYS.CHARACTER_INFO}
					component={CharacterInfoScreen}
					options={SCREEN_OPTIONS}
				/>
			</>
		);
	}, []);

	return (
		<NavContainer>
			<Stack.Navigator initialRouteName={NAVIGATION_KEYS.HOME}>
				{screens}
			</Stack.Navigator>
		</NavContainer>
	);
};
