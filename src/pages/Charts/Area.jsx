import React from 'react';
import { ChartsHeader, Header } from '../../components';
import AreaLine from '../../components/Charts/AreaLine';

const Area = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
    <Header category="Page" title="Area" />
    <AreaLine/>
    </div>
  )
};

export default Area;
