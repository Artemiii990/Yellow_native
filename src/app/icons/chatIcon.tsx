import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg"



type Props = {
  width?: number;
  height?: number;
};



export default function ChatIcon({width, height}: Props) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 17 17"
      fill="none"
    >
      <Path fill="url(#pattern0)" d="M0 0H17V17H0z" />
      <Defs>
        <Pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <Use xlinkHref="#image0_55_6383" transform="scale(.01563)" />
        </Pattern>
        <Image
          id="image0_55_6383"
          width={64}
          height={64}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAB2AAAAdgB+lymcgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAQHSURBVHic7dpbaFxVFMbxX2PapNViC1aNQotFSBQrikq03sD64IP6oGl9EC8geAFFERW0FaQg9fIiCGKRIqKIGi0+CCpKrYKtoqCgiEGwpbV4CXhLrE1tOz6sMxpjZzKZnH1OMskfhszMOXutNV/22XuvtTezzDKjmTPm81HoxuISYoEKfsIA9hfpeCE2Yl8WRNmvX7AWR6T80UQPmI/3cQ5+w3YMpXZchyU4Dx14AdeldrhOqL4Nx6Z21iCnYpeI6/LUzr7OHHWndjRB1oi4XkrtaD9+TO2kCY4XAnya0kkb5mJvSidNUo1pbkonbSmNTwdmBSg7gDrsxSB2pnZUwY7UTppkCealdNCe0ngODKZ2kEqApejB0YnsN8MI9uBzHBx9Ic9HYAW2Kj+XqPf6HjdXA86zB5yLd0RG+S0+wnCO9idLm1jtni8Svx7cTT49oCOzUcHDpvbYcoFIuSu4jHwEWJ3ZeWuSdoriGhHvm3mtA3qzv6/mZC81r4scqDcvAaqj/c6c7KVmRAyGi6fySjA1FYobrOajqyBfo/nDOKl+EQJ0ikejjGrTIdyI52vdUIQAI3hblLmKZkis/GpShAAVXF+An6aYyYMgQoARLPL/TZIZQRu+EAJcVHIspdCGR7L3z2FlibGUQjtew9O4FR+KFdJaPFujzZl4SPScdQ36+EBkX0Xzp9hZ2lLrhuogeBtuEDX4ruz94ejBe7gSp00gkKSl7TpUxFqgYZZljbYe5tpCfJVd3+C/M8gz2feXNhNlSexApdFpcA424RS8IR6RCSk7VWlUgPtFzv+NeKZa4sfTmACrsF4kFlfh16QRFcx4AiwTu7NtuAlfJo+oYOrlAp1iijwGj+PlJn1Ux4/Tm2w/GYZwrzo7zPUEeApniWnvgUkE0YErhJBFcwjLNSFALy7GblFAPDCJIPbhJOXUA4ZFBbgmYwX4WRQLO0XgV8tne2rY1Noj+Iexg+AQ7hQbHH34pPCIpikbjdpomCbsxsG8CiLVwmMZZa9mWIQT8UNeBi8UPWAAC/IympD1It5aGW9TvJsZ3YKT8zScIwvwIP4SJ1C68yyDHScGzxXZ5z1y7GJ12CUWatvr3NOFfjG9t4sZ7lpszjuYI4XCA4rd8x/BJXXi6svu+x0vGjVWpSyEzhOCpGaNqGgN4mzRI8ayGq+InnJfATEVzhPiP/yZ2IYbS3X7/rGxF1plX+AeceL9DLEmaZhWEeCAyFm+EwWbWxpt2CoCEIuxPjEgPimOwoxLKwkAH+MuUYXuxwnjNWg1AYgZYZM4bt9vnJOmrSgA3C4y2ZV4tORYSmOpf4/DbVZjGmx1Vol1f3XFuKHccMrhDlEbHNHgzNCKLFfOIa1ZZpnq/A2idSqnHNm5mQAAAABJRU5ErkJggg=="
        />
      </Defs>
    </Svg>
  )
}