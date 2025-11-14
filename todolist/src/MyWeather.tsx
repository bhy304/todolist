import { Component } from 'react';

interface Props {
  weather: string;
  children: React.ReactNode;
}

const MyWeather: React.FC<Props> = (props) => {
  const { children, weather } = props;
  return (
    <div>
      <h3>{children}</h3>
      오늘의 날씨는 {weather}입니다.
    </div>
  );
};

// 클래스
class Weather extends Component<Props> {
  render() {
    const { children, weather } = this.props;

    return (
      <div>
        <h3>{children}</h3>
        오늘의 날씨는 {weather}입니다.
      </div>
    );
  }
}

export default Weather;
