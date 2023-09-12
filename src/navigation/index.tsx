import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../features/authSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeFromToken } from "../features/authSlice";
// import PrivateNavigation from "./PrivateNavigation";
import AuthStack from "./AuthStack";
import SplashScreen from "../screens/SplashScreen";
import BottomNav from "./BottomNav";

const Root = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const { user, isAuthenticated } = useSelector(selectUser);

  useEffect(() => {
    const verifyUser = async () => {
      const token = await AsyncStorage.getItem("accessToken");

      if (token) {
        dispatch(initializeFromToken(token));
        setLoading(false);
      }

      setLoading(false);
    };

    verifyUser();
  }, [user, isAuthenticated]);

  if (loading) {
    return <SplashScreen />;
  }

  return isAuthenticated ? <BottomNav /> : <AuthStack />;
};

export default Root;
