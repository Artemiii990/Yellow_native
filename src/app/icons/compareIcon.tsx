import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"



type Props = {
  width?: number;
  height?: number;
  color?: string;
};



export default function CompareIcon({width, height, color="#fff"}: Props) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
    >
      <G
        opacity={0.64}
        clipPath="url(#clip0_1928_120)"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M7 20h10M6 6l6-1 6 1M12 3v17M9 12L6 6l-3 6a3 3 0 006 0zM21 12l-3-6-3 6a3 3 0 006 0z" />
      </G>
      <Defs>
        <ClipPath id="clip0_1928_120">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}