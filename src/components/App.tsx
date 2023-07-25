import type React from "react";
import {
  Logo,
  PluginProvider,
  Stack,
  Title,
} from "@cortexapps/plugin-core/components";
import "../baseStyles.css";
import ErrorBoundary from "./ErrorBoundary";
import PluginContext from "./PluginContext";
import App from "./snow";

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <PluginProvider>
        <Stack>
          <SimpleTable config={App.config} items={App.posts} />
        </Stack>
        <PluginContext />
      </PluginProvider>
    </ErrorBoundary>
  );
};

export default App;
