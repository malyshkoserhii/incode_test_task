import * as React from 'react';
import { Text, View } from 'react-native';

import { styles } from './gender-info.styles';
import { Button } from '../../../../shared/components/button';
import { CustomModal } from '../../../../shared/components/custom-modal';
import { useCharactersState } from '../../../../shared/selectors';
import { useInitGenderInfo } from '../../hooks/init-gender.hook';

export const GenderInfo = () => {
	const [isVisible, setIsVisible] = React.useState(false);

	useInitGenderInfo();

	const { favorites, genderInfo, resetFavorites, resetGenderInfo } =
		useCharactersState();

	const onReset = () => {
		resetFavorites();
		resetGenderInfo();
		onCloseModal();
	};

	const onOpenModal = () => {
		setIsVisible(true);
	};

	const onCloseModal = () => {
		setIsVisible(false);
	};

	return (
		<>
			<View style={styles.contentContainer}>
				<View style={styles.container}>
					<View style={styles.infoBox}>
						<Text style={styles.number}>{genderInfo.male}</Text>
						<Text style={styles.title}>Male</Text>
					</View>
					<View style={styles.infoBox}>
						<Text style={styles.number}>{genderInfo.female}</Text>
						<Text style={styles.title}>Female</Text>
					</View>
					<View style={styles.infoBox}>
						<Text style={styles.number}>{genderInfo.others}</Text>
						<Text style={styles.title}>Others</Text>
					</View>
				</View>
				<Button
					text="Reset favorites"
					disabled={favorites.length === 0}
					onPress={onOpenModal}
					additionalBtnStyles={styles.resetBtn}
				/>
			</View>
			<CustomModal
				title="Do you want reset favorites?"
				isVisible={isVisible}
				close={onCloseModal}
			>
				<View style={styles.btnsWrapper}>
					<Button
						text="Yes"
						onPress={onReset}
						additionalBtnStyles={styles.yesBtn}
					/>
					<Button
						text="No"
						onPress={onCloseModal}
						additionalBtnStyles={styles.noBtn}
					/>
				</View>
			</CustomModal>
		</>
	);
};
