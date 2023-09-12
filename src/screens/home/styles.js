import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	welcomeText: {
		marginVertical: 20,
		fontWeight: 'bold',
		fontSize: 24,
	},

	searchBarWrapper: {
		paddingHorizontal: 10,
	},
	cardsContainer: {
		flex: 1,
		marginTop: 20,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.5,
		shadowRadius: 2,
		elevation: 2,
		paddingHorizontal: 10,
	},

	card: {
		position: 'relative',
		// borderRadius: 20,
	},
	cardTitle: {
		position: 'absolute',
		fontStyle: 'italic',
		bottom: 0,
		color: '#fff',
		fontWeight: 'bold',
		fontSize: 22,
		padding: 18,
		textShadowColor: 'rgba(0, 0, 0, 0.75)',
		textShadowOffset: { width: -1, height: 1 },
		textShadowRadius: 10,
	},
	background: {
		position: 'relative',
		height: 200,
		borderRadius: 10,
	},
	createButton: {
		position: 'absolute',
		alignSelf: 'center',
		bottom: 20,
	},
});
