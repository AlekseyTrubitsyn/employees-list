import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as Actions from '../../actions';

import ModalEditor from '../../components/modal-editor';

const ModalEditorContainer = ({ showEditor, employee, onClose, onSubmit }) => (
  showEditor && (
    <ModalEditor
      {...employee}
      onClose={onClose}
      onSubmit={onSubmit}
    />
  )
);

const mapStateToProps = ({ employees, showEditor, employeeToEdit }) => {
  const employee = employeeToEdit === '-1'
    ? { id: employeeToEdit }
    : employees.find(item => item.id === employeeToEdit);

  return {
    employee: employee || { id: '-1' },
    showEditor
  };
};

const mapDispatchToProps = (dispatch) => {
  const {
    closeEmployeeEditor,
    editEmployee
  } = bindActionCreators(Actions, dispatch);

  return {
    onClose: closeEmployeeEditor,
    onSubmit: editEmployee
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalEditorContainer);
