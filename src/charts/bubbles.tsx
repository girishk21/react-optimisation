import useDemoConfig from "../hooks/useDemoConfig";
import React from "react";
import { AxisOptions, Chart } from "react-charts";
import ResizableBox from "../components/resisable";

function Bubble() {
  const { data } = useDemoConfig({
    series: 10,
    dataType: "linear",
    useR: true,
  });

  const primaryAxis = React.useMemo<
    AxisOptions<typeof data[number]["data"][number]>
  >(
    () => ({
      getValue: (datum) => datum.primary as unknown as Date,
    }),
    []
  );

  const secondaryAxes = React.useMemo<
    AxisOptions<typeof data[number]["data"][number]>[]
  >(
    () => [
      {
        getValue: (datum) => datum.secondary,
        elementType: "bubble",
      },
    ],
    []
  );

  return (
    <ResizableBox>
      <Chart
        options={{
          data,
          primaryAxis,
          secondaryAxes,
          interactionMode: "closest",
          getDatumStyle: (datum) =>
            ({
              circle: { r: datum.originalDatum.radius },
            } as any),
        }}
      />
    </ResizableBox>
  );
}

export default Bubble;
