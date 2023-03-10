import type { FC } from "react";
import { Stage, Layer, Rect, Circle } from "react-konva";

const App: FC = () => {
  return (
    <div>
      <Stage width={500} height={500}>
        <Layer>
          <Circle x={150} y={100} radius={50} fill="blue" />
        </Layer>
      </Stage>
    </div>
  );
};

export default App;
