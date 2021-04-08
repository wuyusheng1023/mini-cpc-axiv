import React, { useState } from 'react';
import Tabs from 'antd/lib/tabs';

const { TabPane } = Tabs;


export default function TabFrame() {

  return (
    <Tabs type="card" defaultActiveKey="1">
      <TabPane tab="Dashboard" key="1">
        1
      </TabPane>

      <TabPane tab="Setting" key="2">
        2
      </TabPane>
    </Tabs>
  );
};
