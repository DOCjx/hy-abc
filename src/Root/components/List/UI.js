import React from 'react';
import PropTypes from 'prop-types';
import { Table, Popconfirm, Button } from 'antd';
import style from './assets/style/style.less';

const UI = ({dispatch, list}) => {
  
  function handleDelete(id) {
    dispatch({
      type: 'list/delete',
      payload: id,
    });
  }
  function handleDeleteAll() {
    dispatch({
      type: 'list/deleteAll'
    });
  }

  const columns = [{
    title: 'Name',
    dataIndex: 'name',
  }, {
    title: 'Actions',
    render: (text, record) => {
      return (
        <Popconfirm title="Delete?" onConfirm={() => handleDelete(record.id)}>
          <Button>Delete</Button>
        </Popconfirm>
      );
    },
  }];
  return (
    <div>
      <div className='warrp' >
        <h2 className='h2'>List of Products</h2>
        <Table
          className='tab-content'
          dataSource={list}
          columns={columns}
        />
        <div className='btns'>
          <Button className='myBtn' type="primary" onClick={handleDeleteAll}>Delete All</Button>
          <Button className='myBtn'>Default</Button>
          <Button className='myBtn' type="dashed">Dashed</Button>
          <Button className='myBtn' type="danger">Danger</Button>
        </div>
      </div>
    </div>
  );
};

UI.propTypes = {
  dispatch: PropTypes.func.isRequired,
  list: PropTypes.array.isRequired,
};
export default UI;