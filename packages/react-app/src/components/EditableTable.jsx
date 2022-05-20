import React, { useContext, useState, useEffect, useRef } from "react";
import { Table, Input, Button, Popconfirm, Form } from "antd";
const EditableContext = React.createContext(null);

function EditTable() {
  const EditableRow = ({ index, ...props }) => {
    const [form] = Form.useForm();
    return (
      <Form form={form} component={false}>
        <EditableContext.Provider value={form}>
          <tr {...props} />
        </EditableContext.Provider>
      </Form>
    );
  };

  const EditableCell = ({ title, editable, children, dataIndex, record, handleSave, ...restProps }) => {
    const [editing, setEditing] = useState(false);
    const inputRef = useRef(null);
    const form = useContext(EditableContext);
    useEffect(() => {
      if (editing) {
        inputRef.current.focus();
      }
    }, [editing]);

    const toggleEdit = () => {
      setEditing(!editing);
      form.setFieldsValue({
        [dataIndex]: record[dataIndex],
      });
    };

    const save = async () => {
      try {
        const values = await form.validateFields();
        toggleEdit();
        handleSave({ ...record, ...values });
      } catch (errInfo) {
        console.log("Save failed:", errInfo);
      }
    };

    let childNode = children;

    if (editable) {
      childNode = editing ? (
        <Form.Item
          style={{
            margin: 0,
          }}
          name={dataIndex}
          rules={[
            {
              required: true,
              message: `${title} is required.`,
            },
          ]}
        >
          <Input ref={inputRef} onPressEnter={save} onBlur={save} />
        </Form.Item>
      ) : (
        <div
          className="editable-cell-value-wrap"
          style={{
            paddingRight: 24,
          }}
          onClick={toggleEdit}
        >
          {children}
        </div>
      );
    }

    return <td {...restProps}>{childNode}</td>;
  };

  class EditableTable extends React.Component {
    constructor(props) {
      super(props);
      this.columns = [
        {
          title: "ID",
          dataIndex: "id",
          width: "20%",
          editable: true,
        },
        {
          title: "Token",
          dataIndex: "token",
          width: "40%",
          editable: true,
        },
        {
          title: "Weight",
          dataIndex: "weight",
          editable: true,
        },
        {
          dataIndex: "operation",
          width: "10%",

          render: (_, record) =>
            this.state.dataSource.length >= 1 ? (
              <Button
                style={{
                  margin: "0 auto",
                  backgroundColor: "#2F8AF4",
                  color: "white",
                  borderRadius: "20px",
                  boxShadow: "rgba(100, 100, 111, 0.1) 0px 7px 29px 0px",
                }}
                onClick={() => this.handleDelete(record.key)}
              >
                Delete
              </Button>
            ) : null,
        },
      ];
      this.state = {
        dataSource: [],
        count: 0,
      };
    }

    handleDelete = key => {
      const dataSource = [...this.state.dataSource];
      this.setState({
        dataSource: dataSource.filter(item => item.key !== key),
      });
    };
    handleAdd = () => {
      const { count, dataSource } = this.state;
      const newData = {
        key: count,
        id: count + 1,
        token: "Token Name",
        weight: 0,
      };
      this.setState({
        dataSource: [...dataSource, newData],
        count: count + 1,
      });
    };
    handleSave = row => {
      const newData = [...this.state.dataSource];
      const index = newData.findIndex(item => row.key === item.key);
      const item = newData[index];
      newData.splice(index, 1, { ...item, ...row });
      this.setState({
        dataSource: newData,
      });
    };

    render() {
      const { dataSource } = this.state;
      const components = {
        body: {
          row: EditableRow,
          cell: EditableCell,
        },
      };
      const columns = this.columns.map(col => {
        if (!col.editable) {
          return col;
        }

        return {
          ...col,
          onCell: record => ({
            record,
            editable: col.editable,
            dataIndex: col.dataIndex,
            title: col.title,
            handleSave: this.handleSave,
          }),
        };
      });
      return (
        <div>
          <Button
            onClick={this.handleAdd}
            style={{
              marginTop: "3em",
              marginBottom: 16,
              backgroundColor: "#2F8AF4",
              color: "white",
              borderRadius: "20px",
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            }}
          >
            Add a row
          </Button>
          <Table
            components={components}
            rowClassName={() => "editable-row"}
            bordered
            dataSource={dataSource}
            columns={columns}
            style={{ marginBottom: 16 }}
          />
        </div>
      );
    }
  }
  return <EditableTable />;
}

export default EditTable;