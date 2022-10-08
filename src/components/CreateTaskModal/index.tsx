/* eslint-disable no-plusplus */
import React, { useState } from 'react';
import {
  Button,
  DatePicker,
  Form,
  Input,
  Modal,
  notification,
  Select,
} from 'antd';

const { Option } = Select;
const children: React.ReactNode[] = [];
for (let i = 0; i < 5; i++) {
  children.push(<Option key={i}>Пользователь {i}</Option>);
}

const CreateTaskModal = () => {
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();

  const onAddTask = () => {
    notification.success({ message: 'Задание проверяется модератором' });
    setVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={() => setVisible(true)}>
        Создать задание
      </Button>
      <Modal
        title="Создание задание"
        visible={visible}
        onCancel={() => setVisible(false)}
        onOk={onAddTask}
      >
        <Form form={form} labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
          <Form.Item name="title" label="Название" required>
            <Input placeholder="Название" />
          </Form.Item>
          <Form.Item name="date" label="Дата" required>
            <DatePicker placeholder="Дата" />
          </Form.Item>
          <Form.Item name="description" label="Описание" required>
            <Input />
          </Form.Item>
          <Form.Item name="user" label="Исполнитель" required>
            <Select
              mode="multiple"
              allowClear
              style={{ width: '100%' }}
              placeholder="Выберите пользователей"
            >
              {children}
            </Select>
          </Form.Item>
          <Form.Item name="awards" label="NFT-сертификаты">
            <Input placeholder="Количество" />
          </Form.Item>
          <Form.Item name="awards" label="Монеты">
            <Input placeholder="Количество" />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default CreateTaskModal;
