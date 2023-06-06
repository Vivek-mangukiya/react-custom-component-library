export interface ReactAccordionProps {
  id: string;
  name: string;
  dataTestID: string;
  className: string;
  accTooltipclassName: string;
  accTooltipID: string;
  accTooltipClass: string;
  accTooltipPosition: "top" | "bottom" | "right" | "left";
  accList: Array<object>;
}
