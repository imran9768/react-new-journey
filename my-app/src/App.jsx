import MainLayout from "./components/layouts/layout";
import RenderingList from "./components/pages/renderingList";
import ConditionalRendering from "./components/pages/conditionalRendering";

export default function App() {
  return (
    <MainLayout>
      <RenderingList />
      <hr />
      <ConditionalRendering />
    </MainLayout>
  );
}
