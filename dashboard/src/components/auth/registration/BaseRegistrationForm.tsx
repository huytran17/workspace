import { useRootDispatch, useRootSelector } from "@/hooks/redux";
import { REGISTER } from "@/store/auth/actions/actions";
import authSelectors from "@/store/auth/states/selectors";
import { registrationRules } from "@/validation";
import { Button, Form, Input } from "antd";
import { FC, useEffect, useState } from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import { systemSelectors } from "@/store/system/states/selectors";

type RegistrationDetails = {
  email: string;
  fullname: string;
  password: string;
  password_confirmation: string;
};

const BaseRegistrationForm: FC<{}> = () => {
  const navigate = useNavigate();
  const dispatch = useRootDispatch();
  const isLoading = useRootSelector(systemSelectors.isLoading);

  const [submittable, setSubmittable] = useState(false);

  const [form] = Form.useForm();
  const values = Form.useWatch([], form);

  useEffect(() => {
    form.validateFields({ validateOnly: true }).then(
      () => setSubmittable(true),
      () => setSubmittable(false)
    );
  }, [values]);

  const getFormValue = (fieldName: string) => form.getFieldValue(fieldName);

  const register = async () => {
    try {
      if (!submittable) {
        return;
      }

      const payload = {
        email: getFormValue("email"),
        fullname: getFormValue("fullname"),
        password: getFormValue("password"),
        password_confirmation: getFormValue("password_confirmation"),
      };

      await dispatch(REGISTER(payload));
      navigate("/auth/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="registration">
      <Form
        form={form}
        name="basic"
        style={{ maxWidth: 600 }}
        autoComplete="off"
        layout="vertical"
        scrollToFirstError
      >
        <Form.Item<RegistrationDetails>
          label="Email"
          name="email"
          rules={registrationRules.email}
        >
          <Input type="email" name="email" size="large" />
        </Form.Item>

        <Form.Item<RegistrationDetails>
          label="Fullname"
          name="fullname"
          rules={registrationRules.fullname}
        >
          <Input name="fullname" size="large" />
        </Form.Item>

        <Form.Item<RegistrationDetails>
          label="Password"
          name="password"
          rules={registrationRules.password}
        >
          <Input.Password name="password" size="large" />
        </Form.Item>

        <Form.Item<RegistrationDetails>
          label="Password Confirmation"
          name="password_confirmation"
          rules={registrationRules.password_confirmation}
        >
          <Input.Password name="password_confirmation" size="large" />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            disabled={!submittable || isLoading}
            onClick={() => register()}
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default BaseRegistrationForm;
