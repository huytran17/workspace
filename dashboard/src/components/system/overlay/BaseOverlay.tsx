import { FC } from "react";
import { Spin } from "antd";
import "./styles.scss";
import { useSelector } from "react-redux";
import { systemSelectors } from "@/store/system/states/selectors";

const BaseOverlay: FC<{}> = () => {
  const isLoading = useSelector(systemSelectors.isLoading);

  return (
    <>
      {isLoading && (
        <div className="overlay">
          <Spin />
        </div>
      )}
    </>
  );
};

export default BaseOverlay;
