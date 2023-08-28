import React, { useEffect, useState } from "react";

const RandomizedSVG = ({
  userUuid = "ffff0602-afec-ffa3-ff04-02faafaff4ec",
  height = "50",
  width = "50",
  colorPalette
}) => {
  const generateColor = (userUuid) => {
    const uuidWithoutDashes = userUuid.replace(/-/g, "");
    const pairs = uuidWithoutDashes.match(/.{1,2}/g);

    const result = pairs.map((pair) => {
      const decimalValue = parseInt(pair, 16);
      const subdivisionSize = 256 / colorPalette.length;
      return Math.floor(decimalValue / subdivisionSize);
    });

    return result;
  };

  const [indices, setIndices] = useState([]);

  useEffect(() => {
    const resultArray = generateColor(userUuid);
    setIndices(resultArray);
    console.log(userUuid);
  }, [userUuid]);

  const scale = Math.min(width / 50, height / 50);
  const colorIndices = indices.map((index) => colorPalette[index]);

  return (
    <svg
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      shapeRendering={"crispEdges"}
    >
      <polygon
        points={`0,0 ${12.5 * scale},${12.5 * scale} 0,${25 * scale}`}
        fill={colorIndices[0]}
        stroke={colorIndices[0]}
        strokeWidth="0"
      />
      <polygon
        points={`0,0 ${12.5 * scale},${12.5 * scale} ${25 * scale},0`}
        fill={colorIndices[1]}
        stroke={colorIndices[1]}
        strokeWidth="0"
      />
      <polygon
        points={`${12.5 * scale},${12.5 * scale} ${25 * scale},0 ${
          25 * scale
        },${25 * scale}`}
        fill={colorIndices[2]}
        stroke={colorIndices[2]}
        strokeWidth="0"
      />
      <polygon
        points={`0,${25 * scale} ${12.5 * scale},${12.5 * scale} ${
          25 * scale
        },${25 * scale}`}
        fill={colorIndices[3]}
        stroke={colorIndices[3]}
        strokeWidth="0"
      />
      <polygon
        points={`${25 * scale},${0 * scale} ${37.5 * scale},${12.5 * scale} ${
          25 * scale
        },${25 * scale}`}
        fill={colorIndices[4]}
        stroke={colorIndices[4]}
        strokeWidth="0"
      />
      <polygon
        points={`${25 * scale},${0 * scale} ${37.5 * scale},${12.5 * scale} ${
          50 * scale
        },${0 * scale}`}
        fill={colorIndices[5]}
        stroke={colorIndices[5]}
        strokeWidth="0"
      />
      <polygon
        points={`${37.5 * scale},${12.5 * scale} ${50 * scale},${0 * scale} ${
          50 * scale
        },${25 * scale}`}
        fill={colorIndices[6]}
        stroke={colorIndices[6]}
        strokeWidth="0"
      />
      <polygon
        points={`${25 * scale},${25 * scale} ${37.5 * scale},${12.5 * scale} ${
          50 * scale
        },${25 * scale}`}
        fill={colorIndices[7]}
        stroke={colorIndices[7]}
        strokeWidth="0"
      />
      <polygon
        points={`0,${25 * scale} ${12.5 * scale},${37.5 * scale} 0,${
          50 * scale
        }`}
        fill={colorIndices[8]}
        stroke={colorIndices[8]}
        strokeWidth="0"
      />
      <polygon
        points={`0,${25 * scale} ${12.5 * scale},${37.5 * scale} ${
          25 * scale
        },${25 * scale}`}
        fill={colorIndices[9]}
        stroke={colorIndices[9]}
        strokeWidth="0"
      />
      <polygon
        points={`${12.5 * scale},${37.5 * scale} ${25 * scale},${25 * scale} ${
          25 * scale
        },${50 * scale}`}
        fill={colorIndices[10]}
        stroke={colorIndices[10]}
        strokeWidth="0"
      />
      <polygon
        points={`0,${50 * scale} ${12.5 * scale},${37.5 * scale} ${
          25 * scale
        },${50 * scale}`}
        fill={colorIndices[11]}
        stroke={colorIndices[11]}
        strokeWidth="0"
      />
      <polygon
        points={`${25 * scale},${25 * scale} ${37.5 * scale},${37.5 * scale} ${
          25 * scale
        },${50 * scale}`}
        fill={colorIndices[12]}
        stroke={colorIndices[12]}
        strokeWidth="0"
      />
      <polygon
        points={`${25 * scale},${25 * scale} ${37.5 * scale},${37.5 * scale} ${
          50 * scale
        },${25 * scale}`}
        fill={colorIndices[13]}
        stroke={colorIndices[13]}
        strokeWidth="0"
      />
      <polygon
        points={`${37.5 * scale},${37.5 * scale} ${50 * scale},${25 * scale} ${
          50 * scale
        },${50 * scale}`}
        fill={colorIndices[14]}
        stroke={colorIndices[14]}
        strokeWidth="0"
      />
      <polygon
        points={`${25 * scale},${50 * scale} ${37.5 * scale},${37.5 * scale} ${
          50 * scale
        },${50 * scale}`}
        fill={colorIndices[15]}
        stroke={colorIndices[15]}
        strokeWidth="0"
      />
    </svg>
  );
};

export default RandomizedSVG;
