import { Avatar, Button, Form, Input, Modal, Table, Upload } from "antd";
import { useState, useEffect } from "react";
import {
  DeleteOutlined,
  EditOutlined,
  ExclamationCircleFilled,
  InboxOutlined,
} from "@ant-design/icons";
import { toast } from "react-toastify";
import { AiOutlineUserAdd } from "react-icons/ai";
import { ROLE, USER_ID } from "../../utils";
import { useFetch } from "../../hook";
import { IMAGE_URL } from "../../const";
import { request, requestImage } from "../../server/request";
import { PlusOutlined } from "@ant-design/icons";

const { confirm } = Modal;

const Portfolios = () => {
  const [current, setCurrentPage] = useState(1);
  const [selected, setSelected] = useState(null);
  const [form] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fileList, setFileList] = useState([]); // Store uploaded file list

  const {
    data: portfolios,
    loading,
    total,
    recall: getPortfolios,
  } = useFetch(
    `portfolios${
      ROLE === "client" ? `?user[in]=${USER_ID}` : ""
    }&page=${current}&limit=5`
  );

  useEffect(() => {
    getPortfolios(); // Fetch portfolios on component mount
  }, [current]);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Url",
      dataIndex: "url",
      key: "url",
      render: (Url) => (
        <a href={Url} target="_blank" rel="noreferrer">
          {Url.split("/")[2].split(".")[0].split("-").slice(0, 2).join("-")}
        </a>
      ),
    },
    {
      title: "Photo",
      dataIndex: "photo",
      width: 400,
      key: "photo",
      render: (photoUrl) => (
        <Avatar
          src={`${IMAGE_URL}${photoUrl._id}.${photoUrl.name.split(".")[1]}`}
          alt={photoUrl.name}
          shape="square"
          size={50}
        />
      ),
    },
    {
      title: "Actions",
      width: 200,
      render: ({ _id, name }) => (
        <div className="d-flex gap-2">
          <Button type="primary" onClick={() => editPortfolio(_id)}>
            <EditOutlined />
          </Button>
          &nbsp;&nbsp;
          <Button
            type="primary"
            danger
            onClick={() => deletePortfolio(_id, name)}
          >
            <DeleteOutlined />
          </Button>
        </div>
      ),
    },
  ];


  const showModal = () => {
    setIsModalOpen(true);
  };

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  const handleOk = () => {
    form.validateFields().then((values) => {
      values["photo"] = fileList[0]?._id || "";
      if (selected) {
        request.put(`portfolios/${selected}`, values).then(() => {
          getPortfolios();
          setIsModalOpen(false);
        });
      } else {
        request.post("portfolios", values).then(() => {
          getPortfolios();
          setIsModalOpen(false);
        });
      }
    });
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const openFormModal = () => {
    showModal();
    setSelected(null);
    form.resetFields();
  };

  // Modified editPortfolio function
  const editPortfolio = (id) => {
    request.get(`portfolios/${id}`).then((res) => {
      showModal();
      setSelected(id);
      form.setFieldsValue(res.data);
    });
  };

  function deletePortfolio(id, name) {
    confirm({
      title: `Do you Want to delete ${name}?`,
      icon: <ExclamationCircleFilled />,
      content: "Some descriptions",
      onOk() {
        request.delete(`portfolios/${id}`).then((res) => {
          console.log(res);
          toast.success(`Portfolio ${name} deleted successfully !`);
          getPortfolios();
        });
      },
    });
  }

  return (
    <>
      <Table
        title={() => (
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h1>Portfolio</h1>
            <Button
              style={{ display: "flex", alignItems: "center", gap: "5px" }}
              onClick={openFormModal}
              type="primary"
            >
              <AiOutlineUserAdd /> Add Portfolio
            </Button>
          </div>
        )}
        dataSource={portfolios}
        columns={columns}
        loading={loading}
        scroll={{ x: 600 }}
        pagination={{
          current,
          total,
          pageSize: 5,
          onChange: (key) => setCurrentPage(key),
        }}
      />
      <Modal
        title="Portfolio"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText={selected ? "Save Portfolio" : "Add Portfolio"}
      >
        <Form.Item
          name="photo"
          label="Image"
          valuePropName="fileList"
          getValueFromEvent={normFile}
        >
          <Upload
            name="photo"
            action="/upload" // Replace with your image upload API endpoint
            listType="picture"
            beforeUpload={(file) => {
              setImageFile(file);
              return false;
            }}
            fileList={fileList}
          >
            <Button icon={<InboxOutlined />}>Upload Image</Button>
          </Upload>
        </Form.Item>

        <Form
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          form={form}
          name="portfolio"
        >
          <Form.Item
            name="name"
            label="Name"
            rules={[
              {
                message: "The input is not valid Name!",
              },
              {
                required: true,
                message: "Please input your Name!",
              },
            ]}
          >
            <Input placeholder="Name" />
          </Form.Item>
          <Form.Item
            name="description"
            label="Description"
            rules={[
              {
                message: "The input is not valid Dame!",
              },
              {
                required: true,
                message: "Please input your Dame!",
              },
            ]}
          >
            <Input placeholder="Description" />
          </Form.Item>
          <Form.Item
            name="url"
            label="URL"
            rules={[
              { required: true },
              { type: "url", warningOnly: true },
              { type: "string", min: 6 },
            ]}
          >
            <Input placeholder="Url" />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default Portfolios;
