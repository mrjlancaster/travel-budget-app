import React from 'react';
import {
	StyleSheet,
	TouchableOpacity,
	ImageBackground,
	Text,
} from 'react-native';
import { Card, Title } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const TravelCard = ({ destination }) => {
	const navigation = useNavigation();

	const handlePress = () => {
		navigation.navigate('Trip Details', { destination: destination });
	};

	console.log(destination);
	return (
		<TouchableOpacity onPress={handlePress}>
			<Card style={styles.card}>
				<ImageBackground
					source={{
						uri: `https://source.unsplash.com/random?${destination.city}+travel`,
					}}
					imageStyle={{ borderRadius: 4 }}>
					<Card.Content style={styles.cardContent}>
						<Text>Trip to</Text>
						<Title
							style={
								styles.cardTitle
							}>{`${destination.city}, ${destination.country}`}</Title>
					</Card.Content>
				</ImageBackground>
			</Card>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	card: {
		height: 140,
		borderRadius: 4,
		marginTop: 20,
	},
	cardContent: {
		position: 'relative',
		height: '100%',
	},
	cardTitle: {
		position: 'absolute',
		bottom: 0,
		fontStyle: 'italic',
		color: '#fff',
		fontWeight: 'bold',
		fontSize: 19,
		paddingBottom: 10,
		paddingHorizontal: 20,
		textShadowColor: 'rgba(0, 0, 0, 0.75)',
		textShadowOffset: { width: -1, height: 1 },
		textShadowRadius: 10,
	},
});

export default TravelCard;
