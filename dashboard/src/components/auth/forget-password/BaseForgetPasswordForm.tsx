import { useRootDispatch, useRootSelector } from "@/hooks/redux";
import { SEND_PASSWORD_RESET_EMAIL } from "@/store/auth/actions/actions";
import { systemSelectors } from "@/store/system/states/selectors";
import { passwordResetRules } from "@/validation/password-reset";
import { Button, Form, Input } from "antd";
import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.scss";

type PasswordResetDetails = {
  email: string;
};

const BaseForgetPasswordForm: FC<{}> = () => {
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

  const sendPasswordResetEmail = async () => {
    try {
      if (!submittable) {
        return;
      }

      const payload = {
        email: form.getFieldValue("email"),
      };

      await dispatch(SEND_PASSWORD_RESET_EMAIL(payload));
      navigate("/auth/reset-password/sent-password-reset");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="forget-password">
      <Form
        form={form}
        name="basic"
        style={{ maxWidth: 600 }}
        autoComplete="off"
        layout="vertical"
        scrollToFirstError
      >
        <Form.Item<PasswordResetDetails>
          label="Email"
          name="email"
          rules={passwordResetRules.email}
        >
          <Input type="email" name="email" size="large" />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            disabled={!submittable || isLoading}
            onClick={() => sendPasswordResetEmail()}
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default BaseForgetPasswordForm;
