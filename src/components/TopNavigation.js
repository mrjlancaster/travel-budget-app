import { View, StyleSheet, Text } from 'react-native';
import { AntDesign } from 'react-native-vector-icons';

const TopNavigation = ({ title, goback }) => {
	const handleGoBack = () => goback();

	return (
		<View style={styles.container}>
			{/* <AntDesign name="left" onPress={handleGoBack} /> */}
			<Text style={styles.title}>{title}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginTop: 30,
	},
	title: {
		paddingHorizontal: 10,
		fontWeight: 'bold',
		fontSize: 24,
	},
});

export default TopNavigation;
