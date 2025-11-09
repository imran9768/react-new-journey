import MainLayout from "./components/layouts/layout";
import RenderingList from "./components/pages/renderingList";
import ConditionalRendering from "./components/pages/conditionalRendering";
import UseReactState from "./components/pages/useReactState";
import TwoWayBinding from "./components/pages/twoWayBinding";

export default function App() {
  return (
    <MainLayout>
      <RenderingList />
      <hr />
      <ConditionalRendering />
      <hr/>
      <UseReactState />
      <hr />
      <TwoWayBinding />
      <hr />
    </MainLayout>
  );
}
