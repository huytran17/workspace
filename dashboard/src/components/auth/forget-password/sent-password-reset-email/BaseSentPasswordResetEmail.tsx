import { FC } from "react";
import "./style.scss";

const BaseSentPasswordResetEmail: FC<{}> = () => {
  return (
    <div className="sent-password-reset">
      <p>An email has been sent to you, please follow for the next step.</p>
    </div>
  );
};

export default BaseSentPasswordResetEmail;
