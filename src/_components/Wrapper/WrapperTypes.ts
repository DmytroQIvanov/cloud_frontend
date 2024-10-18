export interface IWrapperProp {
  header?: boolean;
  bottom?: boolean;
  metaData?: { title?: string };
  children: React.ReactNode;
  fileInput?: boolean;
  ip?: any;
  agent?: any;
  forwarded?: any;
  fullPage?: boolean;
  //     {
  //   onCreateNotification: (
  //     onCreateNotification: onCreateNotificationDTO,
  //   ) => void;
  // }) => React.ReactNode | null;
}
