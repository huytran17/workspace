import { useRootDispatch, useRootSelector } from "@/hooks/redux";
import { LOGIN, UPDATE_USER_DATA } from "@/store/auth/actions/actions";
import authSelectors from "@/store/auth/states/selectors";
import { loginRules } from "@/validation";
import { Button, Form, Input } from "antd";
import { FC, useEffect, useState } from "react";
import "./style.scss";

type LoginDetails = {
  email: string;
  password: string;
};

const BaseLoginForm: FC<{}> = () => {
  const dispatch = useRootDispatch();
  const user = useRootSelector(authSelectors.selectUser);

  const [submittable, setSubmittable] = useState(false);
  const [form] = Form.useForm();
  const values = Form.useWatch([], form);

  useEffect(() => {
    form.validateFields({ validateOnly: true }).then(
      () => setSubmittable(true),
      () => setSubmittable(false)
    );
  }, [values]);

  const login = () => {
    try {
      submittable && dispatch(LOGIN(user));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="login">
      <Form
        form={form}
        name="basic"
        style={{ maxWidth: 600 }}
        autoComplete="off"
        layout="vertical"
        scrollToFirstError
      >
        <Form.Item<LoginDetails>
          label="Email"
          name="email"
          rules={loginRules.email}
        >
          <Input
            type="email"
            name="email"
            size="large"
            onChange={(e) =>
              dispatch(
                UPDATE_USER_DATA({ path: e.target.name, data: e.target.value })
              )
            }
          />
        </Form.Item>

        <Form.Item<LoginDetails>
          label="Password"
          name="password"
          rules={loginRules.password}
        >
          <Input.Password
            name="password"
            size="large"
            onChange={(e) =>
              dispatch(
                UPDATE_USER_DATA({ path: e.target.name, data: e.target.value })
              )
            }
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            disabled={!submittable}
            onClick={() => login()}
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default BaseLoginForm;
