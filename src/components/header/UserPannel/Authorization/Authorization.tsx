import Modal from "../../../UI/Modal/Modal";
import Button from "../../../UI/Button/Button";
import ModalForms from "./ModalForm/ModalForm";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import storeAccount from "../../../../store/storeAccount";
import { Space } from "antd";
const Authorization = () => {
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  let navigate = useNavigate();

  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const logOut = () => {
    storeAccount.handleAccount(undefined!);
  };

  const regOn = () => {
    if (storeAccount.user.admin) {
      return (
        <Space>
          <Button type="primary" onClick={() => navigate("/admin")}>
            Admin
          </Button>
          <Button type="primary" onClick={logOut}>
            Exit
          </Button>
        </Space>
      );
    } else {
      return (
        <div>
          <Button type="primary" onClick={logOut}>
            Exit
          </Button>
        </div>
      );
    }
  };
  const regOff = () => {
    return (
      <Button type="primary" onClick={showModal}>
        Log/Reg
      </Button>
    );
  };

  return (
    <div>
      {storeAccount.user?.nickname ? regOn() : regOff()}
      <Modal
        title="Auth"
        visible={visible}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        footer={null}
      >
        <ModalForms />
      </Modal>
    </div>
  );
};
export default Authorization;
