import React, { useState } from 'react';

import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Switch from 'antd/lib/switch';
import Tag from 'antd/lib/tag';
import List from 'antd/lib/list';

import {
  CloseCircleOutlined,
  ExclamationCircleOutlined,
} from '@ant-design/icons';

import useInterval from '../hooks/useInterval.jsx';


export default function Dashboard() {

  const [running, setRunningg] = useState(false);
  const [warning, setWarning] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState(
    // mock data
    {
      temp_sat: 40,
      temp_con: 20,
      temp_opt: 42,
      flow: 200,
      conc: 1000,
    }
  );

  useInterval(() => {
    console.log('hello');
  }, running ? 1000 : null);

  const onChangeRunning = checked => {
    setRunningg(checked);
  };

  return (
    <Row>
      <Col span={8} offset={0}>

        <Switch style={{ margin:5 }} onChange={onChangeRunning}/>

        {
          !running ? null :
            error ? 
              <Tag icon={<CloseCircleOutlined />} color="error">
                ERROR
              </Tag> :
              warning ? 
                <Tag icon={<ExclamationCircleOutlined />} color="warning">
                  WARNING
                </Tag>
                : null
        }

        {
          !running ? null :
            <>
              <h1 style={{ margin:10, padding:10, backgroundColor: "WhiteSmoke" }}>
                <p style={{ fontSize: 35, display: "inline" }}>{data['conc'].toPrecision(3)}</p>
                <span>&nbsp;</span>
                <p style={{ fontSize: 20, display: "inline" }}>#/cm<sup>3</sup></p>
              </h1>

              <Row>
                <Col span={6} offset={2}>
                  <List
                    itemLayout="horizontal"
                    dataSource={['temp_sat', 'temp_con', 'temp_opt', 'flow']}
                    renderItem={item => (<List.Item>{item}</List.Item>)}
                  />
                </Col>

                <Col span={6} offset={2}>
                  <List
                    itemLayout="horizontal"
                    dataSource={[
                      data['temp_sat'].toFixed(2),
                      data['temp_con'].toFixed(2),
                      data['temp_opt'].toFixed(2),
                      data['flow'].toFixed(1),
                    ]}
                    renderItem={item => (<List.Item>{item}</List.Item>)}
                  />
                </Col>

                <Col span={6} offset={2}>
                  <List
                    itemLayout="horizontal"
                    dataSource={[
                      <text><sup>o</sup>C</text>,
                      <text><sup>o</sup>C</text>,
                      <text><sup>o</sup>C</text>,
                      <text>ml/min</text>,
                    ]}
                    renderItem={item => (<List.Item>{item}</List.Item>)}
                  />
                </Col>
              </Row>
            </>            
        }


      </Col>
      <Col span={11} offset={0}>
        {
          !running ? 
            <h2 style={{color: "steelblue"}}>
              nimi_CPC by University of Helsinki
            </h2>
            :
            <>
              <h1>Time Series Plot</h1>
            </>
        }
      </Col>
    </Row>
  );
};
