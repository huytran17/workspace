import { useRootSelector } from "@/hooks/redux";
import { systemSelectors } from "@/store/system/states/selectors";
import { Spin } from "antd";
import { FC } from "react";
import "./styles.scss";

const BaseOverlay: FC<{}> = () => {
  const isLoading = useRootSelector(systemSelectors.isLoading);

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
