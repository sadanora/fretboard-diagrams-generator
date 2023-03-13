import type { FC } from "react";
import { Stage, Layer, Text, Line, Circle } from "react-konva";

const App: FC = () => {
  return (
    <div>
      <Stage width={534} height={500}>
        <Layer>
          {/* 0fretLine */}
          <Line
            x={34}
            y={34}
            points={[0, 0, 0, 150]}
            tension={0}
            stroke="black"
            strokeWidth={2}
          />
          {/* fretLine */}
          <Line
            x={134}
            y={34}
            points={[0, 0, 0, 150]}
            tension={0}
            stroke="black"
            strokeWidth={1}
          />
          <Line
            x={234}
            y={34}
            points={[0, 0, 0, 150]}
            tension={0}
            stroke="black"
            strokeWidth={1}
          />
          <Line
            x={334}
            y={34}
            points={[0, 0, 0, 150]}
            tension={0}
            stroke="black"
            strokeWidth={1}
          />
          <Line
            x={434}
            y={34}
            points={[0, 0, 0, 150]}
            tension={0}
            stroke="black"
            strokeWidth={1}
          />
          <Line
            x={534}
            y={34}
            points={[0, 0, 0, 150]}
            tension={0}
            stroke="black"
            strokeWidth={1}
          />

          {/* stringsLine */}
          <Text x={10} y={24} fontSize={24} text="E" />
          <Line
            x={34}
            y={34}
            points={[0, 0, 500, 0]}
            tension={0}
            stroke="black"
            strokeWidth={1}
          />
          <Text x={10} y={54} fontSize={24} text="B" />
          <Line
            x={34}
            y={64}
            points={[0, 0, 500, 0]}
            tension={0}
            stroke="black"
            strokeWidth={1}
          />
          <Text x={10} y={84} fontSize={24} text="G" />
          <Line
            x={34}
            y={94}
            points={[0, 0, 500, 0]}
            tension={0}
            stroke="black"
            strokeWidth={1}
          />
          <Text x={10} y={114} fontSize={24} text="D" />
          <Line
            x={34}
            y={124}
            points={[0, 0, 500, 0]}
            tension={0}
            stroke="black"
            strokeWidth={1}
          />
          <Text x={10} y={144} fontSize={24} text="A" />
          <Line
            x={34}
            y={154}
            points={[0, 0, 500, 0]}
            tension={0}
            stroke="black"
            strokeWidth={1}
          />
          <Text x={10} y={174} fontSize={24} text="E" />
          <Line
            x={34}
            y={184}
            points={[0, 0, 500, 0]}
            tension={0}
            stroke="black"
            strokeWidth={1}
          />
          {/* dots */}
          <Circle x={80} y={49} wodth={20} height={20} fill="black" />
        </Layer>
      </Stage>
    </div>
  );
};

export default App;
