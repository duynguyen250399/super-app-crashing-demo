import React from 'react';
import { Text, View } from 'react-native';

// @ts-ignore
const FoodApp = React.lazy(() => import('mfeFood'));

const FoodAppFallback = () => {
  return <Text>Loading food app...</Text>;
};

const App = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', paddingHorizontal: 16 }}>
      <View
        style={{
          borderWidth: 1,
          padding: 24,
          borderColor: 'gray',
          marginBottom: 32,
        }}
      >
        <Text>Text from Host app</Text>
      </View>
      <View style={{ borderWidth: 1, padding: 32, borderColor: 'blue' }}>
        <React.Suspense fallback={<FoodAppFallback />}>
          <FoodApp />
        </React.Suspense>
      </View>
    </View>
  );
};

export default App;
