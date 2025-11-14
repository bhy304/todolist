import { Modal } from 'react-bootstrap';

type Todo = {
  id: number;
  text: string;
  isChecked: boolean;
};

type Props = {
  show: boolean;
  todo: Todo | null;
  onHide: () => void;
};

const TodoModal: React.FC<Props> = ({ show, todo, onHide }) => {
  return (
    <div
      className='modal show'
      style={{ display: 'block', position: 'initial' }}>
      <Modal show={show} onHide={onHide} centered>
        <Modal.Header closeButton>
          <Modal.Title>Todo 상세 정보</Modal.Title>
        </Modal.Header>
        <Modal.Body>{todo?.text}</Modal.Body>
      </Modal>
    </div>
  );
};
export default TodoModal;
