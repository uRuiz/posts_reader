import React from "react";
import { PostsScreen } from "./app/screens/PostScreen/PostsScreen";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { FavoritesProvider } from "./app/context/FavoritesContext";

const App: React.FC = () => {
  return (
    <FavoritesProvider>
      <SafeAreaProvider>
        <SafeAreaView>
          <PostsScreen />
        </SafeAreaView>
      </SafeAreaProvider>
    </FavoritesProvider>
  );
};

export default App;
