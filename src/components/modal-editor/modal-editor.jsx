import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  surname: PropTypes.string,
  position: PropTypes.string,
  description: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

const defaultProps = {
  name: '',
  surname: '',
  position: '',
  description: ''
};

class ModalEditor extends Component {
  constructor(props) {
    super(props);

    const {
      name = '',
      surname = '',
      position = '',
      description = ''
    } = props;

    this.state = {
      name,
      surname,
      position,
      description
    };
  }

  componentDidMount = () => {
    document.addEventListener('keyup', this.handleKeyUp);
    document.body.style.overflow = 'hidden';
  }

  componentWillUnmount = () => {
    document.removeEventListener('keyup', this.handleKeyUp);
    document.body.style.overflow = '';
  }

  handleKeyUp = (e) => {
    const { onClose } = this.props;
    const { keyCode } = e;

    switch (keyCode) {
      case 27:
        onClose();
        break;

      default:
        break;
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const {
      id,
      onSubmit
    } = this.props;

    const {
      name,
      surname,
      position,
      description
    } = this.state;

    if (!this.checkFields()) {
      console.error(`Необходимо ${id === '-1' ? 'заполнить все поля' : 'изменить хотя бы одно поле'}`);

      return;
    }

    onSubmit({
      name,
      surname,
      position,
      description
    });
  }

  handleNameChange = (name) => {
    this.setState({
      name
    });
  }

  handleSurnameChange = (surname) => {
    this.setState({
      surname
    });
  }

  handlePositionChange = (position) => {
    this.setState({
      position
    });
  }

  handleDescriptionChange = (description) => {
    this.setState({
      description
    });
  }

  checkFields = () => {
    const {
      name: _name,
      surname: _surname,
      position: _position,
      description: _description
    } = this.props;

    const {
      name,
      surname,
      position,
      description
    } = this.state;

    return (name && surname && position && description)
      && (name !== _name || surname !== _surname || position !== _position || description !== _description);
  }

  render() {
    const {
      id,
      onClose
    } = this.props;

    const {
      name,
      surname,
      position,
      description
    } = this.state;

    const disabledSubmit = !this.checkFields();

    return (
      <Fragment>
        <div className="modal-editor">
          <button
            className="btn btn-primary modal-editor__close-button"
            type="button"
            title="Закрыть редактор"
            onClick={onClose}
          >
            {'X'}
          </button>
          <h3 className="modal-editor__title">
            {(id === '-1')
              ? 'Добавление нового сотрудника'
              : 'Редактирование карточки сотрудника'
            }
          </h3>
          <form
            action="#"
            className="modal-editor-form"
            id="modal-editor-form"
            onSubmit={this.handleSubmit}
          >
            <label
              className="modal-editor-form__label"
              htmlFor="modal-editor-form__name-field"
            >
              {'Имя'}

              <input
                id="modal-editor-form__name-field"
                className="modal-editor-form__field modal-editor-form__name-field"
                type="text"
                placeholder="Имя"
                value={name}
                onChange={e => this.handleNameChange(e.target.value)}
              />
            </label>
            <label
              className="modal-editor-form__label"
              htmlFor="modal-editor-form__surname-field"
            >
              {'Фамилия'}
              <input
                id="modal-editor-form__surname-field"
                className="modal-editor-form__field modal-editor-form__surname-field"
                type="text"
                placeholder="Фамилия"
                value={surname}
                onChange={e => this.handleSurnameChange(e.target.value)}
              />
            </label>
            <label
              className="modal-editor-form__label"
              htmlFor="modal-editor-form__position-field"
            >
              {'Должность'}
              <input
                id="modal-editor-form__position-field"
                className="modal-editor-form__field modal-editor-form__position-field"
                type="text"
                placeholder="Должность"
                value={position}
                onChange={e => this.handlePositionChange(e.target.value)}
              />
            </label>
            <label
              className="modal-editor-form__label"
              htmlFor="modal-editor-form__description-field"
            >
              {'Описание'}
              <textarea
                id="modal-editor-form__description-field"
                className="modal-editor-form__field modal-editor-form__description-field"
                type="text"
                placeholder="Описание"
                value={description}
                onChange={e => this.handleDescriptionChange(e.target.value)}
              />
            </label>
            <button
              className="btn btn-primary modal-editor__submit-button"
              type="button"
              title={disabledSubmit
                ? `Необходимо ${id === '-1' ? 'заполнить все поля' : 'изменить хотя бы одно поле'}`
                : 'Сохранить'
              }
              disabled={disabledSubmit}
              onClick={this.handleSubmit}
            >
              {'Сохранить изменения'}
            </button>
          </form>
        </div>
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
        <div
          className="overlay"
          onClick={onClose}
        />
      </Fragment>
    );
  }
}

ModalEditor.propTypes = propTypes;
ModalEditor.defaultProps = defaultProps;
export default ModalEditor;
