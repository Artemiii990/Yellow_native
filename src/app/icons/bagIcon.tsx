import Svg, { G, Path } from "react-native-svg"



export default function BagIcon() {
  return (
    <Svg
      width={25}
      height={25}
      viewBox="0 0 24 24"
      fill="none"
    >
      <G
        opacity={0.64}
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M3.977 9.84A2 2 0 015.97 8h12.058a2 2 0 011.994 1.84l.803 10A1.998 1.998 0 0118.833 22H5.167a2 2 0 01-1.993-2.16l.803-10v0z" />
        <Path d="M16 11V6a4 4 0 10-8 0v5" />
      </G>
    </Svg>
  )
}