import { CSSProperties } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import "./SampleComponent.scss";

export interface SampleComponentProps {
  className?: string;
  style?: CSSProperties;
}

const SampleComponent = ({ className, style }: SampleComponentProps) => {
  return (
    <div className={classNames("sample-component", className)} style={style}>
      <FontAwesomeIcon icon="info-circle" />
      This is a sample component with an icon.
    </div>
  );
};

export default SampleComponent;
