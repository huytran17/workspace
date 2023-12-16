import { useRootDispatch } from "@/hooks/redux";
import { SEND_PASSWORD_RESET_EMAIL } from "@/store/auth/actions/actions";
import { passwordResetRules } from "@/validation/password-reset";
import { Button, Form, Input } from "antd";
import { FC, useEffect, useState } from "react";
import "./style.scss";

type PasswordResetDetails = {
  email: string;
};

const BaseSendPasswordResetEmailForm: FC<{}> = () => {
  const dispatch = useRootDispatch();

  const [submittable, setSubmittable] = useState(false);

  const [form] = Form.useForm();
  const values = Form.useWatch([], form);

  useEffect(() => {
    form.validateFields({ validateOnly: true }).then(
      () => setSubmittable(true),
      () => setSubmittable(false)
    );
  }, [values]);

  const sendPasswordResetEmail = () =>
    dispatch(SEND_PASSWORD_RESET_EMAIL(form.getFieldValue("email")));

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
            disabled={!submittable}
            onClick={() => sendPasswordResetEmail()}
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default BaseSendPasswordResetEmailForm;
