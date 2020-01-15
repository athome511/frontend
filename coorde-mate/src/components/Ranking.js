import React from 'react';

//css
import '../css/ranking.css';
import imgUrl from '../img/iconSample.jpg';

//ランキング画面
class Ranking extends React.Component {
  render() {
    return (
      <div className="ranking-wrapper">
      <table>
        <tr>
          <th className="rankHeader">rank</th>
          <th>icon</th>
          <th className="userNameHeader">userName</th>
          <th>point</th>
          <th>unit</th>
        </tr>
        <tr>
          <td className="rank">1.</td>
          <td><img src={imgUrl} /></td>
          <td className="userName">ニックネーム</td>
          <td className="point">30</td>
          <td className="unit">BC</td>
        </tr>
      </table>
    </div>
    );
  }
}

export default Ranking;
