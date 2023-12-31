import { useRootDispatch, useRootSelector } from "@/hooks/redux";
import { RESET_PASSWORD } from "@/store/auth/actions/actions";
import { passwordResetRules } from "@/validation/password-reset";
import { Button, Form, Input } from "antd";
import { FC, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import "./style.scss";
import BaseOverlay from "@/components/system/overlay/BaseOverlay";
import { systemSelectors } from "@/store/system/states/selectors";

type ResetPasswordDetails = {
  password: string;
  password_confirmation: string;
};

const BaseResetPassword: FC<{}> = () => {
  const navigate = useNavigate();
  const dispatch = useRootDispatch();
  const [searchParams] = useSearchParams();

  const [submittable, setSubmittable] = useState(false);
  const isLoading = useRootSelector(systemSelectors.isLoading);

  const [form] = Form.useForm();
  const values = Form.useWatch([], form);

  useEffect(() => {
    form.validateFields({ validateOnly: true }).then(
      () => setSubmittable(true),
      () => setSubmittable(false)
    );
  }, [values]);

  const resetPassword = async () => {
    try {
      if (!submittable) {
        return;
      }

      const getFormValue = (fieldName: string) => form.getFieldValue(fieldName);

      const payload = {
        token: searchParams.get("token") || "",
        password: getFormValue("password"),
        password_confirmation: getFormValue("password_confirmation"),
      };

      await dispatch(RESET_PASSWORD(payload));
      navigate("/auth/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="reset-password">
      <BaseOverlay />
      <Form
        form={form}
        name="basic"
        style={{ maxWidth: 600 }}
        autoComplete="off"
        layout="vertical"
        scrollToFirstError
      >
        <Form.Item<ResetPasswordDetails>
          label="Password"
          name="password"
          rules={passwordResetRules.password}
        >
          <Input.Password name="password" size="large" />
        </Form.Item>

        <Form.Item<ResetPasswordDetails>
          label="Password confirmation"
          name="password_confirmation"
          rules={passwordResetRules.password_confirmation}
        >
          <Input.Password name="password_confirmation" size="large" />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            disabled={!submittable || isLoading}
            onClick={() => resetPassword()}
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default BaseResetPassword;
